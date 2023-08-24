import React, { Fragment } from "react";
import { CustomCard } from "../../../chakra/CustomCard";
import { Button, Divider, Flex, Grid, Icon, Stack, Text } from "@chakra-ui/react";
import { FaBtc, FaRupeeSign } from "react-icons/fa";

export const Transaction = () => {
  const transactions = [
    {
      icon: FaRupeeSign,
      id: "1",
      text: "INR Deposit",
      amount: "+ 81,123.10 ",
      timestamp: "2022-06-09 7:06 PM",
    },
    {
      icon: FaBtc,
      id: "2",
      text: "BTC Sell",
      amount: "- 12.4813391 BTC ",
      timestamp: "2022-05-27 12:32 PM",
    },
    {
      icon: FaRupeeSign,
      id: "3",
      text: "INR Deposit",
      amount: "+ 81,123.10 ",
      timestamp: "2022-06-09 7:06 PM",
    },
  ];
  return (
    <CustomCard h="full">
      <Text fontSize="sm" color="black.80">
        Recent Transaction
      </Text>
      <Stack spacing="4">
        {transactions.map((transaction, i) => {
          return (
            <Fragment key={transaction.id}>
              {i !== 0 && <Divider ></Divider>}
              <Flex gap="4">
                <Grid placeItems="center" bg="black.5" boxSizing="10">
                  <Icon as={transaction.icon} />
                </Grid>
                <Flex justify="space-between" w="full">
                  <Stack spacing={0}>
                    <Text textStyle="h6">{transaction.text}</Text>
                    <Text fontSize="sm" color="black.80">
                      {transaction.timestamp}
                    </Text>
                  </Stack>
                  <Text textStyle="h6">{transaction.amount}</Text>
                </Flex>
              </Flex>
            </Fragment>
          );
        })}
      </Stack>
      <Button w="full" colorScheme="gray" mt="6">View All</Button>
    </CustomCard>
  );
};
