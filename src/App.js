import React, { useState } from "react";
import { Route } from "react-router-dom";
import { useInterval } from "./utils/useInterval";
// components
import Header from "./components/Header";
import Bakery from "./components/Bakery";
import Store from "./components/Store";
import LoginRegister from "./components/LoginRegister";
// styles
import { Flex } from "@chakra-ui/core";

function App() {
  // retrieve localstorage info if possible
  const storedTotal = Number(localStorage.getItem("total"));
  const storedCupcakes = Number(localStorage.getItem("cupcakes"));
  const storedTs = Number(localStorage.getItem("toasters"));
  const storedOs = Number(localStorage.getItem("ovens"));
  const storedIOs = Number(localStorage.getItem("industrialOvens"));
  const storedFs = Number(localStorage.getItem("friends"));
  const storedCs = Number(localStorage.getItem("chefs"));
  const storedCGs = Number(localStorage.getItem("cupcakeGods"));
  const storedTsC = Number(localStorage.getItem("toastersCost"));
  const storedOsC = Number(localStorage.getItem("ovensCost"));
  const storedIOsC = Number(localStorage.getItem("industrialOvensCost"));
  const storedFsC = Number(localStorage.getItem("friendsCost"));
  const storedCsC = Number(localStorage.getItem("chefsCost"));
  const storedCGsC = Number(localStorage.getItem("cupcakeGodsCost"));

  // cupcakes and item state
  const [total, setTotal] = useState(storedTotal ? storedTotal : 0);
  const [cupcakes, setCupcakes] = useState(storedCupcakes ? storedCupcakes : 0);
  const [toasters, setToasters] = useState(storedTs ? storedTs : 0);
  const [ovens, setOvens] = useState(storedOs ? storedOs : 0);
  const [industrialOvens, setIndustrialOvens] = useState(
    storedIOs ? storedIOs : 0
  );
  const [friends, setFriends] = useState(storedFs ? storedFs : 0);
  const [chefs, setChefs] = useState(storedCs ? storedCs : 0);
  const [cupcakeGods, setCupcakeGods] = useState(storedCGs ? storedCGs : 0);

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
  const [toastersCost, setToastersCost] = useState(storedTsC ? storedTsC : 20);
  const [ovensCost, setOvensCost] = useState(storedOsC ? storedOsC : 100);
  const [industrialOvensCost, setIndustrialOvensCost] = useState(
    storedIOsC ? storedIOsC : 500
  );
  const [friendsCost, setFriendsCost] = useState(storedFsC ? storedFsC : 1000);
  const [chefsCost, setChefsCost] = useState(storedCsC ? storedCsC : 5000);
  const [cupcakeGodsCost, setCupcakeGodsCost] = useState(
    storedCGsC ? storedCGsC : 100000
  );

  // setup item costs and increases
  const itemCostLookup = {};
  itemCostLookup.toasters = () => {
    const prevCost = toastersCost;
    setToastersCost((toasterCost) =>
      Math.floor(toasterCost + 100 + 0.1 * total)
    );
    return prevCost;
  };
  itemCostLookup.ovens = () => {
    const prevCost = ovensCost;
    setOvensCost((ovensCost) => Math.floor(ovensCost + 200 + 0.2 * total));
    return prevCost;
  };
  itemCostLookup.industrialOvens = () => {
    const prevCost = industrialOvensCost;
    setIndustrialOvensCost((industrialOvensCost) =>
      Math.floor(industrialOvensCost + 500 + 0.3 * total)
    );
    return prevCost;
  };
  itemCostLookup.friends = () => {
    const prevCost = friendsCost;
    setFriendsCost((friendsCost) =>
      Math.floor(friendsCost + 1000 + 0.2 * total)
    );
    return prevCost;
  };
  itemCostLookup.chefs = () => {
    const prevCost = chefsCost;
    setChefsCost((chefsCost) => Math.floor(chefsCost + 5000 + 0.4 * total));
    return prevCost;
  };
  itemCostLookup.cupcakeGods = () => {
    const prevCost = cupcakeGodsCost;
    setCupcakeGodsCost((cupcakeGodsCost) =>
      Math.floor(cupcakeGodsCost + 100000 + 0.8 * total)
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

  // increase cupcakes on click
  function bakeCupcakes() {
    let total = 1;
    total += 3 * toasters;
    total += 10 * ovens;
    total += 25 * industrialOvens;

    setTotal((t) => t + total);
    setCupcakes((cupcakes) => cupcakes + total);
  }

  // increase cupcakes over time
  useInterval(
    () => {
      let total = 0;
      total += 50 * friends;
      total += 250 * chefs;
      total += 1500 * cupcakeGods;

      setTotal((t) => t + total);
      setCupcakes((cupcakes) => cupcakes + total);
      document.title = `${cupcakes.toLocaleString()} Cupcakes Baked`;
    },
    total ? 1000 : null
  );

  // save info to local storage, every 30 sec
  useInterval(
    () => {
      localStorage.setItem("total", total);
      localStorage.setItem("cupcakes", cupcakes);
      localStorage.setItem("toasters", toasters);
      localStorage.setItem("ovens", ovens);
      localStorage.setItem("industrialOvens", industrialOvens);
      localStorage.setItem("friends", friends);
      localStorage.setItem("chefs", chefs);
      localStorage.setItem("cupcakeGods", cupcakeGods);
      localStorage.setItem("toastersCost", toastersCost);
      localStorage.setItem("ovensCost", ovensCost);
      localStorage.setItem("industrialOvensCost", industrialOvensCost);
      localStorage.setItem("friendsCost", friendsCost);
      localStorage.setItem("chefsCost", chefsCost);
      localStorage.setItem("cupcakeGodsCost", cupcakeGodsCost);
    },
    total ? 1000 * 30 : null
  );

  // user information
  const guestUser = {
    name: "Aspiring Baker",
    total: 0,
    cupcakes: 0,
    toasters: 0,
    ovens: 0,
    industrialOvens: 0,
    friends: 0,
    chefs: 0,
    cupcakeGods: 0,
    toastersCost: 20,
    ovensCost: 100,
    industrialOvensCost: 500,
    friendsCost: 1000,
    chefsCost: 5000,
    cupcakeGodsCost: 100000,
  };
  const [user, setUser] = useState(guestUser);

  return (
    <Flex flexDirection="column">
      <Header user={user} />
      <Route path="/auth">
        <LoginRegister user={user} />
      </Route>
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
