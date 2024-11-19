import Logo from "@/components/site/Logo";
import { Loader } from "lucide-react";

export default function Loading() {
  // TODO: move all style to Styles object

  return (
    <div
      className="flex justify-center items-center
     h-screen w-full animate-pulse p-4"
    >
      <div role="status">
        <div className="flex w-full h-full gap-5 justify-center items-center flex-col">
          <Logo color="text-black" />
          <Loader className="h-8 w-8 animate-spin text-slate-800" />
        </div>
        <span className="sr-only text-slate-800">Loading...</span>
      </div>
    </div>
  );
}
