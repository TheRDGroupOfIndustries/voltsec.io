import { IBlog } from "@/resource/types/interface";
import { BlogCard } from "./blog-card";
import { Button } from "../ui/button";
import { ChevronRight, ChevronsUpDown, Search } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "../ui/input";

function BlogPage({ data }: { data: IBlog[] }) {
  return (
    <section className=" bg-gradient-to-tr from-blue-700 via-blue-500 to-blue-700 pt-10 md:pt-20">
      <div className="mx-auto flex w-full max-w-screen-2xl flex-col items-center justify-center px-4 py-5 md:flex-row">
        <h1 className="w-full max-w-3xl py-5 text-center md:text-left text-2xl text-white font-semibold tracking-wider text-secondary md:py-10 md:text-4xl">
          Empower Your Cybersecurity: <br /> Explore Expert Insights and
          Solutions
        </h1>
        <div className="max-w-full w-96 bg-white p-1 rounded flex items-center justify-center">
          <Search className="text-black" />
          <Input className="border-none w-80 bg-white m-2 text-black" />
        </div>
      </div>
      <Button className="group mx-4  mb-10 rounded-xl  py-5 text-sm text-white-700 bg-gray-100 text-blue-700 md:px-4  md:py-6 md:text-xl">
        Let VoltSec.io Handle Your Security Needs.
        <ChevronRight className="ml-4 h-8 w-8 transition-all duration-300 group-hover:translate-x-2" />
      </Button>
      <div className="mx-4 md:mx-8  overflow-x-scroll lg:overflow-hidden flex max-w-screen-2xl items-center justify-between gap-1 px-4 py-3">
        <Button
          variant={"primary"}
          className=" text-xl text-blue-700 md:text-2xl"
        >
          All
        </Button>
        <Button variant={"primary"} className="font-semibold text-blue-700">
          Web Pentest
        </Button>
        <Button variant={"primary"} className="font-semibold text-blue-700">
          Cloud Pentest
        </Button>
        <Button variant={"primary"} className="font-semibold text-blue-700">
          Network Pentest
        </Button>
        <Button variant={"primary"} className="font-semibold text-blue-700">
          Api Pentest
        </Button>
        <Button variant={"primary"} className="font-semibold text-blue-700">
          Hack Removal
        </Button>
        <Button variant={"primary"} className="font-semibold text-blue-700">
          Security Audit
        </Button>
        <Button variant={"primary"} className="font-semibold text-blue-700">
          Statics
        </Button>
        <Button variant={"primary"} className="font-semibold text-blue-700">
          Cyber News
        </Button>

        {/* {data.map(({ category }, index) => (
          <Button key={index} className='bg-transparent text-xl'>
            {category.title}
          </Button>
        ))} */}
        {/* <div className='hidden flex-row overflow-x-auto md:flex'>
          {data.map(({ category }, index) => (
            <Button key={index} className='bg-transparent text-xl'>
              {category.title}
            </Button>
          ))}
        </div> */}
        {/*  */}
        {/* <DropdownMenu>
          <DropdownMenuTrigger className='text-xm flex items-center justify-center gap-1 rounded bg-secondary px-2 py-2 text-primary md:hidden'>
            Select
            <ChevronsUpDown />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuSeparator />
            {data.map(({ category }, index) => (
              <DropdownMenuItem key={index} className='text-xl'>
                {category.title}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu> */}
      </div>
      <div className=" px-4 md:px-8">
        <div className="grid grid-cols-1 gap-5 py-5 md:grid-cols-3">
          {data?.map((blog, index) => <BlogCard data={blog} key={index} />)}
        </div>
      </div>
    </section>
  );
}

export default BlogPage;
