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
      {/* Counter and bake button */}
      <Flex>
        <Text>{cupcakes}</Text>
        <Button onClick={bakeCupcakes}>Bake!</Button>
      </Flex>
    </Flex>
  );
}

export default Bakery;
