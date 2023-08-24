import { Box, Flex, Icon, Stack, Text } from "@chakra-ui/react";
import React from "react";


export const Supportcard = ({leftComponent,icon,title,text}) => {
  return (
    <Flex
      gap="6"
      flexDir={{
        base: "column",
        xl: "row",
      }}
    >
      <Stack maxW="24rem">
        <Icon boxSize="6" color="p.purple" as={icon} />
        <Text as="h1" textStyle="h1">
      {title}
        </Text>
        <Text fontsize="sm" color="black.60">
          {text}
          
        </Text>
      </Stack>
     <Box maxW="550px" w="full">
     {leftComponent}
     </Box>
    </Flex>
  );
};
