'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Breadcrumb = () => {
  const router = usePathname()
  const pathSegments = router.split('/').filter((segment) => segment !== '')

  const generateBreadcrumbItems = () => {
    let path = ''
    return pathSegments.map((segment, index) => {
      path += `/${segment}`
      const isLast = index === pathSegments.length - 1
      return (
        <li key={index} className='inline-flex items-center'>
          {isLast ? (
            <span className='ml-1 capitalize text-white ' aria-current='page'>
              {segment}
            </span>
          ) : (
            <Link href={path}>
              <p className='inline-flex items-center capitalize text-white underline-offset-8 hover:underline '>
                {segment}
                <svg
                  className='h-6 w-6 text-white'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    fillRule='evenodd'
                    d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z'
                    clipRule='evenodd'
                  ></path>
                </svg>
              </p>
            </Link>
          )}
        </li>
      )
    })
  }

  return (
    <div className='block items-center justify-between sm:flex '>
      <nav className='flex rounded-3xl bg-blue-500' aria-label='Breadcrumb'>
        <ol className='inline-flex items-center space-x-1 text-sm font-medium md:space-x-2'>
          <li className='inline-flex items-center'>
            <Link
              href='/'
              className='inline-flex items-center text-white underline-offset-8 hover:underline '
            >
              <svg
                className='mr-2.5 h-5 w-5'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path d='M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z'></path>
              </svg>
              Home
              <svg
                className='h-6 w-6 text-white'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fillRule='evenodd'
                  d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z'
                  clipRule='evenodd'
                ></path>
              </svg>
            </Link>
          </li>

          {generateBreadcrumbItems()}
        </ol>
      </nav>
    </div>
  )
}

export default Breadcrumb
