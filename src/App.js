import React, { useState } from "react";
import { Route } from "react-router-dom";
// components
import Header from "./components/Header";
import Bakery from "./components/Bakery";
import Store from "./components/Store";
// styles
import { Flex } from "@chakra-ui/core";

function App() {
  const [cupcakes, setCupcakes] = useState(0);
  const [toasters, setToasters] = useState(0);
  const [ovens, setOvens] = useState(0);
  const [industrialOvens, setIndustrialOvens] = useState(0);
  const [friends, setFriends] = useState(0);
  const [chefs, setChefs] = useState(0);
  const [cupcakeGods, setCupcakeGods] = useState(0);

  function bakeCupcakes() {
    let total = 1;
    total += 5 * toasters;
    total += 10 * ovens;
    total += 100 * industrialOvens;

    setCupcakes(cupcakes + total);
  }

  return (
    <Flex flexDirection="column">
      <Header />
      <Route path="/store">
        <Store />
      </Route>
      <Route exact path="/">
        <Bakery
          cupcakes={cupcakes}
          bakeCupcakes={bakeCupcakes}
          toasters={toasters}
          ovens={ovens}
          industrialOvens={industrialOvens}
          friends={friends}
          chefs={chefs}
          cupcakeGods={cupcakeGods}
        />
      </Route>
    </Flex>
  );
}

export default App;
