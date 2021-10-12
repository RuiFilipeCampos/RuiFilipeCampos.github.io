import { Flex } from '@chakra-ui/react'
import NavBar from '../components/NavBar'

import * as React from 'react'

import ProjectCard  from '../components/ProjectCard'

const MyProjects = () => (
  <>
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
  </>
  )

export default MyProjects

