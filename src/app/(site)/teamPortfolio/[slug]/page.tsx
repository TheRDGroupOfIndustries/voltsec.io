import BlogBySlug from '@/components/blogs/blogBySlug'
import TeamBySlug from '@/components/teamPortfolio/teamBySlug'
import { getBlogBySlug, getEmployeeBySlug } from '@/lib/api-sanity'
import { IBlog, IParams } from '@/types/interface'

export const revalidate = 10

const Page = async ({ params }: IParams) => <TeamBySlug data={await getEmployeeBySlug(params.slug)} />

export default Page
