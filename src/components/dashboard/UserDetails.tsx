import Image from 'next/image'

const UserDetails = () => {
  return (
    <>
      <div className='block items-center justify-between border-b border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-800 sm:flex lg:mt-1.5'>
        <nav className='flex ' aria-label='Breadcrumb'>
          <ol className='inline-flex items-center space-x-1 text-sm font-medium md:space-x-2'>
            <li className='inline-flex items-center'>
              <a
                href='#'
                className='inline-flex items-center text-gray-700 hover:text-primary-600 dark:text-gray-300 dark:hover:text-white'
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
              </a>
            </li>
            <li>
              <div className='flex items-center'>
                <svg
                  className='h-6 w-6 text-gray-400'
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
                <a
                  href='#'
                  className='ml-1 text-gray-700 hover:text-primary-600 dark:text-gray-300 dark:hover:text-white md:ml-2'
                >
                  Users
                </a>
              </div>
            </li>
            <li>
              <div className='flex items-center'>
                <svg
                  className='h-6 w-6 text-gray-400'
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
                <span className='ml-1 text-gray-400 dark:text-gray-500 md:ml-2' aria-current='page'>
                  List
                </span>
              </div>
            </li>
          </ol>
        </nav>
      </div>{' '}
      <div className='border-gray-200  bg-white p-4  dark:border-gray-700 dark:bg-gray-800 sm:p-6 2xl:col-span-2'>
        <div className='flex  flex-row items-center sm:space-x-4 xl:block xl:space-x-0 2xl:flex 2xl:space-x-4'>
          <Image
            width={100}
            height={100}
            className='mb-4 h-28 w-28 rounded-lg sm:mb-0 xl:mb-4 2xl:mb-0'
            src='/logo.jpeg'
            alt='Jese picture'
          />
          <div>
            <h3 className='mb-1 text-xl font-semibold text-gray-900 dark:text-white'>
              Profile picture
            </h3>
            <div className='mb-4 text-sm text-gray-500 dark:text-gray-400'>
              JPG, GIF or PNG. Max size of 800K
            </div>
            <div className='flex items-center space-x-4'>
              <button
                type='button'
                className='inline-flex items-center rounded-lg bg-primary-700 px-3 py-2 text-center text-sm font-medium text-white hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800'
              >
                <svg
                  className='-ml-1 mr-2 h-4 w-4'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path d='M5.5 13a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 13H11V9.413l1.293 1.293a1 1 0 001.414-1.414l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13H5.5z'></path>
                  <path d='M9 13h2v5a1 1 0 11-2 0v-5z'></path>
                </svg>
                Upload picture
              </button>
              <button
                type='button'
                className='rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700'
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className='col-span-2'>
        <div className='mb-4 border-t border-gray-200 bg-white p-4  dark:border-gray-700 dark:bg-gray-800 sm:p-6 2xl:col-span-2'>
          <h3 className='mb-4 text-xl font-semibold dark:text-white'>General information</h3>
          <form action='#'>
            <div className='grid grid-cols-6 gap-6'>
              <div className='col-span-6 sm:col-span-3'>
                <label
                  htmlFor='first-name'
                  className='mb-2 block text-sm font-medium text-gray-900 dark:text-white'
                >
                  First Name
                </label>
                <input
                  type='text'
                  name='first-name'
                  id='first-name'
                  className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 shadow-sm focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500 sm:text-sm'
                  placeholder='Bonnie'
                  required
                />
              </div>
              <div className='col-span-6 sm:col-span-3'>
                <label
                  htmlFor='last-name'
                  className='mb-2 block text-sm font-medium text-gray-900 dark:text-white'
                >
                  Last Name
                </label>
                <input
                  type='text'
                  name='last-name'
                  id='last-name'
                  className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 shadow-sm focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500 sm:text-sm'
                  placeholder='Green'
                  required
                />
              </div>
              <div className='col-span-6 sm:col-span-3'>
                <label
                  htmlFor='country'
                  className='mb-2 block text-sm font-medium text-gray-900 dark:text-white'
                >
                  Country
                </label>
                <input
                  type='text'
                  name='country'
                  id='country'
                  className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 shadow-sm focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500 sm:text-sm'
                  placeholder='United States'
                  required
                />
              </div>
              <div className='col-span-6 sm:col-span-3'>
                <label
                  htmlFor='city'
                  className='mb-2 block text-sm font-medium text-gray-900 dark:text-white'
                >
                  City
                </label>
                <input
                  type='text'
                  name='city'
                  id='city'
                  className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 shadow-sm focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500 sm:text-sm'
                  placeholder='e.g. San Francisco'
                  required
                />
              </div>
              <div className='col-span-6 sm:col-span-3'>
                <label
                  htmlFor='address'
                  className='mb-2 block text-sm font-medium text-gray-900 dark:text-white'
                >
                  Address
                </label>
                <input
                  type='text'
                  name='address'
                  id='address'
                  className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 shadow-sm focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500 sm:text-sm'
                  placeholder='e.g. California'
                  required
                />
              </div>
              <div className='col-span-6 sm:col-span-3'>
                <label
                  htmlFor='email'
                  className='mb-2 block text-sm font-medium text-gray-900 dark:text-white'
                >
                  Email
                </label>
                <input
                  type='email'
                  name='email'
                  id='email'
                  className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 shadow-sm focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500 sm:text-sm'
                  placeholder='example@company.com'
                  required
                />
              </div>
              <div className='col-span-6 sm:col-span-3'>
                <label
                  htmlFor='phone-number'
                  className='mb-2 block text-sm font-medium text-gray-900 dark:text-white'
                >
                  Phone Number
                </label>
                <input
                  type='number'
                  name='phone-number'
                  id='phone-number'
                  className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 shadow-sm focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500 sm:text-sm'
                  placeholder='e.g. +(12)3456 789'
                  required
                />
              </div>
              <div className='col-span-6 sm:col-span-3'>
                <label
                  htmlFor='birthday'
                  className='mb-2 block text-sm font-medium text-gray-900 dark:text-white'
                >
                  Birthday
                </label>
                <input
                  type='number'
                  name='birthday'
                  id='birthday'
                  className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 shadow-sm focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500 sm:text-sm'
                  placeholder='15/08/1990'
                  required
                />
              </div>
              <div className='col-span-6 sm:col-span-3'>
                <label
                  htmlFor='organization'
                  className='mb-2 block text-sm font-medium text-gray-900 dark:text-white'
                >
                  Organization
                </label>
                <input
                  type='text'
                  name='organization'
                  id='organization'
                  className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 shadow-sm focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500 sm:text-sm'
                  placeholder='Company Name'
                  required
                />
              </div>
              <div className='col-span-6 sm:col-span-3'>
                <label
                  htmlFor='role'
                  className='mb-2 block text-sm font-medium text-gray-900 dark:text-white'
                >
                  Role
                </label>
                <input
                  type='text'
                  name='role'
                  id='role'
                  className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 shadow-sm focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500 sm:text-sm'
                  placeholder='React Developer'
                  required
                />
              </div>
              <div className='col-span-6 sm:col-span-3'>
                <label
                  htmlFor='department'
                  className='mb-2 block text-sm font-medium text-gray-900 dark:text-white'
                >
                  Department
                </label>
                <input
                  type='text'
                  name='department'
                  id='department'
                  className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 shadow-sm focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500 sm:text-sm'
                  placeholder='Development'
                  required
                />
              </div>
              <div className='col-span-6 sm:col-span-3'>
                <label
                  htmlFor='zip-code'
                  className='mb-2 block text-sm font-medium text-gray-900 dark:text-white'
                >
                  Zip/postal code
                </label>
                <input
                  type='number'
                  name='zip-code'
                  id='zip-code'
                  className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 shadow-sm focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500 sm:text-sm'
                  placeholder='123456'
                  required
                />
              </div>
              <div className='sm:col-full col-span-6'>
                <button
                  className='rounded-lg bg-primary-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800'
                  type='submit'
                >
                  Save all
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default UserDetails
