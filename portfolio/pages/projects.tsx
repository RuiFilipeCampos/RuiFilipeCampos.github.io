import NavBar from '../components/NavBar'
import { chakra, Box, Flex, useColorModeValue, Link } from "@chakra-ui/react";

import * as React from 'react'

import ProjectCard  from '../components/ProjectCard'

const MyProjects = () => (
  <>
  <chakra.h1 fontSize = "50" textAlign="center">My KEWWWL projects</chakra.h1>
  <div>
      <ProjectCard 
        name = "MontyCarlo" 
        description = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem \
        modi reprehenderit vitae exercitationem aliquid dolores ullam \
        temporibus enim expedita aperiam mollitia iure consectetur dicta \
        tenetur, porro consequuntur saepe accusantium consequatur. \
        "
        />
      <ProjectCard 
        name = "EasyTracer"
        description = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem \
        modi reprehenderit vitae exercitationem aliquid dolores ullam \
        temporibus enim expedita aperiam mollitia iure consectetur dicta \
        tenetur, porro consequuntur saepe accusantium consequatur. \
        "
        />
      <ProjectCard 
        name = "BrownianMotionAndroid"
        description = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem \
        modi reprehenderit vitae exercitationem aliquid dolores ullam \
        temporibus enim expedita aperiam mollitia iure consectetur dicta \
        tenetur, porro consequuntur saepe accusantium consequatur. \
        "
        />
      <ProjectCard 
        name = "JS Game Engine"
        description = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem \
        modi reprehenderit vitae exercitationem aliquid dolores ullam \
        temporibus enim expedita aperiam mollitia iure consectetur dicta \
        tenetur, porro consequuntur saepe accusantium consequatur. \
        "
        />
  </div>
  </>
  )

export default MyProjects

