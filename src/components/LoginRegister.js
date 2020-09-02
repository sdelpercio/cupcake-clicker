import React, { useState } from "react";
import { useForm } from "react-hook-form";
// styles
import {
  Flex,
  Text,
  FormErrorMessage,
  FormLabel,
  FormControl,
  Button,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/core";

function LoginRegister({ user, setUser }) {
  // form state
  const [showPassword, setShowPassword] = useState(false);
  const [showRetype, setShowRetype] = useState(false);
  const { register, handleSubmit, errors, formState, getValues } = useForm();

  // form functions
  const handlePassClick = () => setShowPassword((bool) => !bool);
  const handleRetypeClick = () => setShowRetype((bool) => !bool);
  const onSubmit = (data) => console.log(data);

  // validation functions
  function validateUsername(value) {
    let error;
    if (!value) {
      error = "Username is required";
    } else if (value.length > 15 || value.length < 2) {
      error = "Username must be 2 - 15 characters long";
    }
    return error || true;
  }
  function validatePassword(value) {
    let error;
    const expression = new RegExp(
      "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{0,}$"
    );
    if (!value) {
      error = "Password is required";
    } else if (value.length < 8) {
      error = "Password must be at least 8 characters long";
    } else if (expression.test(value) === false) {
      error =
        "Password must include a capital letter, number, and special character";
    }
    return error || true;
  }
  function validateRetypePassword(value) {
    let error;
    const top_password = getValues("Password");
    if (!value) {
      error = "Must re-type your password";
    } else if (value !== top_password) {
      error = "Passwords must match";
    }
    return error || true;
  }

  return (
    <Flex direction="column" m="0 auto">
      <Text>
        {user.name === "Aspiring Baker"
          ? "Register to save your cupcakes!"
          : `Your Cupcakes are safe with us, ${user.name} :)`}
      </Text>
      {user.name === "Aspiring Baker" ? (
        //   REGISTER
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormControl isRequired isInvalid={errors.Username}>
            {/* USERNAME */}
            <FormLabel htmlFor="Username">Username</FormLabel>
            <Input
              type="text"
              placeholder="Username"
              name="Username"
              ref={register({ validate: validateUsername })}
            />
            <FormErrorMessage>
              {errors.Username && errors.Username.message}
            </FormErrorMessage>
          </FormControl>
          {/* PASSWORD */}
          <FormControl isRequired isInvalid={errors.Password}>
            <FormLabel htmlFor="Password">Password</FormLabel>
            <InputGroup size="md">
              <Input
                pr="3rem"
                type={showPassword ? "text" : "password"}
                placeholder="Enter Password"
                name="Password"
                ref={register({ validate: validatePassword })}
              />
              <InputRightElement width="4rem">
                <Button h="1.75rem" size="sm" onClick={handlePassClick}>
                  {showPassword ? "Hide" : "Show"}
                </Button>
              </InputRightElement>
            </InputGroup>
            <FormErrorMessage>
              {errors.Password && errors.Password.message}
            </FormErrorMessage>
          </FormControl>
          {/* RETYPE PASSWORD */}
          <FormControl isRequired isInvalid={errors.RetypePassword}>
            <FormLabel htmlFor="RetypePassword">Re-type Password</FormLabel>
            <InputGroup size="md">
              <Input
                pr="3rem"
                type={showRetype ? "text" : "password"}
                placeholder="Re-type Password"
                name="RetypePassword"
                ref={register({ validate: validateRetypePassword })}
              />
              <InputRightElement width="4rem">
                <Button h="1.75rem" size="sm" onClick={handleRetypeClick}>
                  {showRetype ? "Hide" : "Show"}
                </Button>
              </InputRightElement>
            </InputGroup>
            <FormErrorMessage>
              {errors.RetypePassword && errors.RetypePassword.message}
            </FormErrorMessage>
          </FormControl>
          <Button isLoading={formState.isSubmitting} type="submit">
            Submit
          </Button>
        </form>
      ) : (
        <Flex>Login</Flex>
      )}
    </Flex>
  );
  // return <Text m="0 auto">Coming Soon</Text>;
}

export default LoginRegister;
