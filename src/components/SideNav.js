import { Box, HStack, Heading, Icon, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { RxDashboard } from "react-icons/rx";
import { BsArrowDownUp } from "react-icons/bs";
import { BiSupport } from "react-icons/bi";
import { Link, useLocation } from 'react-router-dom';
import "@fontsource/ubuntu/400.css"; 
import "@fontsource/ubuntu/500.css"; 
import "@fontsource/ubuntu/700.css"; 
export const SideNav = () => {


  const location= useLocation();



  const isactive=(link)=>{
    return location.pathname === link

    
  }
    const navLinks=[
        {
            icon:RxDashboard,
            text:"Dashboard",
            link:"/",
        },
        {
            icon:BsArrowDownUp,
            text:"Transactions",
            link:"/transactions",
        },
       
    ]
  return (
    <Stack
    bg="white"
    justifyContent="space-between"
    boxShadow={{
        base:"none",
        lg:"lg"
    }}
    w={{
        base:"full",
        lg:"16rem",
    }}
    h="100vh"
   
    >
        <Box>
        <Heading textAlign="center" as="h1" pt="56px" fontSize="20px" >@D0SOMECODING</Heading>
<Box mt="6" mx="3">
{
            navLinks.map((nav)=>{
              return(  
              <Link to={nav.link} key={nav.text} >
              
              <HStack 
                borderRadius="10px"
                mx="12px"  py="3" px="4" 
                bg={isactive(nav.link)?"#F3F3F7":"transparent"}
                color={isactive(nav.link)?"#171717":"#797E82"}
              _hover={{
                bg:"#F3F3F7",
                color:"#171717",
            }}
            >
                    <Icon as={nav.icon}>
                    </Icon>
                       <Text   fontWeight="medium" fontSize="14px">{nav.text}</Text> 
                </HStack>
                </Link>
              )
            })
           
        }
</Box>
        </Box>
<Box mt="6" mx="3" mb='6'>
  <Link to="/support">
<HStack 
                borderRadius="10px"
                mx="12px"  py="3" px="4" 
                bg={isactive("/support")?"#F3F3F7":"transparent"}
                color={isactive("/support")?"#171717":"#797E82"}
              _hover={{
                bg:"#F3F3F7",
                color:"#171717",
            }}
            >
                    <Icon as={BiSupport}>
                    </Icon>
                       <Text   fontWeight="medium" fontSize="14px">Support</Text>
                </HStack>
                       </Link> 
</Box>
    </Stack>
  )
}
