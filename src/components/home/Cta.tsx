import Link from 'next/link'
import React from 'react'

const Cta = () => {
  return (
    <section className='flex flex-col flex-wrap items-center overflow-hidden bg-gradient-to-tl from-blue-700 via-blue-500 to-blue-700 pt-10 md:pt-20'>
      <div className='mx-2 rounded-3xl bg-white/30 py-6 md:py-8 lg:py-12'>
        <div className=' grid h-auto grid-rows-2 '>
          <div className='rows-span-1 flex flex-col h-full items-center justify-center p-5 md:flex-row'>
            <h2 className='text-xl font-bold text-white md:text-3xl'>
              Secure with Confidence :
           </h2>
            <h3 className='text-xl font-bold text-white md:text-3xl'>
              Discover Every Threat Swiftly, with VoltSec.io
            </h3>
          </div>
          <div className='row-span-2 flex flex-col items-center justify-center gap-x-5 md:flex-row'>
            <Link href='/home/pentest'>
              <div className='m-2 inline-flex w-80 items-center justify-center rounded-lg bg-blue-600 p-4 px-5 py-3 text-center text-base font-medium text-white shadow-2xl shadow-black/40 hover:bg-blue-700 focus:ring-4  md:w-auto'>
                Scan now
                <svg className='-mr-1 ml-2 h-5 w-5' fill='currentColor' viewBox='0 0 20 20'>
                  <path
                    fillRule='evenodd'
                    d='M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z'
                    clipRule='evenodd'
                  ></path>
                </svg>
              </div>
            </Link>
            <Link href='/home/pricing'>
              <div className='m-2 flex w-80 flex-row items-center justify-center rounded-lg bg-white/80 px-5 py-3 text-center text-base font-medium text-blue-500 shadow-2xl shadow-black/40 hover:bg-white md:w-auto'>
                View Pricing
                <svg className='-mr-1 ml-2 h-5 w-5' fill='currentColor' viewBox='0 0 20 20'>
                  <path
                    fillRule='evenodd'
                    d='M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z'
                    clipRule='evenodd'
                  ></path>
                </svg>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Cta
