import { Button, HStack, Icon, Stack, Tag, Text } from '@chakra-ui/react'
import React from 'react'
import {BsInfoCircleFill} from "react-icons/bs"
import {BiDownArrowAlt,BiUpArrowAlt} from "react-icons/bi"
export const Portfoliosection = () => {
  return (
    <HStack justify="space-between" bg="white" p="6" borderRadius="xl" flexDir={{
        base:"column",
        xl:"row",
    }}
    align={{
        base:"flex-start",
        xl:"center",
    }}>
       <HStack spacing={{
        base:"0",
        xl:"16",
       }}
       flexDir={{
        base:"column",
        xl:"row",
    }}
    align={{
        base:"flex-start",
        xl:"center",
    }}>
       <Stack>
            <HStack color="black.80" >
              <Text fontSize="14px" >Total Portfolio Value</Text>  
            <Icon as={BsInfoCircleFill}/>
            </HStack>
          <Text textStyle="h2 " fontWeight="medium" >₹ 112,312.24</Text>
        </Stack>
        <Stack>
            <HStack color="black.80" >
              <Text fontSize="14px" >Wallet Balances</Text>  
            
            </HStack>
          <HStack spacing="2"
          flexDir={{
            base:"column",
            sm:"row",
        }}
        align={{
            base:"flex-start",
            sm:"center",
        }}
          >
          <HStack>
          <Text textStyle="h2" fontWeight="medium">22.39401000</Text><Tag  colorScheme='gray'>BTC</Tag>
          </HStack>
          <HStack>
          <Text textStyle="h2" fontWeight="medium">₹ 1,300.00</Text><Tag colorScheme='gray'>INR</Tag>
          </HStack>
          </HStack>
        </Stack>
       </HStack>
        <HStack>
            <Button leftIcon={
                <Icon as={BiDownArrowAlt}/>
            }>
           Deposit
            </Button>
            <Button leftIcon={
                <Icon as={BiUpArrowAlt}/>
            }>
           Withdraw
            </Button>
        </HStack>
    </HStack>
  )
}
