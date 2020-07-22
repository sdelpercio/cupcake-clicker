import React from "react";
import { Route } from "react-router-dom";
// components
import Header from "./components/Header";
import Bakery from "./components/Bakery";
import Store from "./components/Store";
// styles
import { Flex } from "@chakra-ui/core";

function App() {
  return (
    <Flex flexDirection="column">
      <Header />
      <Route path="/store" component={Store} />
      <Route exact path="/" component={Bakery} />
    </Flex>
  );
}

export default App;
