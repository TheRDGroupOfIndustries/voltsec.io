import BlogBySlug from "@/components/blogs/blogBySlug";
import { getBlogBySlug } from "@/lib/api-sanity";
import { IParams } from "@/resource/types/interface";

export const revalidate = 10;

const Page = async ({ params }: IParams) => (
  <BlogBySlug data={await getBlogBySlug(params.slug)} />
);

export default Page;
