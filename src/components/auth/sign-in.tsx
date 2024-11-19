"use client";

import { Loader } from "lucide-react";
import { signIn } from "next-auth/react";
import React from "react";
import { toast } from "sonner";
import { constant } from "@/resource/constant/constants";
import { routes } from "@/resource/routes/routes";
import { Icons } from "@/assets/icon/icons";
import { Button } from "../ui/button";
import {language} from "@/resource/language/language"



const SignInButton = () => {
  const [loading, setLoading] = React.useState<boolean>(false);
  const HandleSignin = async () => {
    try {
      setLoading(true);
      await signIn(constant.GOOGLE, {
        callbackUrl: routes.DASHBOARD.HOME,
        redirect: true,
      });
    } catch (error: any) {
      toast.error(error?.message);
      setLoading(false);
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 10000);
    }
  };
  return (
    <>
      <Button
        disabled={loading}
        variant="outline"
        size={"sm"}
        onClick={() => HandleSignin()}
        type="button"
        className='transition-all duration-300'
      >
        {loading ? (
          <Loader className='h-4 w-4 mr-2 animate-spin' />
        ) : (
          <Icons.GOOGLE className='h-4 w-4 mr-2' />
        )}
        {loading ? language.SIGNING : language.SIGN_WITH_GOOGLE}
      </Button>
    </>
  );
};

export default SignInButton;
