import NextAuth, { DefaultSession, NextAuthOptions } from "next-auth";
import Google from "next-auth/providers/google";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { db } from "@/core/client/client";
import { Adapter } from "next-auth/adapters";
import { getUserRole } from "@/core/models/getUserRole";
import { $Enums } from "@prisma/client";

declare module "next-auth" {
  interface Session {
    user: DefaultSession["user"] & {
      id: string;
      name: string;
      email: string;
      image: string;
      role: $Enums.Role;
    };
  }
}
declare module "next-auth/jwt" {
  /** Returned by the `jwt` callback and `getToken`, when using JWT sessions */
  interface JWT {
    role?: $Enums.Role;
  }
}

export type AuthSession = {
  session: {
    user: {
      id: string;
      name: string;
      email: string;
      image: string;
      role: $Enums.Role;
    };
  } | null;
};

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(db) as Adapter,
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
  ],
  callbacks: {
    session: ({ session, token }) => {
      session.user.id = token.sub as string;
      session.user.image = token.picture as string;
      session.user.email = token.email as string;
      session.user.name = token.name as string;
      session.user.role = token.role as $Enums.Role;
      return session;
    },
    async jwt({ token, trigger, session }) {
      if (trigger === "update") token.name = session?.user?.name;
      else if (trigger === "signIn") {
        const { userRole } = await getUserRole(token.sub as string);
        if (userRole) token.role = userRole;
      }
      return token;
    },
  },
  session: {
    strategy: "jwt",
    maxAge: 60 * 60 * 24 * 7,
    // cookie: {
    //   secure: process.env.NODE_ENV === "production", // Ensures cookies are only sent over HTTPS
    //   sameSite: "none", // Important for cross-origin requests
    // },
  },
  secret: process.env.NEXTAUTH_SECRET as string,
  pages: {
    signIn: "/auth",
    error: "/auth",
    signOut: "/auth",
    newUser: "/account",
  },
};
