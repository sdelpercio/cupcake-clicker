import React, { useState } from "react";
import { Route } from "react-router-dom";
import { useInterval } from "./utils/useInterval";
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

  useInterval(() => {
    let total = 0;
    total += 5 * friends;
    total += 10 * chefs;
    total += 100 * cupcakeGods;

    setCupcakes(cupcakes + total);
    document.title = `${cupcakes} Cupcakes Baked`;
  }, 1000);

  return (
    <Flex flexDirection="column">
      <Header />
      <Route path="/store">
        <Store
          toasters={toasters}
          ovens={ovens}
          industrialOvens={industrialOvens}
          friends={friends}
          chefs={chefs}
          cupcakeGods={cupcakeGods}
          setToasters={setToasters}
          setOvens={setOvens}
          setIndustrialOvens={setIndustrialOvens}
          setFriends={setFriends}
          setChefs={setChefs}
          setCupcakeGods={setCupcakeGods}
        />
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
