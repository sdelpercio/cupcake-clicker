import React from "react";
// styles
import { Text, Box } from "@chakra-ui/core";

export function BakeryItems({ Svg, itemName, itemAmount }) {
  return (
    <Box textAlign="center" w={["100%", "50%", "33%"]} mb="1rem">
      <Svg
        style={{
          height: "75px",
          width: "75px",
          margin: "0 auto",
        }}
      />
      <Text fontSize="1.2rem" fontFamily="'Sue Ellen Francisco', cursive">
        {itemName}
      </Text>
      <Text fontSize="1rem" fontFamily="'Sue Ellen Francisco', cursive">
        {itemAmount}
      </Text>
    </Box>
  );
}
