import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AspectRatio } from "../ui/aspect-ratio";
import { IBlog } from "@/resource/types/interface";

export function BlogCard({ data }: { data: IBlog }) {
  return (
    <Card className="group bg-blue-100 p-3 rounded-3xl border-2 overflow-hidden hover:shadow-xl">
      <Link
        aria-label={data?.blogName}
        href={`/blog/${data?.slug}`}
      >
        <CardHeader className="overflow-hidden p-0">
          <AspectRatio
            ratio={5 / 3}
            className="overflow-hidden"
          >
            {data?.image && (
              <Image
                src={data?.image ?? "/images/product-placeholder.webp"}
                alt={data?.blogName}
                className="object-cover rounded-3xl transition-all duration-300 group-hover:scale-110"
                sizes="(min-width: 1024px) 20vw, (min-width: 768px) 25vw, (min-width: 640px) 33vw, (min-width: 475px) 50vw, 100vw"
                fill
                loading="lazy"
              />
            )}
          </AspectRatio>
        </CardHeader>
      </Link>
      <Link
        href={`/blog/${data?.slug}`}
        tabIndex={-1}
      >
        <CardFooter className="flex flex-col items-start justify-start px-5 py-3 gap-5">
          <CardTitle className="text-2xl text-black font-bold">{data?.category?.title}</CardTitle>
          <CardDescription className="text-xl text-black">
            {data?.blogName}
          </CardDescription>
        </CardFooter>
      </Link>
    </Card>
  );
}
