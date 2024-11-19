import Support from './Support'

const Terms = async () => {
  return (
    <section className='m-0 bg-gradient-to-tl from-blue-700 via-blue-500 to-blue-700 p-5 py-20 '>
      <div className='py-6 text-slate-200 sm:py-8 md:py-20 lg:py-12'>
        <div className='mx-auto max-w-screen-md px-4 md:px-8'>
          <h1 className='mb-4 text-center text-2xl font-semibold text-slate-100 sm:text-3xl md:mb-6'>
            Our Terms and Conditions
          </h1>
          <ul className='list-disc pl-6'>
            <li>
              <strong>General</strong>
              <ul className='list-disc pl-6'>
                <li>
                  1.1. The Website is owned and operated by VoltSec, LLC (&quot;VoltSec.io&quot;).
                </li>
                <li>
                  1.2. VoltSec reserves the right to modify, alter or update these Terms at any time
                  without prior notice. By using the Website after any modification or update, you
                  agree to be bound by the modified or updated Terms.
                </li>
              </ul>
            </li>
            <li>
              <strong>Use of the Website</strong>
              <ul className='list-disc pl-6'>
                <li>
                  2.1. You agree to use the Website only for lawful purposes and in a manner that
                  does not infringe the rights of, or restrict or inhibit the use and enjoyment of,
                  the Website by any third party.
                </li>
                <li>
                  2.2. You agree not to use any automated system, software or device to access,
                  scrape, crawl or index any part of the Website without VoltSec&apos;s express
                  written consent.
                </li>
                <li>
                  2.3. You agree not to use the Website to transmit any material that is defamatory,
                  offensive, obscene, or otherwise unlawful or harmful.
                </li>
              </ul>
            </li>
            <li>
              <strong>Intellectual Property</strong>
              <ul className='list-disc pl-6'>
                <li>
                  3.1. The Website, including all text, graphics, logos, trademarks, images, audio
                  and video clips, software, and other content contained on the Website, is owned or
                  licensed by VoltSec and is protected by U.S. and international copyright and other
                  intellectual property laws.
                </li>
                <li>
                  3.2. You may view, download and print content from the Website for your personal,
                  non-commercial use only. You may not copy, reproduce, modify, distribute,
                  transmit, display, perform, publish, license, create derivative works from,
                  transfer, or sell any content, software or products obtained from the Website
                  without VoltSec&apos;s prior written consent.
                </li>
              </ul>
            </li>
            <li>
              <strong>Disclaimer of Warranties</strong>
              <ul className='list-disc pl-6'>
                <li>
                  4.1. The Website is provided on an &apos;as is&apos; and &apos;as available&apos;
                  basis without any representations or warranties, express or implied, including but
                  not limited to, implied warranties of merchantability, fitness for a particular
                  purpose, or non-infringement.
                </li>
                <li>
                  4.2. VoltSec does not warrant that the Website will be uninterrupted or
                  error-free, that defects will be corrected, or that the Website or the server that
                  makes it available are free of viruses or other harmful components.
                </li>
              </ul>
            </li>
            <li>
              <strong>Limitation of Liability</strong>
              <ul className='list-disc pl-6'>
                <li>
                  5.1. In no event shall VoltSec be liable for any damages, including but not
                  limited to, direct, indirect, incidental, special, or consequential damages
                  arising out of or in connection with the use or inability to use the Website, even
                  if VoltSec has been advised of the possibility of such damages.
                </li>
              </ul>
            </li>
            <li>
              <strong>Indemnification</strong>
              <ul className='list-disc pl-6'>
                <li>
                  6.1. You agree to indemnify, defend and hold harmless VoltSec and its officers,
                  directors, employees, agents, licensors, and suppliers from and against all
                  losses, expenses, damages and costs, including reasonable attorneys&apos; fees,
                  arising out of or in connection with any violation of these Terms by you, or any
                  other person accessing the Website using your account or personal information.
                </li>
              </ul>
            </li>
            <li>
              <strong>Governing Law</strong>
              <ul className='list-disc pl-6'>
                <li>
                  7.1. These Terms shall be governed by and construed in accordance with the laws of
                  the State of California, without giving effect to any principles of conflicts of
                  law.
                </li>
              </ul>
            </li>
            <li>
              <strong>Dispute Resolution</strong>
              <ul className='list-disc pl-6'>
                <li>
                  8.1. Any dispute arising out of or in connection with these Terms or your use of
                  the Website shall be resolved through binding arbitration administered by the
                  American Arbitration Association in accordance with its Commercial Arbitration
                  Rules, and judgment on the award rendered by the arbitrator(s) may be entered in
                  any court having jurisdiction thereof.
                </li>
              </ul>
            </li>
            <li>
              <strong>Miscellaneous</strong>
              <ul className='list-disc pl-6'>
                <li>
                  9.1. If any provision of these Terms is found to be invalid, illegal or
                  unenforceable, the validity, legality and enforceability of the remaining
                  provisions shall not in any way be affected or impaired.
                </li>
                <li>
                  9.2. These Terms constitute the entire agreement between you and VoltSec regarding
                  the use of the Website and supersede all prior or contemporaneous communications
                  and proposals, whether oral or written, between you and VoltSec.
                </li>
                <li>
                  9.3. VoltSec&apos;s failure to enforce any right or provision of these Terms shall
                  not be deemed a waiver of such right or provision.
                </li>
                <li>
                  9.4. You may not assign or transfer these Terms, by operation of law or otherwise,
                  without VoltSec&apos;s prior written consent. Any attempt to assign or transfer
                  these Terms without such consent will be null and void.
                </li>
                <li>
                  9.5. The headings in these Terms are for convenience only and have no legal or
                  contractual effect.
                </li>
              </ul>
            </li>
          </ul>
          <p>
            If you have any questions or concerns about these Terms, please contact us at
            <a href='mailto:support@voltsec-io.com'>support@voltsec-io.com</a>.
          </p>
        </div>
      </div>
        <Support />
    </section>
  )
}
export default Terms
