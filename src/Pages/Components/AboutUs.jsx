import { useEffect } from 'react'

const AboutUs = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
    document.title = 'About Us - TypingTest'
  }, [])
  return (
    <>
      <div className='text-white p-5 lg:px-72 text-lg'>
        <p className='text-center text-5xl py-2'>About Us</p>

        <p className='text-xl py-2'>
          Welcome to <span className='text-primary'>typingtest.tech</span> ! We
          are passionate about helping users improve their typing speed and
          accuracy through engaging and personalized typing tests.
        </p>
        <div className='py-4'>
          <p className='text-3xl py-2'>Our Mission</p>
          <p className='text-xl py-2'>
            Our mission is to provide a user-friendly platform where individuals
            can assess and enhance their typing skills in a fun and interactive
            way.
          </p>
        </div>
        <div className='py-4'>
          <p className='text-3xl py-2'>Features</p>
          <p className='text-xl py-2'>
            <span className='text-primary'>Custom Typing Tests : </span>Users
            can create and test their typing speed on their own paragraphs.
          </p>
          <p className='text-xl py-2'>
            <span className='text-primary'>Performance Metrics : </span>Get
            detailed insights into your typing speed, words per minute, and
            accuracy.
          </p>
          <p className='text-xl py-2'>
            <span className='text-primary'>User-Generated Content : </span>
            Contribute to our typing test library by adding your own paragraphs
            for testing.
          </p>
        </div>
      </div>
    </>
  )
}

export default AboutUs
