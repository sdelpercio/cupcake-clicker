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
}) {
  return (
    <Flex
      direction="column"
      justify="space-between"
      align="center"
      w={["90%", "90%", "80%", "80%", "50%"]}
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
          Increase the amount of cupcakes on each bake with a <b>Toaster!</b>
          <br />
          Adds +5 cupcakes baked on each press!
        </Text>
        <Button
          isDisabled={cupcakes >= toastersCost ? false : true}
          onClick={(e) => {
            purchaseItem(e, "toasters");
          }}
        >
          {`${toastersCost} Cs`}
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
          Increase the amount of cupcakes on each bake with an <b>Oven!</b>
          <br />
          Adds +10 cupcakes baked on each press!
        </Text>
        <Button
          isDisabled={cupcakes >= ovensCost ? false : true}
          onClick={(e) => {
            purchaseItem(e, "ovens");
          }}
        >
          {`${ovensCost} Cs`}
        </Button>
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
          Increase the amount of cupcakes on each bake with an{" "}
          <b>Industrial Oven!</b>
          <br />
          Adds +100 cupcakes baked on each press!
        </Text>
        <Button
          isDisabled={cupcakes >= industrialOvensCost ? false : true}
          onClick={(e) => {
            purchaseItem(e, "industrialOvens");
          }}
        >
          {`${industrialOvensCost} Cs`}
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
          Increase the amount of cupcakes you bake by recruiting a{" "}
          <b>Friend!</b>
          <br />
          Adds +5 cupcakes baked every second!
        </Text>
        <Button
          isDisabled={cupcakes >= friendsCost ? false : true}
          onClick={(e) => {
            purchaseItem(e, "friends");
          }}
        >
          {`${friendsCost} Cs`}
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
          Increase the amount of cupcakes you bake by recruiting a <b>Chef!</b>
          <br />
          Adds +10 cupcakes baked every second!
        </Text>
        <Button
          isDisabled={cupcakes >= chefsCost ? false : true}
          onClick={(e) => {
            purchaseItem(e, "chefs");
          }}
        >
          {`${chefsCost} Cs`}
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
          Increase the amount of cupcakes you bake by recruiting a{" "}
          <b>CUPCAKE GOD!</b>
          <br />
          Adds +100 cupcakes baked every second!
        </Text>
        <Button
          isDisabled={cupcakes >= cupcakeGodsCost ? false : true}
          onClick={(e) => {
            purchaseItem(e, "cupcakeGods");
          }}
        >
          {`${cupcakeGodsCost} Cs`}
        </Button>
      </Flex>
    </Flex>
  );
}

export default Store;
