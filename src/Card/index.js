import { Button } from "@chakra-ui/button";
import { useColorMode, useColorModeValue } from "@chakra-ui/color-mode";
import { Flex, Heading, Text } from "@chakra-ui/layout";

export function Card(){
  const { colorMode, toggleColorMode } = useColorMode();

  const blue = useColorModeValue( "blue.100","blue.600");
  const lightdark = useColorModeValue( "white","#444444");

  return(
    <Flex 
      w="100%" 
      h="100vh"
      alignItems="center"
      justifyContent="center"
    >
      <Flex
      bg={lightdark}
      w={["15rem","35rem"]}
      h={["30rem","20rem"]}
      flexDir="column"
      justifyContent="flex-start"
      p="10"
      borderRadius="10"
    >
      <Heading marginBottom="6">Lorem Ipsum</Heading>

      <Text marginBottom="6">Lorem, ipsum dolor sit amet consectetur adipisicing.
        Isquamr rtempore molestias  totam incidunt.
      </Text>

      <Button 
        bg={blue}
        alignSelf={["center", "flex-start"]}
        w={["12rem","20rem" ]}
        marginTop="10" 
        onClick={toggleColorMode}
        _hover={{
          background: {blue}
        }}
        _active={{
          background: {blue}
        }}
      >
        Trocar Tema para: {colorMode === "light" ? "Dark" : "Light"}
      </Button>
    </Flex>
    </Flex>
  );
}