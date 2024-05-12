import { Box, Container, Flex, Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <Box as='footer' className='py-10'>
      <Container maxW='container.xl'>
        <Flex justify='space-between' align='center'>
          <Text fontSize='lg' color='gray.400'>
            © 2023 typingtest.tech — Free Online Typing Test Tool
          </Text>
          <Flex className='gap-5 text-gray-400 text-lg'>
            <Link
              to='/aboutus'
              mr='4'
              className='hover:text-primary'
              fontSize='lg'
              color='gray.500'
              _hover={{ color: 'blue.500' }}
            >
              About Us
            </Link>
            <Link
              to='/privacypolicy'
              className='hover:text-primary'
              mr='4'
              fontSize='lg'
              color='gray.500'
              _hover={{ color: 'blue.500' }}
            >
              Privacy Policy
            </Link>
            <Link
              to='/termsofservice'
              className='hover:text-primary'
              fontSize='lg'
              color='gray.500'
              _hover={{ color: 'blue.500' }}
            >
              Terms of Service
            </Link>
          </Flex>
        </Flex>
      </Container>
    </Box>
  )
}

export default Footer
