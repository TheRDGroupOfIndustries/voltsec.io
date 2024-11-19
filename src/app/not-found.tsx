import Link from 'next/link'

export default function NotFound() {
  return (
    <div className=' flex h-screen items-center justify-center bg-white pt-10 dark:bg-slate-800 dark:text-white'>
      <section className='bg-white dark:bg-slate-800'>
        <div className='mx-auto max-w-screen-xl px-4 py-8 lg:px-6 lg:py-16'>
          <div className='mx-auto max-w-screen-sm text-center'>
            <h1 className='mb-4 text-4xl font-extrabold tracking-tight text-blue-600 dark:text-blue-600 lg:text-7xl'>
              404
            </h1>
            <p className='mb-4 text-3xl font-semibold tracking-tight text-slate-900 dark:text-white md:text-4xl'>
              Something&apos;s missing.
            </p>
            <p className='mb-4 text-lg font-light text-slate-500 dark:text-slate-400'>
              Sorry, we can&apos;t find that page. You&apos;ll find lots to explore on the home
              page.{' '}
            </p>
            <Link href='/'>
              <button className='inline-flex items-center rounded-lg bg-primary-700 px-5 py-2.5 text-center text-sm font-medium text-white ring-1 hover:bg-primary-800 focus:ring-primary-300 dark:focus:ring-primary-900'>
                Back to home page
                <svg className='-mr-1 ml-2 h-5 w-5' fill='currentColor' viewBox='0 0 20 20'>
                  <path
                    fillRule='evenodd'
                    d='M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z'
                    clipRule='evenodd'
                  ></path>
                </svg>
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
