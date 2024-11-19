import TeamPortFolioPage from '@/components/teamPortfolio/teamPortFolioPage'
import { getAllTeamPortfolio } from '@/lib/api-sanity'

export const revalidate = 10

const Page = async () => <TeamPortFolioPage data={await getAllTeamPortfolio()} />

export default Page
