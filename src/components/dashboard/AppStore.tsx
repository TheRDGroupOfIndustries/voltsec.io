import React from 'react'
interface Product {
  name: string
  description: string
  features: string[]
  repoLink: string
}  
interface ProductItemProps {
  name: string
  description: string
  features: string[]
  repoLink: string
}
const products: Product[] = [
  {
    name: 'VoltSec.io Network Protection',
    description: 'Project aimed at providing network security and firewall functionalities.',
    features: [
      'Firewall rules management',
      'Logging for analysis and troubleshooting',
      'Settings configuration',
    ],
    repoLink: 'https://github.com/VotSec-io/VoltSec.io-Network-Protection',
  },
  {
    name: 'VoltIR Shield',
    description:
      'Advanced incident response automation tool crafted in Rust to fortify cybersecurity defenses.',
    features: ['Isolate affected systems', 'Block malicious IPs', 'Generate incident reports'],
    repoLink: 'https://github.com/VotSec-io/VoltIR_Shield',
  },
  // {
  //   name: 'VoltSec Cloud-Connect',
  //   description:
  //     "Innovative project designed to seamlessly integrate VoltSec.io's cutting-edge threat intelligence with leading cloud security platforms.",
  //   features: [
  //     'Real-time security monitoring',
  //     'User management system',
  //     'Comprehensive incident response automation',
  //   ],
  //   repoLink: 'https://github.com/VotSec-io/VoltSec-Cloud-Connect',
  // },
  // {
  //   name: 'WP Voltsec.io',
  //   description: 'Enhance the security of your WordPress site with WP Voltsec.io plugin.',
  //   features: [
  //     'Two-factor authentication (2FA)',
  //     'Login attempt limiting',
  //     'Web application firewall (WAF)',
  //     'Real-time malware scanning',
  //     'Secure file uploads',
  //   ],
  //   repoLink: 'https://github.com/VotSec-io/wp-voltsec-io',
  // },
]

const ProductItem: React.FC<ProductItemProps> = ({ name, description, features, repoLink }) => (
  <div className='mt-5 max-w-2xl rounded-3xl border border-gray-200 bg-white p-6 shadow dark:border-gray-700 dark:bg-gray-800'>
    <a href='#'>
      <h5 className='mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white'>
        {name}
      </h5>
    </a>
    <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>{description}</p>
    <h2 className='mb-2 text-lg font-semibold text-gray-900 dark:text-white'>Features:</h2>
    <ul className='mb-5 max-w-md list-inside space-y-1 text-gray-500 dark:text-gray-400'>
      {features.map((feature, index) => (
        <li className='flex items-center' key={index}>
          {' '}
          <svg
            className='me-2 h-3.5 w-3.5 flex-shrink-0 text-green-500 dark:text-green-400'
            aria-hidden='true'
            xmlns='http://www.w3.org/2000/svg'
            fill='currentColor'
            viewBox='0 0 20 20'
          >
            <path d='M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z' />
          </svg>
          {feature}
        </li>
      ))}
    </ul>
    <a
      href={repoLink}
      target='_blank'
      rel='noopener noreferrer'
      className='inline-flex items-center rounded-lg bg-blue-700 px-3 py-2 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
    >
      Visit{' '}
      <svg
        className='ms-2 h-3.5 w-3.5 rtl:rotate-180'
        aria-hidden='true'
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 14 10'
      >
        <path
          stroke='currentColor'
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth='2'
          d='M1 5h12m0 0L9 1m4 4L9 9'
        />
      </svg>
    </a>
  </div>
)

const AppStore: React.FC = () => {
  return (
    <div className='p-5 relative'>
      <div className="absolute top-0 left-0 w-full h-full bg-white/10 backdrop-blur-sm rounded-3xl overflow-hidden flex justify-center items-center">
      <h1 className='text-7xl font-bold'>Coming soon</h1>
      </div>
      <h2 className='mb-2 p-2 py-2 text-2xl font-semibold text-gray-700'>App Store</h2>
      <div className='mb-6 grid max-w-6xl gap-5 md:grid-cols-2'>
        {products.map((product, index) => (
          <ProductItem key={index} {...product} />
        ))}
      </div>
    </div>
  )
}

export default AppStore
