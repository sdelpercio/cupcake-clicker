import React from "react";
// components and media
import { ReactComponent as Cupcake } from "../media/cupcake-svg.svg";
import { ReactComponent as Toaster } from "../media/toaster-svg.svg";
import { ReactComponent as Oven } from "../media/oven-svg.svg";
import { ReactComponent as IndustrialOven } from "../media/industrial-oven-svg.svg";
import { ReactComponent as Friends } from "../media/friends-svg.svg";
import { ReactComponent as Chef } from "../media/chef-svg.svg";
import { ReactComponent as CupcakeGod } from "../media/cupcake-god-svg.svg";
// styles
import { Flex, Text, Button, Box } from "@chakra-ui/core";

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
    <Flex direction="column" m="0 auto">
      <Flex direction="column" align="center" textAlign="center">
        <Button
          as={Cupcake}
          onClick={bakeCupcakes}
          bg="None"
          rounded="50%"
          cursor="pointer"
          h="150px"
          w="150px"
        />
        <Text>{cupcakes}</Text>
        <Text>⬆ Bake! ⬆</Text>
      </Flex>
      <Flex>
        <Box textAlign="center">
          <Toaster style={{ height: "75px", width: "75px" }} />
          <Text>Toasters</Text>
          <Text>{toasters}</Text>
        </Box>
        <Box textAlign="center">
          <Oven style={{ height: "75px", width: "75px" }} />
          <Text>Ovens</Text>
          <Text>{ovens}</Text>
        </Box>
        <Flex>
          <Text>Industrial Ovens</Text>
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
