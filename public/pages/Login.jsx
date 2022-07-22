import {
  Box,
  Button,
  ChakraProvider,
  Heading,
  Image,
  Input,
  Text,
} from "@chakra-ui/react";
import React from "react";

function Login() {
  return (
    <ChakraProvider>
      <Box
        width="100%"
        height="35rem"
        display="flex"
        justifyContent="center"
        alignItems="center"
        bg="transparent"
      >
        <Box
          width="30%"
          height="90%"
          bg="url('/src/assets/images/bg.jpg')"
          backgroundSize="cover"
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
        >
          <Heading color="white" marginTop="1rem">
            Welvome Back!
          </Heading>
          <Image src="/src/assets/images/avatar.png" alt="avatar" width="65%" />
        </Box>
        <Box
          width="30%"
          height="90%"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          bg="#E2E1DF"
          border="2px solid black"
        >
          <Heading color="#4C72DA" marginTop="1rem">
            GsDevs
          </Heading>
          <Text w="100%" marginLeft="1rem" marginBottom="0.5rem">
            Name:
          </Text>
          <Input
            bg="white"
            height="5rem"
            borderRadius="6px"
            width="90%"
            placeholder="George Sandoval"
            size="sm"
          />
          <Text w="100%" marginLeft="1rem" marginBottom="0.5rem">
            Carrer:
          </Text>
          <Input
            bg="white"
            height="5rem"
            borderRadius="6px"
            width="90%"
            placeholder="Software Engineer"
            size="sm"
          />
          <Text w="100%" marginLeft="1rem" marginBottom="0.5rem">
            Twitter:
          </Text>
          <Input
            bg="white"
            height="5rem"
            borderRadius="6px"
            width="90%"
            placeholder="Twitter"
            size="sm"
          />
          <Text w="100%" marginLeft="1rem" marginBottom="0.5rem">
            LinkedIn:
          </Text>
          <Input
            bg="white"
            height="5rem"
            borderRadius="6px"
            width="90%"
            placeholder="LinkedIn"
            size="sm"
          />
          <Text w="100%" marginLeft="1rem" marginBottom="0.5rem">
            GitHub:
          </Text>
          <Input
            bg="white"
            height="5rem"
            borderRadius="6px"
            width="90%"
            placeholder="Git Hub"
            size="sm"
          />
          <Box
            margin="1.5rem 0"
            width="100%"
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Button bg=""> Login</Button>
          </Box>
        </Box>
      </Box>
    </ChakraProvider>
  );
}

export default Login;
