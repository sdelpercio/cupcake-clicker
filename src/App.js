import React, { useState } from "react";
import { Route } from "react-router-dom";
import { useInterval } from "./utils/useInterval";
import axios from "axios";
// components
import Header from "./components/Header";
import Bakery from "./components/Bakery";
import Store from "./components/Store";
import LoginRegister from "./components/LoginRegister";
// styles
import { Flex } from "@chakra-ui/core";

function App() {
  // retrieve latest localstorage info if possible
  const storedUser = JSON.parse(localStorage.getItem("user"));

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
  const [user, setUser] = useState(storedUser ? storedUser : guestUser);
  const [loggedIn, setLoggedIn] = useState(false);

  // setup item purchasing functions
  const purchaseLookup = {};
  purchaseLookup.toasters = () =>
    setUser((user) => ({ ...user, toasters: user.toasters++ }));
  purchaseLookup.ovens = () =>
    setUser((user) => ({ ...user, ovens: user.ovens++ }));
  purchaseLookup.industrialOvens = () =>
    setUser((user) => ({ ...user, industrialOvens: user.industrialOvens++ }));
  purchaseLookup.friends = () =>
    setUser((user) => ({ ...user, friends: user.friends++ }));
  purchaseLookup.chefs = () =>
    setUser((user) => ({ ...user, chefs: user.chefs++ }));
  purchaseLookup.cupcakeGods = () =>
    setUser((user) => ({ ...user, cupcakeGods: user.cupcakeGods++ }));

  // setup item costs and increases
  const itemCostLookup = {};
  itemCostLookup.toasters = () => {
    const prevCost = user.toastersCost;
    setUser((user) => ({
      ...user,
      toastersCost: Math.floor(user.toastersCost + 100 + 0.1 * user.total),
    }));
    return prevCost;
  };
  itemCostLookup.ovens = () => {
    const prevCost = user.ovensCost;
    setUser((user) => ({
      ...user,
      ovensCost: Math.floor(user.ovensCost + 200 + 0.2 * user.total),
    }));
    return prevCost;
  };
  itemCostLookup.industrialOvens = () => {
    const prevCost = user.industrialOvensCost;
    setUser((user) => ({
      ...user,
      industrialOvensCost: Math.floor(
        user.industrialOvensCost + 500 + 0.3 * user.total
      ),
    }));
    return prevCost;
  };
  itemCostLookup.friends = () => {
    const prevCost = user.friendsCost;
    setUser((user) => ({
      ...user,
      friendsCost: Math.floor(user.friendsCost + 1000 + 0.2 * user.total),
    }));
    return prevCost;
  };
  itemCostLookup.chefs = () => {
    const prevCost = user.chefsCost;
    setUser((user) => ({
      ...user,
      chefsCost: Math.floor(user.chefsCost + 5000 + 0.4 * user.total),
    }));
    return prevCost;
  };
  itemCostLookup.cupcakeGods = () => {
    const prevCost = user.cupcakeGodsCost;
    setUser((user) => ({
      ...user,
      cupcakeGodsCost: Math.floor(
        user.cupcakeGodsCost + 100000 + 0.8 * user.total
      ),
    }));
    return prevCost;
  };

  // purchase item function: increase item count, increase cost, decrease cupcakes
  function purchaseItem(e, item) {
    e.preventDefault();
    purchaseLookup[item]();
    const itemCost = itemCostLookup[item]();
    setUser((user) => ({ ...user, cupcakes: user.cupcakes - itemCost }));
  }

  // increase cupcakes on click
  function bakeCupcakes() {
    let total = 1;
    total += 3 * user.toasters;
    total += 10 * user.ovens;
    total += 25 * user.industrialOvens;

    setUser((user) => ({
      ...user,
      total: user.total + total,
      cupcakes: user.cupcakes + total,
    }));
  }

  // increase cupcakes over time
  useInterval(
    () => {
      let total = 0;
      total += 50 * user.friends;
      total += 250 * user.chefs;
      total += 1500 * user.cupcakeGods;

      setUser((user) => ({
        ...user,
        total: user.total + total,
        cupcakes: user.cupcakes + total,
      }));
      document.title = `${user.cupcakes.toLocaleString()} Cupcakes Baked`;
    },
    user.total ? 1000 : null
  );

  // save info to local storage, every 30 sec
  useInterval(
    () => {
      localStorage.setItem("user", JSON.stringify(user));
    },
    user.total ? 1000 * 30 : null
  );

  return (
    <Flex flexDirection="column">
      <Header user={user} />
      <Route path="/auth">
        <LoginRegister
          user={user}
          // onRegisterSubmit={onRegisterSubmit}
          setUser={setUser}
        />
      </Route>
      <Route path="/store">
        <Store purchaseItem={purchaseItem} user={user} />
      </Route>
      <Route exact path="/">
        <Bakery bakeCupcakes={bakeCupcakes} user={user} />
      </Route>
    </Flex>
  );
}

export default App;
