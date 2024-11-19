import { IBlog } from "@/resource/types/interface";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { PortableText } from "@portabletext/react";
import { AspectRatio } from "../ui/aspect-ratio";
import { formatTimestamp } from "@/core/utils/date";

function BlogBySlug({ data }: { data: IBlog }) {
  return (
    <section className="flex flex-col bg-gradient-to-tr from-blue-700 via-blue-500 to-blue-700 pt-10 md:pt-20">
      <div className="mx-auto p-2 flex w-full max-w-6xl flex-col items-center justify-between py-10 md:flex-row ">
        <div className="w-full mx-2 pt-10">
          <AspectRatio ratio={3 / 2}>
            <Image
              src={data?.image}
              alt={data?.blogName}
              width={500}
              height={400}
              className="h-full w-full rounded-2xl object-cover"
            />
          </AspectRatio>
        </div>
        <div className="m-2 ml-5 rounded-md flex w-full flex-col items-start justify-start gap-3 p-5 md:p-0">
          <p className="text-4xl font-bold capitalize  text-secondary ">
            {data?.category.title}
          </p>
          <h1 className="text-xl font-bold capitalize text-white md:text-4xl">
            {data?.blogName}
          </h1>
          <p className="text-white text-xl">
            Updated on: {formatTimestamp(data?.createdAt)}
          </p>
          <div className="flex items-center justify-center gap-3 px-2 md:p-0">
            <Avatar>
              <AvatarImage
                src={data?.author?.image}
                alt={data?.author?.authorName}
              />
            </Avatar>
            <p className="capitalize text-xl text-white">
              {data?.author?.authorName}
            </p>
          </div>
        </div>
      </div>
      <div className="prose lg:prose-xl mx-auto max-w-[90vw] rounded-2xl bg-white text-black p-5 py-10">
        <PortableText value={data?.description} />
      </div>
    </section>
  );
}

export default BlogBySlug;
