import React from "react";
import { CustomCard } from "../../../chakra/CustomCard";
import { Tag, Text } from "@chakra-ui/react";

export const InfoCard = ({ imgUrl, text, tagtext, inverted }) => {
  return (
    <CustomCard bgImage={imgUrl} bgColor={inverted?"p.purple":"white"} bgSize="cover" bgRepeat="no-repeat">
      <Tag
        color={inverted ? "p.purple" : "white"}
        borderRadius="full"
        bg={inverted ? "white" : "p.purple"}
      >
        {tagtext}
      </Tag>
      <Text textStyle="h5" 
      color={inverted?"white":"p.purple"} fontWeight="medium" mt="4">
        {text}
      </Text>
    </CustomCard>
  );
};
