import React from "react";

// import { Link as ReachLink } from "@reach/router"


import { useRouter } from 'next/router'


 


import {
    Link,
    chakra,
    Box,
    Flex,
    useColorModeValue,
    VisuallyHidden,
    HStack,
    Button,
    useDisclosure,
    VStack,
    IconButton,
    CloseButton,
} from "@chakra-ui/react";

import { AiOutlineMenu } from "react-icons/ai";

// import { Logo } from "@choc-ui/logo";

    function MobileButtons(){
    const mobileNav = useDisclosure();
    const bg = useColorModeValue("white", "gray.800");
    const router = useRouter()

    return (
    <Box display={{ base: "inline-flex", md: "none" }}>
        <IconButton
            display={{ base: "flex", md: "none" }}
            aria-label="Open menu"
            fontSize="20px"
            color={useColorModeValue("gray.800", "inherit")}
            variant="ghost"
            icon={<AiOutlineMenu />}
            onClick={mobileNav.onOpen}
        />
        <VStack
            pos = "absolute"
            display = {mobileNav.isOpen ? "flex" : "none"}
            flexDirection = "column"
            rounded = "sm"
            shadow = "sm" 
            bg      = {bg}
            top     = {0}
            left    = {0}
            right   = {0}
            p       = {2}
            pb      = {4}
            m       = {2}
            spacing = {3}
        >
            <CloseButton
                aria-label = "Close menu"
                onClick    = {mobileNav.onClose} 
            />

            <Button w="full" variant="ghost" onClick = {() => {router.push('/')} } 
            >
            Home  
            </Button>
            <Button w="full" variant="ghost" onClick = {() => {router.push('/about')} } 
>
                About me & and my Heros 
            </Button>
            <Button w="full" variant="ghost" onClick = {() => {router.push('/my_path')}} >
                My Path
            </Button>
            <Button w="full" variant="ghost" onClick = {() => {router.push('/projects')}} >
                My Projects
            </Button>
        </VStack>
    </Box>
    )
}


function DesktopButtons(){

    const router = useRouter()

    return (
        
        <HStack display="flex" alignItems="center" spacing={1}>
            <HStack
            spacing={1}
            mr={1}
            color="brand.500"
            display={{ base: "none", md: "inline-flex" }}>

                <Button 
                    onClick = {() => {router.push('/')} } 
                    variant="ghost"
                >
                    Home
                </Button>

                <Button 
                    onClick = {() => {router.push('/about')} } 
                    variant="ghost"
                >
                    About me & my Heros
                </Button>

                <Button 
                    onClick = {() => {router.push('/my_path')} } 
                    variant="ghost"
                >
                    My Path  
                </Button>

                <Button 
                    onClick = {() => {router.push('/projects')} } 
                    variant="ghost"
                >                
                    My Projects          
                </Button>

            </HStack>
        </HStack>
    )
}




export default function NavBar() {
  const bg = useColorModeValue("white", "gray.800");

  return (
    <React.Fragment>
      <chakra.header
        bg={bg}
        w="full"
        px={{ base: 2, sm: 4 }}
        py={4}
        shadow="md">
        <Flex alignItems="center" justifyContent="space-between" mx="auto">
          <Flex>
            <chakra.a
              href="/"
              title="Choc Home Page"
              display="flex"
              alignItems="center"
            >
              <VisuallyHidden>Rui Campos</VisuallyHidden>
            </chakra.a>
            <chakra.h1 fontSize="xl" fontWeight="medium" ml="2">
              Rui Campos
            </chakra.h1>
          </Flex>
            <DesktopButtons />
            <MobileButtons />
        </Flex>
      </chakra.header>
    </React.Fragment>
  );
}
