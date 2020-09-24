import React, { useState } from "react";
import { LoginInputs } from "./LoginInputs";
import { RegisterInputs } from "./RegisterInputs";
import {
  useRouteMatch,
  useHistory,
  Link as ReactLink,
  Switch,
  Route,
} from "react-router-dom";
import axios from "axios";
// styles
import { Flex, Text, Link } from "@chakra-ui/core";

function LoginRegister({ user, setUser, storedToken }) {
  let { path } = useRouteMatch();
  let history = useHistory();

  const [regError, setRegError] = useState("");

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
        history.push("/auth/login");
      })
      .catch((err) => {
        setRegError("There was an error registering, try again.");
      });
  };

  const onLoginSubmit = (data) => {
    console.log(data);
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
          <LoginInputs onLoginSubmit={onLoginSubmit} />
        </Route>
      </Switch>
    </Flex>
  );
}

export default LoginRegister;
