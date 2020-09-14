import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
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

  // user login/register functions
  const onRegisterSubmit = (data) => {
    console.log("pre post", data);
    const newUser = {
      username: data.username,
      password: data.password,
    };

    axios
      .post(
        "https://cupcake-clicker-be.herokuapp.com/api/auth/register",
        newUser
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

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
    const top_password = getValues("password");
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
        <form onSubmit={handleSubmit(onRegisterSubmit)}>
          <FormControl isRequired isInvalid={errors.username}>
            {/* USERNAME */}
            <FormLabel htmlFor="username">Username</FormLabel>
            <Input
              type="text"
              placeholder="Username"
              name="username"
              ref={register({ validate: validateUsername })}
            />
            <FormErrorMessage>
              {errors.username && errors.username.message}
            </FormErrorMessage>
          </FormControl>
          {/* PASSWORD */}
          <FormControl isRequired isInvalid={errors.password}>
            <FormLabel htmlFor="password">Password</FormLabel>
            <InputGroup size="md">
              <Input
                pr="3rem"
                type={showPassword ? "text" : "password"}
                placeholder="Enter Password"
                name="password"
                ref={register({ validate: validatePassword })}
              />
              <InputRightElement width="4rem">
                <Button h="1.75rem" size="sm" onClick={handlePassClick}>
                  {showPassword ? "Hide" : "Show"}
                </Button>
              </InputRightElement>
            </InputGroup>
            <FormErrorMessage>
              {errors.password && errors.password.message}
            </FormErrorMessage>
          </FormControl>
          {/* RETYPE PASSWORD */}
          <FormControl isRequired isInvalid={errors.retypepassword}>
            <FormLabel htmlFor="retypepassword">Re-type Password</FormLabel>
            <InputGroup size="md">
              <Input
                pr="3rem"
                type={showRetype ? "text" : "password"}
                placeholder="Re-type Password"
                name="retypepassword"
                ref={register({ validate: validateRetypePassword })}
              />
              <InputRightElement width="4rem">
                <Button h="1.75rem" size="sm" onClick={handleRetypeClick}>
                  {showRetype ? "Hide" : "Show"}
                </Button>
              </InputRightElement>
            </InputGroup>
            <FormErrorMessage>
              {errors.retypepassword && errors.retypepassword.message}
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
