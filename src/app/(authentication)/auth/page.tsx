import SignInButton from "@/components/auth/sign-in";
import { language } from "@/resource/language/language";



export default function SignInPage() {
  return (
    <>
      <div className="flex flex-col pb-10 space-y-4 text-center">
        <h1 className="text-2xl font-semibold tracking-tight">
          {language.SIGN_IN_ACCOUNT}
        </h1>
        <p className="text-sm py-2 text-muted-foreground">
         {language.SIGN_IN_P}
        </p>
        <SignInButton />
      </div>
    </>
  );
}
