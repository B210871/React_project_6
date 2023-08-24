import {
  Box,
  Button,
  Card,
  Checkbox,
  FormControl,
  FormLabel,
  HStack,
  Input,
  Stack,
  Text,
  Textarea,
} from "@chakra-ui/react";

export const ContactCard = () => {
  return (
    <Card p="6" flexGrow="1" borderRadius="1rem">
      <Stack spacing="6">
        <Text fontsize="medium">
          {" "}
          You will receive response within 24 hours of time of submit.
        </Text>
        <HStack
          flexDir={{
            base: "column",
            md: "row",
          }}
        >
          <FormControl>
            <FormLabel>Name</FormLabel>
            <Input placeholder="Enter Your Name" />
          </FormControl>
          <FormControl>
            <FormLabel>Surename</FormLabel>
            <Input placeholder="Enter Your Surename" />
          </FormControl>
        </HStack>
        <FormControl>
          <FormLabel>Email</FormLabel>
          <Input placeholder="Enter Your Email" />
        </FormControl>
        <FormControl>
          <FormLabel>Message</FormLabel>
          <Textarea placeholder="Enter Your Message" />
        </FormControl>
        <Checkbox defaultChecked>
          <Text fontsize="xs">
            I agree with{" "}
            <Box as="span" color="p.purple">
              {" "}
              Terms & Condition.
            </Box>
          </Text>
        </Checkbox>
        <Stack>
          <Button fontSize="sm">Send a Message</Button>
          <Button fontSize="sm" colorScheme="gray ">
            Book a Meeting
          </Button>
        </Stack>
      </Stack>
    </Card>
  );
};
