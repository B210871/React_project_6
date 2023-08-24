import { Button, Card, Flex, HStack, Icon, Input, InputGroup, InputLeftElement, Tag} from '@chakra-ui/react'
import React from 'react'
import { DashBoardLayout } from '../../components/DashBoardLayout'
import { AiOutlineDownload } from 'react-icons/ai'
import { Tabs,TabIndicator, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import { Transactiontable } from './components/Transactiontable'
import { BsSearch } from 'react-icons/bs'
export const Transactions = () => {

  const tabs=[
    {
name:"All",
count:349,
    },
    {
name:"Deposit",
count:114,
    },
    {
name:"Withdraw",
count:55,
    },
    {
name:"Trade",
count:50,
    },
  ]
  return (
    <DashBoardLayout title="Transactions">
<Flex justify="end" mt="6" mb="3">
  <Button leftIcon={<Icon as={AiOutlineDownload}/>}>Export CSV</Button>
</Flex>
      <Card borderRadius="1rem">
      <Tabs position="relative" variant="unstyled">
    <TabList pt="4" display="flex" justifyContent="space-between" >

   <HStack>
   {
        tabs.map((tab)=>{
          return(

            <Tab display="flex" gap="4" key={tab.name} pb="4">{tab.name}
            <Tag colorScheme="gray">{tab.count}</Tag>
            </Tab>
          )
        })
      }
   </HStack>
       <InputGroup maxW="200px"  pr="6">
    <InputLeftElement pointerEvents='none'>
      <Icon as={BsSearch}/>
    </InputLeftElement>
    <Input type='text' placeholder='Search here' />
  </InputGroup>
    </TabList>
    <TabIndicator
      mt="-1.5px"
      height="2px"
      bg="blue.500"
      borderRadius="1px"
    />
    <TabPanels>
      <TabPanel>
        <Transactiontable/>
      </TabPanel>
      <TabPanel>
      <Transactiontable/>
      </TabPanel>
      <TabPanel>
      <Transactiontable/>
      </TabPanel>
      <TabPanel>
      <Transactiontable/>
      </TabPanel>
    </TabPanels>
  </Tabs>
      </Card>
    </DashBoardLayout>
  )
}
