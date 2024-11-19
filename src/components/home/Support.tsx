import Link from 'next/link'

const Support: React.FC = async () => {
  return (
    <section className='flex flex-col items-center justify-center bg-gradient-to-bl from-blue-700 via-blue-500 to-blue-700 py-20'>
      <div
        data-aos='fade-up'
        data-aos-duration='1000'
        className='mx-auto max-w-screen-sm text-center '
      >
        <h2 className='mb-4 text-6xl font-extrabold tracking-tight text-white dark:text-white'>
          Usefull Links
        </h2>
        <p className='font-light text-gray-100  sm:text-xl lg:mb-16'>Feel Free To Explore</p>
      </div>
      <div className='flex max-w-6xl flex-row flex-wrap items-stretch justify-around  p-5 text-gray-100'>
        <Link href='/home/privacy'>
        <div
          data-aos='zoom-in'
          data-aos-duration='1000'
          className='m-2 flex w-72 flex-row items-center justify-center rounded-3xl border-2 p-2 dark:border-gray-600 dark:shadow-2xl dark:hover:bg-gray-700 dark:hover:dark:shadow-xl'
        >
          <div className='m-2 p-1 text-2xl font-semibold md:text-2xl'>Privacy Policy</div>
            <div className='p-1'>
              <svg
                className='h-6 w-6 dark:text-blue-600 dark:hover:text-white'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http:/www.w3.org/2000/svg'
              >
                <path d='M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z' />
                <path d='M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z' />
              </svg>
            </div>
        </div>
        </Link>
        <Link href='/home/pricing'>
        <div
          data-aos='zoom-in'
          data-aos-duration='1000'
          className='m-2 flex w-72 flex-row items-center justify-center rounded-3xl border-2 p-2 dark:border-gray-600 dark:shadow-2xl dark:hover:bg-gray-700 dark:hover:dark:shadow-xl'
        >
          <div className='m-2 p-2 text-2xl font-semibold md:text-2xl'>Pricing</div>
            <div className='p-1'>
              <svg
                className='h-6 w-6 dark:text-blue-600 dark:hover:text-white'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http:/www.w3.org/2000/svg'
              >
                <path d='M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z' />
                <path d='M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z' />
              </svg>
            </div>
        </div>
          </Link>
          <Link href='/home/terms'>
        <div
          data-aos='zoom-in'
          data-aos-duration='1000'
          className='m-2 flex w-72 flex-row items-center justify-center rounded-3xl border-2 p-2 dark:border-gray-600 dark:shadow-2xl dark:hover:bg-gray-700 dark:hover:dark:shadow-xl'
        >
          <div className='m-2 p-2 text-2xl font-semibold md:text-2xl'>Our Terms</div>
            <div className='p-1'>
              <svg
                className='h-6 w-6 dark:text-blue-600 dark:hover:text-white'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http:/www.w3.org/2000/svg'
              >
                <path d='M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z' />
                <path d='M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z' />
              </svg>
            </div>
        </div>
          </Link>
        <Link href='/home/contact'>
        <div
          data-aos='zoom-in'
          data-aos-duration='1000'
          className='m-2 flex w-72 flex-row items-center justify-center rounded-3xl border-2 p-2 dark:border-gray-600 dark:shadow-2xl dark:hover:bg-gray-700 dark:hover:dark:shadow-xl'
        >
          <div className='m-2 p-2 text-2xl font-semibold md:text-2xl'>Contact us Form</div>
            <div className='p-1'>
              <svg
                className='h-6 w-6 dark:text-blue-600 dark:hover:text-white'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http:/www.w3.org/2000/svg'
              >
                <path d='M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z' />
                <path d='M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z' />
              </svg>
            </div>
        </div>
          </Link>
          <Link href='/account'>
        <div
          data-aos='zoom-in'
          data-aos-duration='1000'
          className='m-2 flex w-72 flex-row items-center justify-center rounded-3xl border-2 p-2 dark:border-gray-600 dark:shadow-2xl dark:hover:bg-gray-700 dark:hover:dark:shadow-xl'
        >
          <div className='m-2 p-2 text-2xl font-semibold md:text-2xl'>Profile</div>
            <div className='p-1'>
              <svg
                className='h-6 w-6 dark:text-blue-600 dark:hover:text-white'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http:/www.w3.org/2000/svg'
              >
                <path d='M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z' />
                <path d='M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z' />
              </svg>
            </div>
        </div>
          </Link>
          <Link href='/home/pentest'>
        <div
          data-aos='zoom-in'
          data-aos-duration='1000'
          className='m-2 flex w-72 flex-row items-center justify-center rounded-3xl border-2 p-2 dark:border-gray-600 dark:shadow-2xl dark:hover:bg-gray-700 dark:hover:dark:shadow-xl'
        >
          <div className='m-2 p-2 text-2xl font-semibold md:text-2xl'>Services</div>
            <div className='p-1'>
              <svg
                className='h-6 w-6 dark:text-blue-600 dark:hover:text-white'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http:/www.w3.org/2000/svg'
              >
                <path d='M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z' />
                <path d='M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z' />
              </svg>
            </div>
        </div>
          </Link>
      </div>
    </section>
  )
}

export default Support
