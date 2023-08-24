import React from 'react'
import {
    Drawer,
    DrawerBody,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    
  } from '@chakra-ui/react'
import { SideNav } from './SideNav'

export const SideDrawer = ({onClose,isOpen}) => {
   
  
    return (
      <>
        
        <Drawer
          isOpen={isOpen}
          placement='left'
          onClose={onClose}
         
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
       
  <SideNav/>
            <DrawerBody>
              
            </DrawerBody>
  
            
          </DrawerContent>
        </Drawer>
      </>
    )
}
