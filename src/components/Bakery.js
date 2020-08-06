import React from "react";
// styles
import { Flex, Text, Button } from "@chakra-ui/core";

function Bakery({
  cupcakes,
  bakeCupcakes,
  toasters,
  ovens,
  industrialOvens,
  friends,
  chefs,
  cupcakeGods,
}) {
  return (
    <Flex>
      <Flex>
        <Text>{cupcakes}</Text>
        <Button onClick={bakeCupcakes}>Bake!</Button>
      </Flex>
      <Flex>
        <Flex>
          <Text>Toasters</Text>
          <Text>{toasters}</Text>
        </Flex>
        <Flex>
          <Text>Ovens</Text>
          <Text>{ovens}</Text>
        </Flex>
        <Flex>
          <Text>Industrial</Text>
          <Text>{industrialOvens}</Text>
        </Flex>
        <Flex>
          <Text>Friends</Text>
          <Text>{friends}</Text>
        </Flex>
        <Flex>
          <Text>Chefs</Text>
          <Text>{chefs}</Text>
        </Flex>
        <Flex>
          <Text>Cupcake Gods</Text>
          <Text>{cupcakeGods}</Text>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default Bakery;
