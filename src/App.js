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
  // cupcakes and item state
  const [cupcakes, setCupcakes] = useState(0);
  const [toasters, setToasters] = useState(0);
  const [ovens, setOvens] = useState(0);
  const [industrialOvens, setIndustrialOvens] = useState(0);
  const [friends, setFriends] = useState(0);
  const [chefs, setChefs] = useState(0);
  const [cupcakeGods, setCupcakeGods] = useState(0);

  // setup item purchasing functions
  const purchaseLookup = {};
  purchaseLookup.toasters = () => setToasters((toasters) => toasters + 1);
  purchaseLookup.ovens = () => setOvens((ovens) => ovens + 1);
  purchaseLookup.industrialOvens = () =>
    setIndustrialOvens((industrialOvens) => industrialOvens + 1);
  purchaseLookup.friends = () => setFriends((friends) => friends + 1);
  purchaseLookup.chefs = () => setChefs((chefs) => chefs + 1);
  purchaseLookup.cupcakeGods = () =>
    setCupcakeGods((cupcakeGods) => cupcakeGods + 1);

  // purchase state
  const [toastersCost, setToastersCost] = useState(0);
  const [ovensCost, setOvensCost] = useState(0);
  const [industrialOvensCost, setIndustrialOvensCost] = useState(0);
  const [friendsCost, setFriendsCost] = useState(0);
  const [chefsCost, setChefsCost] = useState(0);
  const [cupcakeGodsCost, setCupcakeGodsCost] = useState(0);

  // setup item costs and increases
  const itemCostLookup = {};
  itemCostLookup.toasters = () => {
    const prevCost = toastersCost;
    setToastersCost((toasterCost) => toasterCost + 50 + 0.1 * cupcakes);
    return prevCost;
  };
  itemCostLookup.ovens = () => {
    const prevCost = ovensCost;
    setOvensCost((ovensCost) => ovensCost + 100 + 0.2 * cupcakes);
    return prevCost;
  };
  itemCostLookup.industrialOvens = () => {
    const prevCost = industrialOvensCost;
    setIndustrialOvensCost(
      (industrialOvensCost) => industrialOvensCost + 200 + 0.3 * cupcakes
    );
    return prevCost;
  };
  itemCostLookup.friends = () => {
    const prevCost = friendsCost;
    setFriendsCost((friendsCost) => friendsCost + 100 + 0.2 * cupcakes);
    return prevCost;
  };
  itemCostLookup.chefs = () => {
    const prevCost = chefsCost;
    setChefsCost((chefsCost) => chefsCost + 300 + 0.4 * cupcakes);
    return prevCost;
  };
  itemCostLookup.cupcakeGods = () => {
    const prevCost = cupcakeGodsCost;
    setCupcakeGodsCost(
      (cupcakeGodsCost) => cupcakeGodsCost + 1000 + 0.8 * cupcakes
    );
    return prevCost;
  };

  // purchase item function: increase item count, increase cost, decrease cupcakes
  function purchaseItem(e, item) {
    e.preventDefault();
    purchaseLookup[item]();
    const itemCost = itemCostLookup[item]();
    setCupcakes((cupcakes) => cupcakes - itemCost);
  }

  function bakeCupcakes() {
    let total = 1;
    total += 5 * toasters;
    total += 10 * ovens;
    total += 100 * industrialOvens;

    setCupcakes((cupcakes) => cupcakes + total);
  }

  // increase cupcakes based on items
  useInterval(
    () => {
      let total = 0;
      total += 5 * friends;
      total += 10 * chefs;
      total += 100 * cupcakeGods;

      setCupcakes((cupcakes) => cupcakes + total);
      document.title = `${cupcakes} Cupcakes Baked`;
    },
    cupcakes ? 1000 : null
  );

  return (
    <Flex flexDirection="column">
      <Header />
      <Route path="/store">
        <Store
          purchaseItem={purchaseItem}
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
