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
  const [toastersCost, setToastersCost] = useState(20);
  const [ovensCost, setOvensCost] = useState(100);
  const [industrialOvensCost, setIndustrialOvensCost] = useState(500);
  const [friendsCost, setFriendsCost] = useState(1000);
  const [chefsCost, setChefsCost] = useState(5000);
  const [cupcakeGodsCost, setCupcakeGodsCost] = useState(100000);

  // setup item costs and increases
  const itemCostLookup = {};
  itemCostLookup.toasters = () => {
    const prevCost = toastersCost;
    setToastersCost((toasterCost) =>
      Math.floor(toasterCost + 100 + 0.1 * cupcakes)
    );
    return prevCost;
  };
  itemCostLookup.ovens = () => {
    const prevCost = ovensCost;
    setOvensCost((ovensCost) => Math.floor(ovensCost + 200 + 0.2 * cupcakes));
    return prevCost;
  };
  itemCostLookup.industrialOvens = () => {
    const prevCost = industrialOvensCost;
    setIndustrialOvensCost((industrialOvensCost) =>
      Math.floor(industrialOvensCost + 500 + 0.3 * cupcakes)
    );
    return prevCost;
  };
  itemCostLookup.friends = () => {
    const prevCost = friendsCost;
    setFriendsCost((friendsCost) =>
      Math.floor(friendsCost + 1000 + 0.2 * cupcakes)
    );
    return prevCost;
  };
  itemCostLookup.chefs = () => {
    const prevCost = chefsCost;
    setChefsCost((chefsCost) => Math.floor(chefsCost + 5000 + 0.4 * cupcakes));
    return prevCost;
  };
  itemCostLookup.cupcakeGods = () => {
    const prevCost = cupcakeGodsCost;
    setCupcakeGodsCost((cupcakeGodsCost) =>
      Math.floor(cupcakeGodsCost + 100000 + 0.8 * cupcakes)
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
    total += 50 * industrialOvens;

    setCupcakes((cupcakes) => cupcakes + total);
  }

  // increase cupcakes based on items
  useInterval(
    () => {
      let total = 0;
      total += 50 * friends;
      total += 250 * chefs;
      total += 1500 * cupcakeGods;

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
          cupcakes={cupcakes}
          toasters={toasters}
          ovens={ovens}
          industrialOvens={industrialOvens}
          friends={friends}
          chefs={chefs}
          cupcakeGods={cupcakeGods}
          toastersCost={toastersCost}
          ovensCost={ovensCost}
          industrialOvensCost={industrialOvensCost}
          friendsCost={friendsCost}
          chefsCost={chefsCost}
          cupcakeGodsCost={cupcakeGodsCost}
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
