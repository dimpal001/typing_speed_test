import { useEffect } from 'react'

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
    document.title = 'Privacy Policy - TypingTest'
  }, [])
  return (
    <>
      <div className='text-white p-5 lg:px-72 text-lg'>
        <p className='text-center text-5xl py-2'>Privacy Policy</p>
        <p className='text-3xl py-2'>
          Welcome to <span className='text-primary'>typingtest.tech</span>
        </p>
        <p className='text-xl py-2'>
          Your privacy is important to us. This Privacy Policy explains how we
          collect, use, disclose, and safeguard your information when you use
          our typing speed testing services.
        </p>
        <div className='py-4'>
          <p className='text-3xl py-2'>How We Use Your Information</p>
          <p className='text-xl py-2'>
            <span className='text-primary'>Typing Test Results : </span>We use
            the typing test results to provide you with accurate performance
            metrics and insights.
          </p>
          <p className='text-xl py-2'>
            <span className='text-primary'>Personalization : </span>We may use
            your information to personalize your typing speed testing
            experience.
          </p>
        </div>
        <div className='py-4'>
          <p className='text-3xl py-2'>Information Security</p>
          <p className='text-xl py-2'>
            We prioritize the security of your information and employ
            industry-standard measures to protect it. However, no method of
            transmission over the internet or electronic storage is 100% secure.
          </p>
        </div>
        <div className='py-4'>
          <p className='text-3xl py-2'>Third-Party Links</p>
          <p className='text-xl py-2'>
            Our website may contain links to third-party websites. We have no
            control over the content and practices of these websites and
            encourage you to review their privacy policies.
          </p>
        </div>
        <div className='py-4'>
          <p className='text-3xl py-2'>Updates to This Privacy Policy</p>
          <p className='text-xl py-2'>
            We may update our Privacy Policy periodically. We will notify you of
            any changes by posting the new Privacy Policy on this page.
          </p>
        </div>
      </div>
    </>
  )
}

export default PrivacyPolicy
