const UserList = () => {
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
      </div>
      <div className='flex flex-col'>
        <div className='overflow-x-auto'>
          <div className='inline-block min-w-full align-middle'>
            <div className='overflow-hidden shadow'>
              <table className='min-w-full table-fixed divide-y divide-gray-200 dark:divide-gray-600'>
                <thead className='bg-gray-100 dark:bg-gray-700'>
                  <tr>
                    <th
                      scope='col'
                      className='p-4 text-left text-xs font-medium uppercase text-gray-500 dark:text-gray-400'
                    >
                      Name
                    </th>
                    <th
                      scope='col'
                      className='p-4 text-left text-xs font-medium uppercase text-gray-500 dark:text-gray-400'
                    >
                      Biography
                    </th>
                    <th
                      scope='col'
                      className='p-4 text-left text-xs font-medium uppercase text-gray-500 dark:text-gray-400'
                    >
                      Position
                    </th>
                    <th
                      scope='col'
                      className='p-4 text-left text-xs font-medium uppercase text-gray-500 dark:text-gray-400'
                    >
                      Country
                    </th>
                    <th
                      scope='col'
                      className='p-4 text-left text-xs font-medium uppercase text-gray-500 dark:text-gray-400'
                    >
                      Status
                    </th>
                    <th
                      scope='col'
                      className='p-4 text-left text-xs font-medium uppercase text-gray-500 dark:text-gray-400'
                    >
                      Actions
                    </th>
                  </tr>
                </thead>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div className='sticky bottom-0 right-0 w-full items-center border-t border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-800 sm:flex sm:justify-between'>
        <div className='mb-4 flex items-center sm:mb-0'>
          <a
            href='#'
            className='inline-flex cursor-pointer justify-center rounded p-1 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
          >
            <svg
              className='h-7 w-7'
              fill='currentColor'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                fillRule='evenodd'
                d='M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z'
                clipRule='evenodd'
              ></path>
            </svg>
          </a>
          <a
            href='#'
            className='mr-2 inline-flex cursor-pointer justify-center rounded p-1 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
          >
            <svg
              className='h-7 w-7'
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
          </a>
          <span className='text-sm font-normal text-gray-500 dark:text-gray-400'>
            Showing <span className='font-semibold text-gray-900 dark:text-white'>1-20</span> of{' '}
            <span className='font-semibold text-gray-900 dark:text-white'>2290</span>
          </span>
        </div>
      </div>
    </>
  )
}

export default UserList
