import { Button, FormControl, FormLabel, Input } from '@chakra-ui/react'

export const CButton = ({ title }) => {
  return (
    <Button
      variant={'unstyled'}
      borderRadius={0}
      borderWidth={2}
      paddingLeft={5}
      paddingRight={5}
      className='hover:bg-green-950 border-green-950 hover:text-white uppercase tracking-wider'
    >
      <span className='font-bold'>{title}</span>
    </Button>
  )
}

export const CInput = ({ label, placeholder }) => {
  return (
    <FormControl className='my-2'>
      <FormLabel className='capitalize font-bold'>{label}</FormLabel>
      <Input
        placeholder={placeholder}
        className='capitalize hover:shadow-lg focus:shadow-lg'
        borderRadius={0}
      />
    </FormControl>
  )
}
