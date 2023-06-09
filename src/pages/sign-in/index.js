import React from "react";
//Components
import { Box, Text, Button, Input, useToast } from "@chakra-ui/react";

function SignIn() {
  const toast = useToast();
  const handleSignIn = () => {
    toast({
      title: "This feature is not ready yet 😅",
      description: "How about you hire me, then I implement this feature 😅",
      status: "warning",
      duration: 8000,
      isClosable: true,
      position: "top-right",
    });
  };
  return (
    <Box
      display={"flex"}
      flexDir={"column"}
      padding={[5, 5, 10, 10]}
      alignItems={["center", "center", "start", "start"]}
      bg={"#ffffff"}
    >
      <Text fontSize={[22, 22, 28, 28]}>Signin</Text>
      <Box
        display={"flex"}
        flexDir={"column"}
        alignItems={["center", "center", "start", "start"]}
        mt={[5, 5, 10, 10]}
      >
        <Input
          placeholder="Email"
          aria-label="Email"
          aria-labelledby="Email"
          mb={5}
          type="email"
          width={["80vw", "80vw", "350px", "350px"]}
        />
        <Input placeholder="Password" type="password" />
        <Button
          bg={"#15adb7"}
          height={"35px"}
          mt={10}
          color={"white"}
          width={"90%"}
          mb={5}
          borderRadius={5}
          fontWeight={400}
          minH={"50px"}
          onClick={handleSignIn}
        >
          Signin
        </Button>
      </Box>
    </Box>
  );
}

export default SignIn;
