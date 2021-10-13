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
        description = "I will tell you a secret that will only be here during the constructio nof this website. The name MontyCarlo may sound a bit dumb, but it is an easter egg. It is an allusion to Monty Python, the name of the band that inspired Pythons name. This project inherits the philosophy of Python (import this)"
        img_url = "https://i.imgur.com/xYA2CI3.png"
        />
      <ProjectCard 
        name = "EasyTracer"
        description = "A ray tracer engine built from scratch. This project is still in progress and gets updated pretty much everyday with major advances in each commit. As of the time of writing, "
        img_url = "https://i.imgur.com/JNaSDw8.png?1"
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

