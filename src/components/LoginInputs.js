import React, { useState } from "react";
import { useForm } from "react-hook-form";
// styles
import {
  FormLabel,
  FormControl,
  Button,
  Input,
  Text,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/core";

export const LoginInputs = ({ onLoginSubmit, loginError }) => {
  const { register, handleSubmit, formState } = useForm();

  const [showPassword, setShowPassword] = useState(false);
  const handlePassClick = () => setShowPassword((bool) => !bool);

  return (
    <form onSubmit={handleSubmit(onLoginSubmit)}>
      <FormControl isRequired>
        {/* USERNAME */}
        <FormLabel htmlFor="loginUsername">Username</FormLabel>
        <Input
          mb="1rem"
          type="text"
          placeholder="Username"
          name="loginUsername"
          ref={register()}
        />
      </FormControl>
      {/* PASSWORD */}
      <FormControl isRequired>
        <FormLabel htmlFor="loginPassword">Password</FormLabel>
        <InputGroup size="md">
          <Input
            mb="1rem"
            pr="3rem"
            type={showPassword ? "text" : "password"}
            placeholder="Enter Password"
            name="loginPassword"
            ref={register()}
          />
          <InputRightElement width="4rem">
            <Button h="1.75rem" size="sm" onClick={handlePassClick}>
              {showPassword ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>
      <Button mb="1rem" isLoading={formState.isSubmitting} type="submit">
        Submit
      </Button>
      {loginError && (
        <Text fontSize="1.6rem" color="red">
          {loginError}
        </Text>
      )}
    </form>
  );
};
