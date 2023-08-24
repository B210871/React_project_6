import {Heading,  HStack, Box, Icon } from '@chakra-ui/react'
import React from 'react'
import { FaBars, FaUserTie } from "react-icons/fa";
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Button,
    

  
  } from '@chakra-ui/react'
  

export const   TopNav = ({title,onOpen}) => {
  return (
   <Box px="4" bg="white">
     <HStack maxW="70rem" mx="auto"  h="16" justify="space-between" >
        <Icon as={FaBars} onClick={onOpen} display={{
            base:"block",
            lg:"none",
        }}/>
        <Heading fontWeight="medium" fontSize="28px">
      {title}
        </Heading>
        <Menu>
<MenuButton as={Button} >
<Icon as={FaUserTie} fontSize="24px"/>


</MenuButton>
<MenuList>
<MenuItem>Logout</MenuItem>
<MenuItem>Support</MenuItem>
</MenuList>
</Menu>
    
</HStack>
   </Box>
  )
}
