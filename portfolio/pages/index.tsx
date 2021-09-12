import { Flex, Heading, Box } from '@chakra-ui/react'
import NavBar from '../components/NavBar'

import * as React from 'react'

const Body = () => (
  <Heading>Hi there, I'm Rui !</Heading>
)


const IndexPage = () => (
  <>
  <NavBar />
  <Box maxW="1000">
    <Heading>Hi there, I'm Rui !</Heading>  
  </Box>
  </>
  )

export default IndexPage

