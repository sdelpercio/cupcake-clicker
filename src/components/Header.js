import React from "react";
import { Link } from "react-router-dom";
// styles
import { Flex, Text } from "@chakra-ui/core";

function Header() {
  return (
    <Flex
      flexDirection="column"
      width={["100%", "75%", "50%", "50%"]}
      my={["1rem", "2rem", "4rem"]}
      mx="auto"
    >
      <Text fontSize="4rem" textAlign="center">
        Cupcake Clicker
      </Text>
      <Flex
        width={["75%", "75%", "25%", "25%"]}
        mx="auto"
        justify="space-evenly"
        align="center"
      >
        <Link to="/">Bakery</Link>
        <Link to="/store">Store</Link>
      </Flex>
    </Flex>
  );
}

export default Header;
