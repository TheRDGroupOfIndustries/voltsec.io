import Image from "next/image";
import Link from "next/link";
import { Icons } from "@/assets/icon/icons";
import { language } from "@/resource/language/language";
import { routes } from "@/resource/routes/routes";


export default async function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  
  return (
    <div className="container relative  h-screen flex-col items-center justify-center grid lg:max-w-none md:grid-cols-2 px-0">
      <div className="relative   h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex">
        <Image
          src={`https://images.unsplash.com/photo-1601436155198-2ebfea8117b0?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`}
          alt="authentication"
          fill
          className="object-cover h-full w-full absolute top-0 inset-0  md:block"
        />
        <div className='absolute inset-0 jigsaw' />
        <Link href={"/"}>
          <div className="relative z-20 flex items-center text-xl font-medium">
            <Icons.SHIELDCHECKICON className="h-6 w-6 mr-2" />
            {language.VOLTSEC_IO}
          </div>
        </Link>
      </div>
      <div className="lg:p-8">
        <div className="mx-auto flex w-full flex-col justify-center space-y-2 sm:w-[350px]">
          {children}
          <p className="px-8 text-center text-sm text-muted-foreground">
            {language.TERM_PARA}
            <Link
              href={routes.AUTH_LAYOUT.TERMS}
              className="underline underline-offset-4 hover:text-primary"
            >
              {language.TERMS_OF_SERVICE}
            </Link>
            {language.AND}
            <Link
              href={routes.AUTH_LAYOUT.SERVICE}
              className="underline underline-offset-4 hover:text-primary"
            >
              {language.PRIVACY_POLICY}
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
