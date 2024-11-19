import Link from 'next/link'

const PricingBox = async () => {
  return (
    <section className='bg-white pt-10 dark:bg-gray-800'>
      <div className='max-w-screen] mx-auto px-4 py-8 lg:px-6 lg:py-16'>
        <div className='mx-auto mb-8 flex max-w-screen-md flex-col items-center justify-center text-center lg:mb-12'>
          <h2 className='mb-4 text-6xl font-extrabold tracking-tight text-gray-900 dark:text-white'>
            Our Pricing
          </h2>
          <p className='mb-5 font-light text-gray-500 dark:text-gray-400 sm:text-xl'>
            Gain access to in-depth, comprehensive security tests, and detect high-risk
            vulnerabilities and critical CVEs. and focus on markets where technology, innovation,
            and capital can unlock long-term value and drive economic growth
          </p>
          <form className='max-w-xl'>
            <Link href='/home/Pricing'>
              <button className='inline-flex items-center justify-center rounded-lg bg-primary-700 px-5 py-3 text-center text-base font-medium text-white hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-blue-600 dark:hover:bg-blue-700'>
                <svg
                  className='mr-2 h-6 w-6'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    fillRule='evenodd'
                    d='M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z'
                    clipRule='evenodd'
                  />
                </svg>
                Check Out Now
              </button>
            </Link>
          </form>
        </div>
      </div>
    </section>
  )
}

export default PricingBox
