import { useEffect } from 'react'

const TermsOfService = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
    document.title = 'Terms of Service - TypingTest'
  }, [])
  return (
    <>
      <div className='text-white p-5 lg:px-72 text-lg'>
        <p className='text-center text-5xl py-2'>Terms of Service</p>

        <p className='text-xl py-2'>
          Welcome to <span className='text-primary'>typingtest.tech</span> ! By
          using our website, you agree to comply with and be bound by the
          following terms and conditions. Please read these terms carefully
          before using our services.
        </p>

        <div className='py-4'>
          <p className='text-3xl py-2'>1. Acceptance of Terms</p>
          <p className='text-xl py-2'>
            - By accessing or using our services, you agree to these terms.
          </p>
          <p className='text-xl py-2'>
            - If you do not agree, please refrain from using the website.
          </p>
        </div>

        <div className='py-4'>
          <p className='text-3xl py-2'>2. Use of Services</p>
          <p className='text-xl py-2'>
            - You must be at least 13 years old to use our services.
          </p>
          <p className='text-xl py-2'>
            - You are responsible for maintaining the confidentiality.
          </p>
        </div>

        <div className='py-4'>
          <p className='text-3xl py-2'>3. User Content</p>
          <p className='text-xl py-2'>
            - Users may submit their paragraphs for typing tests.
          </p>
          <p className='text-xl py-2'>
            - We reserve the right to review and remove inappropriate content.
          </p>
        </div>

        {/* ... Add content for other sections ... */}

        <div className='py-4'>
          <p className='text-3xl py-2'>8. Changes to Terms</p>
          <p className='text-xl py-2'>
            - We reserve the right to update or modify these terms at any time.
          </p>
          <p className='text-xl py-2'>
            - Continued use of the services after changes constitutes
            acceptance.
          </p>
        </div>

        <p className='text-xl py-2'>
          If you have any questions or concerns, please contact us at{' '}
          <span className='text-primary'>contact@typingtest.tech</span>. Thank
          you for using <span className='text-primary'>typingtest.tech</span> !
        </p>
      </div>
    </>
  )
}

export default TermsOfService
