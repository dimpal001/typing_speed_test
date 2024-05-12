import { Button } from '@chakra-ui/react'
import Img from '../assets/typing.png'
import { brandColor } from './Components/CustomDesign'
import { SlEnergy } from 'react-icons/sl'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'
const HomePage = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
    document.title = 'TypingTest'
  }, [])
  return (
    <>
      <div className='w-full px-20 flex-col flex justify-center  h-full items-center'>
        <img src={Img} className='w-[30%] ' alt='Loading image...' />
        <div>
          <p className='text-center text-6xl text-primary py-2'>Type Faster</p>
          <p className='text-center text-2xl font-extralight text-primary py-2'>
            Boost your typing skills and track your progress with our
            interactive typing speed website <br />– enhancing accuracy and
            words-per-minute in a user-friendly environment
          </p>
          <div className='flex justify-center mt-10'>
            <Link to={'/typingtest'}>
              <Button
                fontSize={18}
                background={brandColor.primary}
                color={'white'}
                leftIcon={<SlEnergy color='yellow' size={22} />}
                _hover={{ background: brandColor.dark }}
              >
                Click here to test your speed
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default HomePage
