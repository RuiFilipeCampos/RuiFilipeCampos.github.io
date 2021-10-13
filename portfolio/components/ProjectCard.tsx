import React from "react";
import { chakra, Box, Flex, Icon, useColorModeValue, Link } from "@chakra-ui/react";


import github_icon from '../pages/github_icon.png'; 


const GitHubButton = () => {


return ( 
<Box mt={8} padding = "1">
    <Link
      bg="gray.900"
      color="gray.100"
      px={5}
      py={3}
      fontWeight="semibold"
      rounded="lg"
      _hover={{ bg: "gray.800" }}
    >
        <Icon
          boxSize={6}
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        > 
           <img src = {github_icon.src}></img>
           <path d= {github_icon.src} ></path>
        </Icon>
        <img src = {github_icon.src} width="25" height="0"></img>
        GitHub
    </Link>
</Box>
)
}







const ProjectCard = ({name, description} ) => {
  return (
    <Flex
      bg={useColorModeValue("#0000", "white")}
      p={50}
      w="full"
      alignItems="center"
      justifyContent="center"
    >
      <Box
        bg={useColorModeValue("white", "gray.800")}
        mx={{ lg: 8 }}
        display={{ lg: "flex" }}
        maxW={{ lg: "5xl" }}
        shadow={{ lg: "lg" }}
        rounded={{ lg: "lg" }}
      >
        <Box w={{ lg: "50%" }}>
          <Box
            h={{ base: 64, lg: "full" }}
            rounded={{ lg: "lg" }}
            bgSize="cover"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1593642532400-2682810df593?ixlib=rb-1.2.1&ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=750&q=80')",
            }}
          ></Box>
        </Box>

        <Box py={12} px={6} maxW={{ base: "xl", lg: "5xl" }} w={{ lg: "50%" }}>
          <chakra.h2
            fontSize={{ base: "2xl", md: "3xl" }}
            color={useColorModeValue("gray.800", "white")}
            fontWeight="bold"
          >
            
            {" "}
            <chakra.span color={useColorModeValue("brand.600", "brand.400")}>
            <div dangerouslySetInnerHTML = {  {__html:name}  } />
            </chakra.span>
          </chakra.h2>
          <chakra.p mt={4} color={useColorModeValue("gray.600", "gray.400")}>
            <div dangerouslySetInnerHTML = {  {__html:description}  } />
            <br></br>
          </chakra.p>
              <Flex>
                  <Box mt={8} padding="1">
                    <Link
                      
                      bg="gray.900"
                      color="gray.100"
                      px={5}
                      py={3}
                      fontWeight="semibold"
                      rounded="lg"
                      _hover={{ bg: "gray.800" }}
                    >
                      More about this!
                    </Link>
                  </Box>
                  <GitHubButton />
              </Flex>
        </Box>
      </Box>
    </Flex>
  );
};

export default ProjectCard;
