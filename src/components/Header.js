import React from "react";
import { Link as ReactLink, useLocation } from "react-router-dom";
// styles
import { Flex, Text, Link } from "@chakra-ui/core";

function Header() {
  const { pathname } = useLocation();

  return (
    <Flex
      flexDirection="column"
      width={["100%", "75%", "50%", "50%"]}
      my={["1rem", "2rem", "4rem"]}
      mx="auto"
    >
      <Text fontSize="4rem" textAlign="center" fontFamily="'Monoton', cursive">
        Cupcake Clicker
      </Text>
      <Flex
        width={["75%", "75%", "50%"]}
        mx="auto"
        justify="space-evenly"
        align="center"
      >
        <Link
          as={ReactLink}
          to="/"
          color={pathname === "/" ? "white" : "black"}
          fontSize="2rem"
          fontFamily="'Sue Ellen Francisco', cursive"
          _hover={{ color: "white" }}
          _active={{ outline: "0", border: "none" }}
          _focus={{ outline: "0", border: "none" }}
        >
          Bakery
        </Link>
        <Link
          as={ReactLink}
          to="/store"
          color={pathname === "/store" ? "white" : "black"}
          fontSize="2rem"
          fontFamily="'Sue Ellen Francisco', cursive"
          _hover={{ color: "white" }}
          _active={{ outline: "0", border: "none" }}
          _focus={{ outline: "0", border: "none" }}
        >
          Store
        </Link>
      </Flex>
    </Flex>
  );
}

export default Header;
