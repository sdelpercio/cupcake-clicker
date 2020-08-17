import React from "react";
// components & media
import { ReactComponent as Toaster } from "../media/toaster-svg.svg";
import { ReactComponent as Oven } from "../media/oven-svg.svg";
import { ReactComponent as IndustrialOven } from "../media/industrial-oven-svg.svg";
import { ReactComponent as Friends } from "../media/friends-svg.svg";
import { ReactComponent as Chef } from "../media/chef-svg.svg";
import { ReactComponent as CupcakeGod } from "../media/cupcake-god-svg.svg";
// styles
import { Flex, Text, Button, Box } from "@chakra-ui/core";

function Store({
  purchaseItem,
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
    <Flex
      direction="column"
      justify="space-between"
      align="center"
      w={["90%", "75%", "75%", "50%"]}
      m="0 auto"
    >
      {/* TOASTER */}
      <Flex
        direction={["column", "row"]}
        justify="space-between"
        align="center"
        w="100%"
        mb="3rem"
      >
        <Box textAlign="center" pb={["1rem", "0rem"]}>
          <Toaster style={{ height: "75px", width: "75px" }} />
          <Text>Current: {toasters}</Text>
        </Box>
        <Text textAlign="center" pb={["1rem", "0rem"]}>
          Increase the amount of cupcakes on each bake with a Toaster!
          <br />
          Adds +5 cupcakes baked on each press!
        </Text>
        <Button
          onClick={(e) => {
            e.preventDefault();
            setToasters(toasters + 1);
          }}
        >
          Purchase
        </Button>
      </Flex>
      {/* OVEN */}
      <Flex
        direction={["column", "row"]}
        justify="space-between"
        align="center"
        w="100%"
        mb="3rem"
      >
        <Box textAlign="center" pb={["1rem", "0rem"]}>
          <Oven style={{ height: "75px", width: "75px" }} />
          <Text>Current: {ovens}</Text>
        </Box>
        <Text textAlign="center" pb={["1rem", "0rem"]}>
          Increase the amount of cupcakes on each bake with an Oven!
          <br />
          Adds +10 cupcakes baked on each press!
        </Text>
        <Button
          onClick={(e) => {
            e.preventDefault();
            setOvens(ovens + 1);
          }}
        ></Button>
      </Flex>
      {/* INDUSTRIAL OVEN */}
      <Flex
        direction={["column", "row"]}
        justify="space-between"
        align="center"
        w="100%"
        mb="3rem"
      >
        <Box textAlign="center" pb={["1rem", "0rem"]}>
          <IndustrialOven style={{ height: "75px", width: "75px" }} />
          <Text>Current: {industrialOvens}</Text>
        </Box>
        <Text textAlign="center" pb={["1rem", "0rem"]}>
          Increase the amount of cupcakes on each bake with an Industrial Oven!
          <br />
          Adds +100 cupcakes baked on each press!
        </Text>
        <Button
          onClick={(e) => {
            e.preventDefault();
            setIndustrialOvens(industrialOvens + 1);
          }}
        >
          Purchase
        </Button>
      </Flex>
      {/* FRIENDS */}
      <Flex
        direction={["column", "row"]}
        justify="space-between"
        align="center"
        w="100%"
        mb="3rem"
      >
        <Box textAlign="center" pb={["1rem", "0rem"]}>
          <Friends style={{ height: "75px", width: "75px" }} />
          <Text>Current: {friends}</Text>
        </Box>
        <Text textAlign="center" pb={["1rem", "0rem"]}>
          Increase the amount of cupcakes you bake by recruiting a Friend!
          <br />
          Adds +5 cupcakes baked every second!
        </Text>
        <Button
          onClick={(e) => {
            e.preventDefault();
            setFriends(friends + 1);
          }}
        >
          Purchase
        </Button>
      </Flex>
      {/* CHEF */}
      <Flex
        direction={["column", "row"]}
        justify="space-between"
        align="center"
        w="100%"
        mb="3rem"
      >
        <Box textAlign="center" pb={["1rem", "0rem"]}>
          <Chef style={{ height: "75px", width: "75px" }} />
          <Text>Current: {chefs}</Text>
        </Box>
        <Text textAlign="center" pb={["1rem", "0rem"]}>
          Increase the amount of cupcakes you bake by recruiting a Chef!
          <br />
          Adds +10 cupcakes baked every second!
        </Text>
        <Button
          onClick={(e) => {
            e.preventDefault();
            setChefs(chefs + 1);
          }}
        >
          Purchase
        </Button>
      </Flex>
      {/* CUPCAKE GOD */}
      <Flex
        direction={["column", "row"]}
        justify="space-between"
        align="center"
        w="100%"
        mb="3rem"
      >
        <Box textAlign="center" pb={["1rem", "0rem"]}>
          <CupcakeGod style={{ height: "75px", width: "75px" }} />
          <Text>Current: {cupcakeGods}</Text>
        </Box>
        <Text textAlign="center" pb={["1rem", "0rem"]}>
          Increase the amount of cupcakes you bake by recruiting a CUPCAKE GOD!
          <br />
          Adds +100 cupcakes baked every second!
        </Text>
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
