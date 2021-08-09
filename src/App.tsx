import React from 'react'
import { Button, Container, Divider, Stack, StackDivider, Text, Box, Heading, Icon, useColorModeValue, createIcon } from '@chakra-ui/react'
import CallToAction from './components/CallToAction'

function App() {

  return (
    <>
    <Stack 
      direction={{base: "column", sm:"row"}} 
      divider={<StackDivider />} 
      spacing={{base:"6", sm:"2"}}
    >
      <Text backgroundColor="red.500" padding={4}>1</Text>
      <Text backgroundColor="pink.500" padding={4}>2</Text>
      <Text backgroundColor="purple.500" padding={4}>3</Text>
      <Text backgroundColor="blue.500" padding={4}>4</Text>
    </Stack>
    <Stack 
      align="center" 
      direction="row" 
      marginTop={4}
      spacing={4} 
    >
      <Button colorScheme="teal">Las Pastillas</Button>
      <Button colorScheme="teal" variant="outline">
        Button 2
      </Button>
      <Button colorScheme="teal" variant="ghost">
        Button 3
      </Button>
      <Button colorScheme="teal" variant="link">
        Button 4
      </Button>
    </Stack>
    <CallToAction />

    </>
  )
}

export default App
