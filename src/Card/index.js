import { Button } from "@chakra-ui/button";
import { Flex, Heading, Text } from "@chakra-ui/layout";

export function Card(){
  return(
    <Flex 
      w="100%" 
      h="100vh"
      alignItems="center"
      justifyContent="center"
    >
      <Flex
      bg="white"
      w="35rem"
      h="20rem"
      flexDir="column"
      justifyContent="flex-start"
      p="10"
      borderRadius="10"
    >
      <Heading marginBottom="6">Lorem Ipsum</Heading>

      <Text marginBottom="6">Lorem, ipsum dolor sit amet consectetur adipisicing.
        Isquamr rtempore molestias  totam incidunt.
      </Text>

      <Button bg="#28B2FF" w="20rem" marginTop="10">
        Trocar Tema
      </Button>
    </Flex>
    </Flex>
  );
}