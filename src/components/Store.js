import React from "react";
// components & media
import { ReactComponent as Toaster } from "../media/toaster-svg.svg";
import { ReactComponent as Oven } from "../media/oven-svg.svg";
import { ReactComponent as IndustrialOven } from "../media/industrial-oven-svg.svg";
import { ReactComponent as Friends } from "../media/friends-svg.svg";
import { ReactComponent as Chef } from "../media/chef-svg.svg";
import { ReactComponent as CupcakeGod } from "../media/cupcake-god-svg.svg";
// styles
import { Flex, Text, Button } from "@chakra-ui/core";

function Store({
  cupcakes,
  bakeCupcakes,
  toasters,
  ovens,
  industrialOvens,
  friends,
  chefs,
  cupcakeGods,
  setToasters,
  setOvens,
  setIndustrialOvens,
  setFriends,
  setChefs,
  setCupcakeGods,
}) {
  return (
    <Flex>
      <Flex>
        <Toaster style={{ height: "75px", width: "75px" }} />
        <Text>Current: {toasters}</Text>
        <Button
          onClick={(e) => {
            e.preventDefault();
            setToasters(toasters + 1);
          }}
        >
          Purchase
        </Button>
      </Flex>
      <Flex>
        <Oven style={{ height: "75px", width: "75px" }} />
        <Text>Current: {ovens}</Text>
        <Button
          onClick={(e) => {
            e.preventDefault();
            setOvens(ovens + 1);
          }}
        >
          Purchase
        </Button>
      </Flex>
      <Flex>
        <IndustrialOven style={{ height: "75px", width: "75px" }} />
        <Text>Current: {industrialOvens}</Text>
        <Button
          onClick={(e) => {
            e.preventDefault();
            setIndustrialOvens(industrialOvens + 1);
          }}
        >
          Purchase
        </Button>
      </Flex>
      <Flex>
        <Friends style={{ height: "75px", width: "75px" }} />
        <Text>Current: {friends}</Text>
        <Button
          onClick={(e) => {
            e.preventDefault();
            setFriends(friends + 1);
          }}
        >
          Purchase
        </Button>
      </Flex>
      <Flex>
        <Chef style={{ height: "75px", width: "75px" }} />
        <Text>Current: {chefs}</Text>
        <Button
          onClick={(e) => {
            e.preventDefault();
            setChefs(chefs + 1);
          }}
        >
          Purchase
        </Button>
      </Flex>
      <Flex>
        <CupcakeGod style={{ height: "75px", width: "75px" }} />
        <Text>Current: {cupcakeGods}</Text>
        <Button
          onClick={(e) => {
            e.preventDefault();
            setCupcakeGods(cupcakeGods + 1);
          }}
        >
          Purchase
        </Button>
      </Flex>
    </Flex>
  );
}

export default Store;
