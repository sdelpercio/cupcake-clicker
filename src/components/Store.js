import React from "react";
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
        <Text>Toasters</Text>
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
        <Text>Ovens</Text>
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
        <Text>Industrial Ovens</Text>
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
        <Text>Friends</Text>
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
        <Text>Chefs</Text>
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
        <Text>Cupcake Gods</Text>
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
