import Image from "next/image";
import Link from "next/link";
import { cn } from "../../lib/utils";

const Logo = ({ color }: { color?: string }) => {
  return (
    <Link href="/" className="flex items-center justify-start lg:flex-1">
      <Image
        className=" h-8 w-auto"
        src="/logo.jpeg"
        height="30"
        width="30"
        alt="Voltsec"
      />
      <span
        className={cn(
          "ml-1 text-2xl font-medium",
          color ? color : "text-white"
        )}
      >
        Voltsec.io
      </span>
    </Link>
  );
};

export default Logo;
