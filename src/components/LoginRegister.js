import React, { useState } from "react";
import {
  useRouteMatch,
  useHistory,
  Link as ReactLink,
  Switch,
  Route,
} from "react-router-dom";
import axios from "axios";
// components
import { LoginInputs } from "./LoginInputs";
import { RegisterInputs } from "./RegisterInputs";
// styles
import { Flex, Text, Link } from "@chakra-ui/core";

function LoginRegister({ user, setUser, storedToken }) {
  let { path } = useRouteMatch();
  let history = useHistory();

  const [regError, setRegError] = useState("");
  const [loginError, setLoginError] = useState("");

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
        history.push("/auth/login");
      })
      .catch((err) => {
        setRegError("There was an error registering, try again.");
      });
  };

  const onLoginSubmit = (data) => {
    const loginUser = {
      username: data.loginUsername,
      password: data.loginPassword,
    };

    axios
      .post(
        "https://cupcake-clicker-be.herokuapp.com/api/auth/login",
        loginUser
      )
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        setUser(res.data.user);
        history.push("/");
      })
      .catch((err) => {
        setLoginError("There was an error logging in, try again.");
      });
  };

  return (
    <Flex direction="column" m="0 auto">
      <Flex
        width="400px"
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
        {/* REGISTER */}
        <Route path={`${path}/register`}>
          <RegisterInputs
            onRegisterSubmit={onRegisterSubmit}
            regError={regError}
          />
        </Route>
        {/* LOGIN */}
        <Route path={`${path}/login`}>
          <LoginInputs onLoginSubmit={onLoginSubmit} loginError={loginError} />
        </Route>
      </Switch>
    </Flex>
  );
}

export default LoginRegister;
