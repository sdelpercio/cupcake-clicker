import React from "react";

// styles
import { Flex, Text } from "@chakra-ui/core";

function LoginRegister({ user, setUser }) {
  return (
    <Flex>
      <Text>
        {user.name === "Aspiring Baker"
          ? "Register to save your cupcakes!"
          : `Your cupcakes are safe with us, ${user.name} :)`}
      </Text>
      {user.name === "Aspiring Baker" ? (
        <Flex>Register</Flex>
      ) : (
        <Flex>Login</Flex>
      )}
    </Flex>
  );
}

export default LoginRegister;
