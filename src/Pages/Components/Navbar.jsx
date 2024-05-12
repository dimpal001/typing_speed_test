import { Link } from 'react-router-dom'
import { RiLink } from 'react-icons/ri'

const Navbar = () => {
  return (
    <>
      <div className='w-full flex justify-evenly text-white items-center h-20'>
        <div>
          <Link to={'/'} className='text-primary text-3xl italic'>
            typingtest.tech
          </Link>
        </div>
        <div>
          <Link to={'/typingtest'} className='text-2xl'>
            <div className='flex items-center hover:bg-primary transition-all delay-[0.05s] py-2 px-3 rounded-lg'>
              <RiLink size={25} className='mr-2' />
              <p>Typing Test</p>
            </div>
          </Link>
        </div>
        <div>
          <Link to={'/aboutus'} className='text-2xl'>
            <div className='flex items-center py-2 px-3 rounded-lg'>
              <p className='hover:text-primary'>About Us</p>
            </div>
          </Link>
        </div>
      </div>
    </>
  )
}

export default Navbar
