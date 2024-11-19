import BlogPage from "@/components/blogs/blogs-page";
import { getAllBlog } from "@/lib/api-sanity";

export const revalidate = 10;

const Page = async () => <BlogPage data={await getAllBlog()} />;

export default Page;
