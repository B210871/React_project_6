
import React from 'react'
import { DashBoardLayout } from '../../components/DashBoardLayout'
import { Supportcard } from './components/Supportcard'
import { ContactCard } from './components/ContactCard'
import { AiFillMail, AiFillMessage } from 'react-icons/ai'
import { InfoCard } from '../DashBoard/components/InfoCard'
import { Stack } from '@chakra-ui/react'

export const Support = () => {
  return (
    <DashBoardLayout>
    <Stack spacing="80px">
    <Supportcard
     icon={AiFillMail}
     title=" Contact Us"
     text="Have a question or just want to know more? Feel free to reach out to
     us."
     leftComponent={<ContactCard/>}
     >

     </Supportcard>
     <Supportcard
    
     leftComponent={  
     <InfoCard
      inverted={true}
      tagText="Contact"
      imgUrl="/grid_bg.svg"
      text="Learn more about our real estate, mortgage, and  corporate account services"
    />}
    icon={AiFillMessage}
    title="Live Chat"
    text="Don’t have time to wait for the answer? Chat with us now"
     >

     </Supportcard>
    </Stack>
      </DashBoardLayout>
  )
}
