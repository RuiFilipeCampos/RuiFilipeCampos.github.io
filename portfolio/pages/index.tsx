import { Flex } from '@chakra-ui/react'
import NavBar from '../components/navbar'

import * as React from 'react'

const IndexPage = () => (
  <>
  <NavBar />
  <Body />
  </>
  )

export default IndexPage

const Body = () => (
  <Flex align="center">
    Hi there
  </Flex>
)