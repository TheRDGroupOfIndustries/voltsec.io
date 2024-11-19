import { IBlog, ITeamPortfolio } from "@/resource/types/interface"
import { blog, blogs, employee, teamPortfolio } from '../lib/query'

import { client } from '../../sanity/lib/client'
interface ISearchParams {
  searchParams: { [key: string]: string | string[] | undefined }
}

export const getAllBlog = async () => await client.fetch<IBlog[]>(blogs)
export const getBlogBySlug = async (slug: string) => await client.fetch<IBlog>(blog, { slug })

export const getAllTeamPortfolio = async () => await client.fetch<ITeamPortfolio[]>(teamPortfolio)
export const getEmployeeBySlug = async (slug: string) =>
  await client.fetch<ITeamPortfolio>(employee, { slug })
