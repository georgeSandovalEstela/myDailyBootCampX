import {
  Box,
  Button,
  ChakraProvider,
  Heading,
  Image,
  Input,
  Text,
  Toast,
  useToast,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { findUser } from "../Api/Api";
import {
  TOAST_LOGIN_SEARCHING,
  TOAST_LOGIN_SUCCESS,
  TOAST_LOGIN_USER_NOT_FOUND,
} from "../Messages/Toasts";
import { setUserApp, getUserApp } from "../Storage/Storage";

function Login() {
  const [userLog, setUserLog] = useState();
  const [newUser, setNewUser] = useState(false);
  const [nameUser, setNameUser] = useState("");
  const [carrerUser, setCarrerUser] = useState("");
  const [twitterUser, setTwitterUser] = useState("");
  const [linkedInUser, setLinkedInUser] = useState("");
  const [gitHubUser, setGitHubUser] = useState("");
  const toastLogin = useToast();
  const navigate = useNavigate();
  useEffect(() => {
    // if (!getUserApp()) navigate("/posts", { replace: true });
  }, []);
  const handleInput = (event, setState) => {
    setState(event.target.value);
  };
  const loginUser = async () => {
    toastLogin(TOAST_LOGIN_SEARCHING);
    const userFinded = await findUser(nameUser.trim());
    if (userFinded) {
      toastLogin(TOAST_LOGIN_SUCCESS);
      setNewUser(false);
      setUserApp(userFinded);
      navigate("/posts", { replace: true });
    }
    setNewUser(true);
    toastLogin(TOAST_LOGIN_USER_NOT_FOUND);
  };
  return (
    <ChakraProvider>
      <Box
        width="100%"
        height="40rem"
        display="flex"
        justifyContent="center"
        alignItems="center"
        bg="transparent"
      >
        <Box
          width="30%"
          height="90%"
          bg="url('/src/assets/images/bg.webp')"
          backgroundSize="cover"
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
          borderTopLeftRadius="8px"
          borderBottomLeftRadius="8px"
        >
          <Heading
            color="white"
            marginTop="1rem"
            fontFamily="'Ibarra Real Nova', serif"
            fontSize="3rem"
            width="100%"
            textAlign="center"
          >
            Welcome Back!
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
          bg="white"
          borderTopRightRadius="8px"
          borderBottomRightRadius="8px"
        >
          <Heading color="#4C72DA" marginTop="1rem">
            GsDevs
          </Heading>
          <Text w="100%" marginLeft="1rem" marginBottom="0.5rem">
            Name:
          </Text>
          <Input
            bg="white"
            height="2rem"
            borderRadius="6px"
            width="90%"
            placeholder="Nombre Apellidos"
            size="sm"
            value={nameUser}
            onChange={(e) => handleInput(event, setNameUser)}
          />
          <Box
            width="100%"
            display="flex"
            flexDir="column"
            alignItems="center"
            hidden={!newUser}
          >
            <Text w="100%" marginLeft="1rem" marginBottom="0.5rem">
              Carrer:
            </Text>
            <Input
              bg="white"
              height="2rem"
              borderRadius="6px"
              width="90%"
              placeholder="Software Engineer"
              size="sm"
              value={carrerUser}
              onChange={() => handleInput(event, setCarrerUser)}
            />
            <Text w="100%" marginLeft="1rem" marginBottom="0.5rem">
              Twitter:
            </Text>
            <Input
              bg="white"
              height="2rem"
              borderRadius="6px"
              width="90%"
              placeholder="Twitter"
              size="sm"
              value={twitterUser}
              onChange={() => handleInput(event, setTwitterUser)}
            />
            <Text w="100%" marginLeft="1rem" marginBottom="0.5rem">
              LinkedIn:
            </Text>
            <Input
              bg="white"
              height="2rem"
              borderRadius="6px"
              width="90%"
              placeholder="LinkedIn"
              size="sm"
              value={linkedInUser}
              onChange={() => handleInput(event, setLinkedInUser)}
            />
            <Text w="100%" marginLeft="1rem" marginBottom="0.5rem">
              GitHub:
            </Text>
            <Input
              bg="white"
              height="2rem"
              borderRadius="6px"
              width="90%"
              placeholder="Git Hub"
              size="sm"
              value={gitHubUser}
              onChange={() => handleInput(event, setGitHubUser)}
            />
          </Box>
          <Box
            margin="1.5rem 0"
            width="100%"
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Button bg="#5C98D5" _hover="" onClick={() => loginUser()}>
              Login
            </Button>
          </Box>
        </Box>
      </Box>
    </ChakraProvider>
  );
}

export default Login;
