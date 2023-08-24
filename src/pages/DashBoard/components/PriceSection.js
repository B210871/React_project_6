import React from "react";
import { Button, Flex, HStack, Icon, Image, Stack, Tab, TabList, TabPanel, TabPanels, Tabs,  Text } from "@chakra-ui/react";
import { CustomCard } from "../../../chakra/CustomCard";
import { BsArrowUpRight,BsFillPlusCircleFill } from "react-icons/bs";
import { AiFillMinusCircle } from "react-icons/ai";
export const PriceSection = () => {
const timestamps=["7:15 PM","7:55 PM","8:55 PM","9:15 PM","10:15 PM",]
const tabs=["1H","2H","1D","1M","1Y"];

  return (
    <CustomCard>
      <Flex justify="space-between" align="start">
        <Stack>

       
        <HStack color="black.80">
          <Text fontSize="14px">Wallet Balances</Text>
        </HStack>
        <HStack
          spacing="2"
          flexDir={{
            base: "column",
            sm: "row",
          }}
          align={{
            base: "flex-start",
            sm: "center",
          }}
        >
          <HStack>
            <Text textStyle="h2" fontWeight="medium">
              22.39401000
            </Text>
            <HStack fontWeight="medium" color="green.500">
              <Icon as={BsArrowUpRight} />

              <Text fontSize="sm" fontWeight="medium">
                22%
              </Text>
            </HStack>
          </HStack>
        </HStack>
        </Stack>
      <HStack>
        
          <Button leftIcon={<Icon as={BsFillPlusCircleFill} />}>Buy</Button>
          <Button leftIcon={<Icon as={AiFillMinusCircle} />}>Sell</Button>
        
      </HStack>
      </Flex>
      <Tabs variant='soft-rounded' >
  <Flex justify="end" >
  <TabList bg="black.5" p="3px">
    {
        tabs.map((tab)=>{
            return(
                <Tab _selected={{
                    bg:"white",
                }} key={tab} fontSize="sm" p="6px" borderRadius="4">{tab}</Tab>
            )
        })
    }
   
  </TabList>
  </Flex>
  <TabPanels>
    <TabPanel>
    <Image w="100%" src="/graph.svg"/>
      <HStack justify="space-between" pt="50px">
        {
            timestamps.map((time)=>{
                return(
                   <Text fontSize="sm" key={time} color="black.80">
                    {time}
                   </Text> 
                )
            })
        }
      </HStack>
    </TabPanel>
    <TabPanel>
      <p>two!</p>
    </TabPanel>
  </TabPanels>
</Tabs>
      
    </CustomCard>
  );
};
