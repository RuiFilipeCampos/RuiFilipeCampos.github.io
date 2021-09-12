import { Flex } from '@chakra-ui/react'
import NavBar from '../components/NavBar'

import * as React from 'react'

const Body = () => (
  <Flex align="center">
    Hi there
  </Flex>
)


const IndexPage = () => (
  <>
  <NavBar />
  <Body />
  </>
  )

export default IndexPage

