import Support from './Support'

export default function Privacy() {
  return (
    <section className='m-0 bg-gradient-to-tl from-blue-700 via-blue-500 to-blue-700 p-5 py-20 '>
      <div className='my-2 py-6 text-slate-200 sm:py-8 lg:py-12'>
        <div className='mx-auto max-w-screen-md px-4 md:px-8'>
          <h1 className='mb-4 text-center text-2xl font-semibold text-slate-100 sm:text-3xl md:mb-6'>
            Our Privacy Policy
          </h1>
          <p className='mb-4'>
            <strong>Privacy Policy</strong>
          </p>
          <ul className='mb-4 ml-8 list-disc'>
            <li>
              At VoltSec, we are committed to protecting the privacy and personal information of our
              users.
            </li>
            <li>
              This Privacy Policy explains how we collect, use, disclose, and safeguard your
              personal information when you visit our website,{' '}
              <a href='https://www.voltsec.io/'>https://www.voltsec.io/</a>.
            </li>
            <li>
              If you have any questions or concerns about our Privacy Policy or practices, please
              feel free to contact us at{' '}
              <a href='mailto:support@voltsec.io'>support@voltsec.io</a>.
            </li>
          </ul>

          <p className='mb-4'>
            <strong>Information we collect</strong>
          </p>
          <ul className='mb-4 ml-8 list-disc'>
            <li>
              Personal information: We may collect your name, email address, phone number, and other
              contact information when you submit a contact form or request a demo on our website.
            </li>
            <li>
              Device information: We may collect information about the device you use to access our
              website, including your IP address, browser type, operating system, and other
              technical details.
            </li>
            <li>
              Usage information: We may collect information about your use of our website, including
              the pages you visit, the links you click, and the time and date of your visits.
            </li>
          </ul>

          <p className='mb-4'>
            <strong>How we use your information</strong>
          </p>
          <ul className='mb-4 ml-8 list-disc'>
            <li>
              Respond to your inquiries and requests for information about our products and
              services.
            </li>
            <li>Provide you with the products and services you have requested.</li>
            <li>Improve the quality and functionality of our website.</li>
            <li>
              Analyze how our website is used and measure the effectiveness of our marketing
              campaigns.
            </li>
            <li>Comply with legal and regulatory requirements.</li>
          </ul>

          <p className='mb-4'>
            <strong>Disclosure of your information</strong>
          </p>
          <ul className='mb-4 ml-8 list-disc'>
            <li>
              We may disclose your personal information to third parties in the following
              circumstances:
            </li>
            <li>When we have your consent to do so.</li>
            <li>When required by law or to comply with legal processes.</li>
            <li>
              When necessary to protect the safety, rights, or property of our users or others.
            </li>
            <li>When necessary to enforce our policies or terms of use.</li>
            <li>
              When necessary to complete a business transaction, such as a merger or acquisition.
            </li>
            <li>
              We may also share aggregated or anonymized information with third parties for any
              purpose.
            </li>
          </ul>

          <p className='mb-4'>
            <strong>Security of your information</strong>
          </p>
          <ul className='mb-4 ml-8 list-disc'>
            <li>
              We take reasonable measures to protect the personal information we collect from you
              against unauthorized access, disclosure, alteration, and destruction.
            </li>
            <li>
              However, no method of transmission over the internet or method of electronic storage
              is 100% secure, and we cannot guarantee the absolute security of your information.
            </li>
          </ul>

          <p className='mb-4'>
            <strong>Links to other websites</strong>
          </p>
          <ul className='mb-4 ml-8 list-disc'>
            <li>
              Our website may contain links to other websites that are not owned or operated by
              VoltSec.
            </li>
            <li>We are not responsible for the privacy practices or content of these websites.</li>
            <li>
              We encourage you to review the privacy policies of these websites before providing any
              personal information.
            </li>
          </ul>

          <p className='mb-4'>
            <strong>Children&apos;s privacy</strong>
          </p>
          <ul className='mb-4 ml-8 list-disc'>
            <li>Our website is not intended for children under the age of 13.</li>
            <li>
              We do not knowingly collect personal information from children under the age of 13.
            </li>
            <li>
              If we learn that we have collected personal information from a child under the age of
              13, we will promptly delete that information.
            </li>
          </ul>

          <p className='mb-4'>
            <strong>Changes to this Privacy Policy</strong>
          </p>
          <ul className='mb-4 ml-8 list-disc'>
            <li>
              We may update this Privacy Policy from time to time to reflect changes in our
              practices or legal obligations.
            </li>
            <li>We encourage you to review this Privacy Policy periodically for any changes.</li>
            <li>
              Your continued use of our website after any changes to this Privacy Policy will
              constitute your acceptance of those changes.
            </li>
          </ul>

          <p>
            <strong>Contact us</strong>
          </p>
          <p>
            If you have any questions or concerns about this Privacy Policy or our practices, please
            contact us at <a href='mailto:privacy@voltsec.io'>privacy@voltsec.io</a>.
          </p>
        </div>
      </div>
      <Support />
    </section>
  )
}
