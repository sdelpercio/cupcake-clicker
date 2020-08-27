import React from "react";
// styles
import { Flex, Text, Button, Box } from "@chakra-ui/core";

export function StoreItems({
  Svg,
  cupcakes,
  purchaseItem,
  itemAmount,
  itemDescOne,
  itemDescTwo,
  itemNameBold,
  itemFuncName,
  itemCost,
}) {
  return (
    <Flex
      direction={["column", "row"]}
      justify="space-between"
      align="center"
      w="100%"
      mb="3rem"
    >
      <Box textAlign="center" pb={["1rem", "0rem"]}>
        <Svg style={{ height: "75px", width: "75px" }} />
        <Text fontSize="1rem" fontFamily="'Sue Ellen Francisco', cursive">
          Current: {itemAmount}
        </Text>
      </Box>
      <Text
        textAlign="center"
        pb={["1rem", "0rem"]}
        fontSize="1.2rem"
        fontFamily="'Sue Ellen Francisco', cursive"
      >
        {itemDescOne} <b>{itemNameBold}</b>
        <br />
        {itemDescTwo}
      </Text>
      <Button
        isDisabled={cupcakes >= itemCost ? false : true}
        onClick={(e) => {
          purchaseItem(e, itemFuncName);
        }}
      >
        {`${itemCost} Cs`}
      </Button>
    </Flex>
  );
}
