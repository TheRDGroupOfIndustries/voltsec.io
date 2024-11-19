import { IBlog, ITeamPortfolio } from '@/types/interface'
import { Button } from '../ui/button'
import { ChevronRight, ChevronsUpDown, Search } from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Input } from '../ui/input'
import { BlogCard } from '../blogs/blog-card'
import TeamPortfolioCard from './teamPortfolioCard'

function TeamPortFolioPage({ data }: { data: ITeamPortfolio[] }) {
  return (
    <section className=' bg-gradient-to-tr from-blue-700 via-blue-500 to-blue-700 pt-10 md:pt-20'>
      <div className='mx-auto flex w-full max-w-screen-2xl items-center justify-between pb-10'>
        <h1 className='w-full text-center text-2xl font-semibold tracking-wider  text-secondary md:text-4xl underline'>
          Team Portfolio
        </h1>
      </div>
      <div className=' bg-secondary px-4 md:px-8'>
        <div className='grid grid-cols-1 gap-5 py-5 md:grid-cols-3'>
          {data?.map((employee, index) => <TeamPortfolioCard data={employee} key={index} />)}
        </div>
      </div>
    </section>
  )
}

export default TeamPortFolioPage
