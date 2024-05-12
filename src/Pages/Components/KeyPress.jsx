import { ArrowForwardIcon } from '@chakra-ui/icons'
import {
  Button,
  Center,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  Textarea,
  useDisclosure,
  useToast,
} from '@chakra-ui/react'
import { useState, useEffect, useRef } from 'react'
import { MdAddCircleOutline, MdOutlineSpeed } from 'react-icons/md'
import { brandColor } from './CustomDesign'
import { MdOutlineChangeCircle } from 'react-icons/md'

const KeyPress = () => {
  const paragraphs = [
    `The sun dipped below the horizon, casting hues of orange and pink across the sky. Birds returned to their nests, and the world embraced the serenity of twilight`,
    `Beneath the starlit sky, a campfire crackled, casting shadows on the faces of friends gathered around. Laughter echoed in the night, creating memories that would last forever`,
    `The sun sets behind the mountains, painting the sky in warm hues. Birds sing their evening song, and a gentle breeze rustles the leaves, creating a peaceful natural symphony`,
    `The path less traveled beckons with mysteries and wonders. Adventure is the thrill of discovering the unknown, stepping into the wilderness, and finding the extraordinary in the ordinary`,
    `As dusk settles, city lights come to life, painting the urban landscape with a vibrant glow. The hustle and bustle of the day give way to the quiet charm of evening, creating a captivating cityscape`,
    `In the heart of an enchanted forest, sunlight filters through the leaves, creating a magical play of light and shadow. The air is filled with the sweet fragrance of moss and earth`,
    `Waves gently kiss the shore, creating a melody of serenity. Seagulls dance in the breeze, and the salty air invigorates the senses. The ocean whispers tales of timeless beauty`,
    `Beneath the starlit sky, a campfire crackles, casting shadows on faces of friends gathered around. Laughter echoes in the night, creating memories that will last forever, capturing the warmth of shared moments`,
    `The sun sets, painting the sky with hues of orange and pink. Birds return to their nests as the world embraces the tranquility of twilight, a magical time when nature's beauty unfolds`,
    `Majestic mountains stand tall, their peaks touching the sky. A cool breeze carries the scent of pine, and the panorama of valleys below creates a breathtaking tapestry of nature`,
    `Far from the city's hustle, rural landscapes offer tranquility. Fields of golden wheat sway in the breeze, and the distant mooing of a cow adds to the peaceful ambiance`,
    `Under the moon's gentle glow, a serene night unfolds. Crickets sing a lullaby, and the silvery moonlight transforms the world into a tranquil dreamscape`,
    `Autumn leaves fall like confetti, covering the ground in a tapestry of red and gold. The crisp air carries the scent of harvest, and the world embraces the changing seasons`,
    `Under a canopy of stars, the universe reveals its cosmic wonders. Galaxies twinkle in the vastness of space, and constellations tell stories written in the language of the cosmos`,
    `Raindrops tap softly on windows, creating a soothing symphony. Puddles form, reflecting the world outside. The earthy scent of wet soil fills the air, bringing a sense of cozy bliss`,
    `Majestic mountains stand tall against the sky, their peaks touching the clouds. Crisp mountain air fills the lungs, and the panoramic views inspire awe, a testament to nature's grandeur`,
    `In the heart of the countryside, fields stretch endlessly, painted in shades of green. The quiet tranquility is broken only by the soft rustle of leaves and the distant song of birds`,
    `Raindrops tap softly on windows, creating a soothing symphony. Puddles form, reflecting the world outside. The earthy scent of wet soil fills the air, bringing a sense of cozy bliss`,
  ]

  const { isOpen, onOpen, onClose } = useDisclosure()
  const {
    isOpen: isCustomModalOpen,
    onOpen: onCustomModalOpen,
    onClose: onCustomModalClose,
  } = useDisclosure()
  const [currentParagraph, setCurrentParagraph] = useState('')
  const [inputText, setInputText] = useState('')
  const [startTime, setStartTime] = useState(null)
  const [endTime, setEndTime] = useState(null)
  const [customParagraph, setCustomParagraph] = useState('')
  const toast = useToast()

  const inputRef = useRef(null)

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
    document.title = 'Test your speed - TypingTest'
  }, [])

  useEffect(() => {
    // Select a random paragraph when the component mounts
    const randomIndex = Math.floor(Math.random() * paragraphs.length)
    setCurrentParagraph(paragraphs[randomIndex])

    // Focus on the input when the component mounts
    inputRef.current.focus()
  }, [])

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (inputText === '' && !startTime) {
        // Start the timer on the first correct key press
        setStartTime(new Date())
      }

      // Include space and exclude non-alphanumeric and non-symbol keys
      if (/^[a-zA-Z0-9!@#$%^&*()_+{}[\]:;<>,'.?~\\/-\s]$/.test(event.key)) {
        const pressedChar = event.key

        // Check if the pressed character matches the corresponding character in the current paragraph
        if (pressedChar === currentParagraph[inputText.length]) {
          setInputText((prevText) => prevText + pressedChar)

          // Check if all characters are pressed correctly
          if (inputText.length === currentParagraph.length - 1) {
            setEndTime(new Date())
            onOpen()
          }
        }
      }
    }

    // Add event listener for keydown
    window.addEventListener('keydown', handleKeyPress)

    // Remove event listener on component unmount
    return () => {
      window.removeEventListener('keydown', handleKeyPress)
    }
  }, [inputText, currentParagraph, startTime, isOpen])

  const highlightedParagraph = currentParagraph.split('').map((char, index) => (
    <span
      key={index}
      style={{ color: inputText[index] === char && brandColor.dark }}
    >
      {char}
    </span>
  ))

  let wordsPerMinute = 0

  if (startTime && endTime) {
    console.log(startTime)
    console.log(endTime)
    const elapsedTime = (endTime - startTime) / 1000 // Convert to seconds
    console.log(elapsedTime)
    const words = inputText.split(/\s+/).filter(Boolean).length // Count words
    console.log(words)

    wordsPerMinute = (words / (elapsedTime / 60)).toFixed(2) // Words per minute
  }

  const handleCustomParagraphSubmit = () => {
    // Validate that the custom paragraph has at least 15 words
    const wordCount = customParagraph.split(/\s+/).filter(Boolean).length
    if (wordCount >= 7) {
      setCurrentParagraph(customParagraph)
      onCustomModalClose()
      setCustomParagraph('')
    } else {
      // Display an error message or handle the case where the custom paragraph is too short
      toast({
        title: 'It should have a minimum of 15 words.',
        status: 'error',
        isClosable: true,
        position: 'top',
        duration: 3000,
      })
    }
  }

  const handleCustomParagraphChange = (event) => {
    setCustomParagraph(event.target.value)
  }

  const handleButtonKeyDown = (event) => {
    event.preventDefault()
  }

  return (
    <Center className='bg-  py-36'>
      <div>
        <div className='lg:p-10 mx-3 p-4 rounded-lg bg-slate-800 lg:mx-72'>
          <Text className='text-3xl'>{highlightedParagraph}</Text>
          <p className='text-3xl font-bold'></p>
        </div>
        <input
          ref={inputRef}
          type='text'
          value={inputText}
          onChange={() => {}}
          style={{ opacity: 0, position: 'absolute', top: '-9999px' }}
        />
        <div className='flex justify-center gap-x-5 pt-10'>
          <Button
            background={brandColor.primary}
            color={'white'}
            _hover={{
              background: brandColor.dark,
            }}
            tabIndex={-1}
            onKeyDown={handleButtonKeyDown}
            onClick={onCustomModalOpen}
            fontSize={18}
            leftIcon={<MdAddCircleOutline size={22} />}
          >
            Add Custom Paragraph
          </Button>
          <Button
            background={brandColor.primary}
            color={'white'}
            _hover={{
              background: brandColor.dark,
            }}
            fontSize={18}
            tabIndex={-1}
            onKeyDown={handleButtonKeyDown}
            onClick={() => window.location.reload()}
            leftIcon={<MdOutlineChangeCircle size={22} />}
          >
            Change
          </Button>
        </div>

        <Modal
          isOpen={isCustomModalOpen}
          onClose={onCustomModalClose}
          size='lg'
        >
          <ModalOverlay />
          <ModalContent>
            <div className='bg-slate-950 text-white'>
              <ModalHeader>Add Custom Paragraph</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <Textarea
                  borderRadius={'md'}
                  value={customParagraph}
                  onChange={handleCustomParagraphChange}
                  placeholder='Type your custom paragraph here...'
                  size='sm'
                />
              </ModalBody>
              <ModalFooter>
                <Button
                  rightIcon={<ArrowForwardIcon />}
                  colorScheme='blue'
                  onClick={handleCustomParagraphSubmit}
                >
                  Submit
                </Button>
              </ModalFooter>
            </div>
          </ModalContent>
        </Modal>

        {isOpen && (
          <Modal
            isOpen={isOpen}
            onClose={() => {
              onClose()
              window.location.reload()
            }}
          >
            <ModalOverlay />
            <ModalContent>
              <div className='bg-slate-950 text-white'>
                <ModalHeader>Your Result</ModalHeader>
                <ModalCloseButton />
                <ModalBody className='pb-24'>
                  <div className='flex'>
                    <MdOutlineSpeed
                      className='mt-[1px] text-primary mr-5'
                      size={37}
                    />
                    <p className='text-4xl text-primary pb-5 font-bold'>
                      {Math.round(wordsPerMinute) + 15} WPM
                    </p>
                  </div>
                </ModalBody>
              </div>
            </ModalContent>
          </Modal>
        )}
      </div>
    </Center>
  )
}

export default KeyPress
