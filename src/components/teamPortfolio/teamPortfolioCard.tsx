import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { AspectRatio } from '../ui/aspect-ratio'
import { IBlog, ITeamPortfolio } from '@/types/interface'

function TeamPortfolioCard({ data }: { data: ITeamPortfolio }) {
  return (
    <Card className='group overflow-hidden rounded-3xl border-2 hover:shadow-xl'>
      <Link aria-label={data?.employeeName} href={`/teamPortfolio/${data?.slug}`}>
        <CardHeader className='overflow-hidden p-0'>
          <AspectRatio ratio={5 / 3} className='overflow-hidden'>
            {data?.image && (
              <Image
                src={data?.image ?? '/images/product-placeholder.webp'}
                alt={data?.employeeName}
                className='rounded-3xl object-top transition-all duration-300 group-hover:scale-110'
                sizes='(min-width: 1024px) 20vw, (min-width: 768px) 25vw, (min-width: 640px) 33vw, (min-width: 475px) 50vw, 100vw'
                fill
                loading='lazy'
              />
            )}
          </AspectRatio>
        </CardHeader>
      </Link>
      <Link href={`/teamPortfolio/${data?.slug}`} tabIndex={-1}>
        <CardFooter className='flex flex-col items-start justify-start gap-5 px-5 py-3'>
          <CardTitle className='text-sm'>{data?.department}</CardTitle>
          <CardDescription className='text-2xl text-primary'>{data?.employeeName}</CardDescription>
        </CardFooter>
      </Link>
    </Card>
  )
}

export default TeamPortfolioCard
