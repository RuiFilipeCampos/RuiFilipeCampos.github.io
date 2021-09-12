import React from "react";

import {
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
          pos="absolute"
          top={0}
          left={0}
          right={0}
          display={mobileNav.isOpen ? "flex" : "none"}
          flexDirection="column"
          p={2}
          pb={4}
          m={2}
          bg={bg}
          spacing={3}
          rounded="sm"
          shadow="sm"
        >
          <CloseButton
            aria-label="Close menu"
            onClick={mobileNav.onClose}
          />
          <Button w="full" variant="ghost">
          About me & my Heros
          </Button>
          <Button w="full" variant="ghost">
          My Path
          </Button>
          <Button w="full" variant="ghost">
          My Projects
          </Button>
        </VStack>
    </Box>

    )

}


function DesktopButtons(){
    return (
        <HStack display="flex" alignItems="center" spacing={1}>
        <HStack
          spacing={1}
          mr={1}
          color="brand.500"
          display={{ base: "none", md: "inline-flex" }}
        >
          <Button variant="ghost">About me & my Heros</Button>
          <Button variant="ghost">My Path</Button>
          <Button variant="ghost">My Projects</Button>
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
        shadow="md"
      >
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
