import React from "react";
// components & media
import { StoreItems } from "./reusable/StoreItems";
import { ReactComponent as Toaster } from "../media/toaster-svg.svg";
import { ReactComponent as Oven } from "../media/oven-svg.svg";
import { ReactComponent as IndustrialOven } from "../media/industrial-oven-svg.svg";
import { ReactComponent as Friends } from "../media/friends-svg.svg";
import { ReactComponent as Chef } from "../media/chef-svg.svg";
import { ReactComponent as CupcakeGod } from "../media/cupcake-god-svg.svg";
// styles
import { Flex } from "@chakra-ui/core";

function Store({ purchaseItem, user }) {
  const {
    cupcakes,
    toasters,
    ovens,
    industrialOvens,
    friends,
    chefs,
    cupcakeGods,
    toastersCost,
    ovensCost,
    industrialOvensCost,
    friendsCost,
    chefsCost,
    cupcakeGodsCost,
  } = user;

  return (
    <Flex
      direction="column"
      justify="space-between"
      align="center"
      w={["90%", "90%", "80%", "80%", "50%"]}
      m="0 auto"
    >
      <StoreItems
        Svg={Toaster}
        cupcakes={cupcakes}
        purchaseItem={purchaseItem}
        itemAmount={toasters}
        itemDescOne="Increase the amount of cupcakes on each bake with a "
        itemDescTwo="Adds +3 cupcakes baked on each click!"
        itemNameBold="Toasters!"
        itemFuncName="toasters"
        itemCost={toastersCost}
      />
      <StoreItems
        Svg={Oven}
        cupcakes={cupcakes}
        purchaseItem={purchaseItem}
        itemAmount={ovens}
        itemDescOne="Increase the amount of cupcakes on each bake with an "
        itemDescTwo="Adds +10 cupcakes baked on each click!"
        itemNameBold="Oven!"
        itemFuncName="ovens"
        itemCost={ovensCost}
      />
      <StoreItems
        Svg={IndustrialOven}
        cupcakes={cupcakes}
        purchaseItem={purchaseItem}
        itemAmount={industrialOvens}
        itemDescOne="Increase the amount of cupcakes on each bake with an "
        itemDescTwo="Adds +25 cupcakes baked on each click!"
        itemNameBold="Industrial Oven!"
        itemFuncName="industrialOvens"
        itemCost={industrialOvensCost}
      />
      <StoreItems
        Svg={Friends}
        cupcakes={cupcakes}
        purchaseItem={purchaseItem}
        itemAmount={friends}
        itemDescOne="Increase the amount of cupcakes you bake by recruiting a "
        itemDescTwo="Adds +50 cupcakes baked every second!"
        itemNameBold="Friend!"
        itemFuncName="friends"
        itemCost={friendsCost}
      />
      <StoreItems
        Svg={Chef}
        cupcakes={cupcakes}
        purchaseItem={purchaseItem}
        itemAmount={chefs}
        itemDescOne="Increase the amount of cupcakes you bake by recruiting a "
        itemDescTwo="Adds +250 cupcakes baked every second!"
        itemNameBold="Chef!"
        itemFuncName="chefs"
        itemCost={chefsCost}
      />
      <StoreItems
        Svg={CupcakeGod}
        cupcakes={cupcakes}
        purchaseItem={purchaseItem}
        itemAmount={cupcakeGods}
        itemDescOne="Increase the amount of cupcakes you bake by recruiting a "
        itemDescTwo="Adds +1500 cupcakes baked every second!"
        itemNameBold="CUPCAKE GOD!!"
        itemFuncName="cupcakeGods"
        itemCost={cupcakeGodsCost}
      />
    </Flex>
  );
}

export default Store;
