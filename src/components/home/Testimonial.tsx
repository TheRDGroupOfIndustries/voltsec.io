const Testimonial = async () => {
  return (
    <div>
      <section className='bg-white dark:bg-gray-800'>
        <div className='mx-auto max-w-screen-xl px-4 py-8 text-center lg:px-6 lg:py-16'>
          <div className='mx-auto max-w-screen-sm'>
            <h2 className='mb-4 text-6xl font-extrabold tracking-tight text-gray-900 dark:text-white'>
              Testimonials
            </h2>
            <p className='mb-8 font-light text-gray-500 dark:text-gray-200 sm:text-xl lg:mb-16'>
              A honest testimonial of our service that comes from our customer, who has benefited
              and experienced success as a result of the work we did for them.
            </p>
          </div>
          <div className='mb-8 grid lg:mb-12 lg:grid-cols-2'>
            <figure className='flex flex-col items-center justify-center rounded-sm border-b border-gray-200 bg-gray-50 p-8 text-center dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:dark:shadow-xl md:p-12 lg:border-r'>
              <blockquote className='mx-auto mb-8 max-w-2xl text-gray-500 dark:text-gray-200'>
                <p className='my-4'>
                  Voltsec is one of the best pentesting teams I&apos;ve ever worked with. They are
                  very professional, they take time to understand your needs and then they deliver.
                  I had a very good experience with them.
                </p>
              </blockquote>
            </figure>
            <figure className='flex flex-col items-center justify-center rounded-sm border-b border-gray-200 bg-gray-50 p-8 text-center dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:dark:shadow-xl md:p-12'>
              <blockquote className='mx-auto mb-8 max-w-2xl text-gray-500 dark:text-gray-200'>
                <p className='my-4'>
                  I am very impressed with the service I have received from voltsec. They executed
                  our pentest flawlessly and their communication and professionalism was top notch.
                  I would highly recommend them to anyone looking for a reputable pentesting firm
                  that they can rely on.
                </p>
              </blockquote>
            </figure>
            <figure className='flex flex-col items-center justify-center rounded-sm border-b border-gray-200 bg-gray-50 p-8 text-center dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:dark:shadow-xl md:p-12 lg:border-b-0 lg:border-r'>
              <blockquote className='mx-auto mb-8 max-w-2xl text-gray-500 dark:text-gray-200'>
                <p className='my-4'>
                  Voltsec is providing the best pentest service in the market as they have a team of
                  experts and a very good management. They are very much customer oriented and they
                  really understand their clients.
                </p>
              </blockquote>
            </figure>
            <figure className='flex flex-col items-center justify-center rounded-sm border-gray-200 bg-gray-50 p-8 text-center dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:dark:shadow-xl md:p-12'>
              <blockquote className='mx-auto mb-8 max-w-2xl text-gray-500 dark:text-gray-200'>
                <p className='my-4'>
                  I was extremely impressed with voltsec&apos;s service and level of
                  professionalism. If you&apos;re looking for a pentesting firm that you can trust,
                  I would highly recommend their services.
                </p>
              </blockquote>
            </figure>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Testimonial
