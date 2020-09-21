import React, { useState } from "react";
import {
  useRouteMatch,
  Link as ReactLink,
  Switch,
  Route,
} from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
// styles
import {
  Flex,
  Text,
  Link,
  FormErrorMessage,
  FormLabel,
  FormControl,
  Button,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/core";

function LoginRegister({ user, setUser, storedToken }) {
  let { path, url } = useRouteMatch();

  // form state
  const [showPassword, setShowPassword] = useState(false);
  const [showRetype, setShowRetype] = useState(false);
  const [regError, setRegError] = useState("");
  const { register, handleSubmit, errors, formState, getValues } = useForm();

  // form functions
  const handlePassClick = () => setShowPassword((bool) => !bool);
  const handleRetypeClick = () => setShowRetype((bool) => !bool);

  // user login/register functions
  const onRegisterSubmit = (data) => {
    const newUser = {
      username: data.username,
      password: data.password,
    };
    setRegError("");

    axios
      .post(
        "https://cupcake-clicker-be.herokuapp.com/api/auth/register",
        newUser
      )
      .then((res) => {
        localStorage.setItem("token", res.token);
        setUser((user) => ({
          ...user,
          name: res.username,
        }));
      })
      .catch((err) => {
        setRegError("There was an error registering, try again.");
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
      <Flex
        width="100%"
        mx="auto"
        mb="2rem"
        justify="space-evenly"
        align="center"
      >
        <Link
          as={ReactLink}
          to={`${path}/register`}
          color={path === "/auth/register" ? "white" : "black"}
          fontSize="2rem"
          fontFamily="'Sue Ellen Francisco', cursive"
          _hover={{ color: "white" }}
          _active={{ outline: "0", border: "none" }}
          _focus={{ outline: "0", border: "none" }}
        >
          Register
        </Link>
        <Link
          as={ReactLink}
          to={`${path}/login`}
          color={path === "/auth/login" ? "white" : "black"}
          fontSize="2rem"
          fontFamily="'Sue Ellen Francisco', cursive"
          _hover={{ color: "white" }}
          _active={{ outline: "0", border: "none" }}
          _focus={{ outline: "0", border: "none" }}
        >
          Login
        </Link>
      </Flex>
      <Switch>
        <Route exact path="/auth">
          <Text fontSize="1.6rem">
            Login or Register to save your cupcakes :)
          </Text>
        </Route>
        <Route path={`${path}/register`}>
          {/* REGISTER */}
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
            {regError && <Text color="red">{regError}</Text>}
          </form>
        </Route>
        <Route path={`${path}/login`}>Login</Route>
      </Switch>
    </Flex>
  );
}

export default LoginRegister;
