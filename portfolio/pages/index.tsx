import { Flex, Heading, Box } from '@chakra-ui/react'
import NavBar from '../components/NavBar'

import * as React from 'react'

import KuttyHero from '../components/KuttyHero'
import { SocialIcon } from 'react-social-icons';

import {Spacer, Img, HStack, VStack, Text} from "@chakra-ui/react";

import myco from "myco.png"

const IndexPage = () => <HStack bg="black" h="100vh" w="100vw" align="center">
  <VStack w="100%" bg="black" align = "center" >
    <Spacer padding={10}/>
    <Text size="lg" textColor="white">Hi there, I'm Rui :P</Text>
    <a href="https://github.com/RuiFilipeCampos/MontyCarlo">
    <Img 
        maxH="80vh"

    src="myco.png" alt='Monty Carlo Showing off' /> </a>
  </VStack>
</HStack>

export default IndexPage
