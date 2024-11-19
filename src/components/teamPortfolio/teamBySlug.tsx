import { ITeamPortfolio } from '@/types/interface'
import Image from 'next/image'
import { PortableText } from '@portabletext/react'
import { formatTimestamp } from '@/utils/date'
import { AspectRatio } from '../ui/aspect-ratio'

function TeamBySlug({ data }: { data: ITeamPortfolio }) {
  return (
    <section className='flex flex-col bg-gradient-to-tr from-blue-700 via-blue-500 to-blue-700 pt-10 md:pt-20'>
      <div className='mx-auto flex w-full max-w-6xl flex-col items-center justify-between py-10 md:flex-row '>
        <div className='flex w-full flex-col items-start justify-start gap-3 p-5 md:p-0'>
          <p className='text-xl font-semibold capitalize  text-secondary '>{data?.department}</p>
          <h1 className='text-2xl font-bold capitalize text-white md:text-5xl'>
            {data?.employeeName}
          </h1>
          <p className='text-white'>Updated on: {formatTimestamp(data?.createdAt)}</p>
        </div>
        <div className='w-full pt-10'>
          <AspectRatio ratio={3 / 2}>
            <Image
              src={data?.image}
              alt={data?.employeeName}
              width={500}
              height={400}
              className='h-full w-full rounded-2xl object-cover'
            />
          </AspectRatio>
        </div>
      </div>
      <div className='prose lg:prose-xl mx-auto max-w-[90vw] rounded-2xl bg-white p-5 py-10'>
        <PortableText value={data?.description} />
      </div>
    </section>
  )
}

export default TeamBySlug
