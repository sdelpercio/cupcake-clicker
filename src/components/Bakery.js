import React, { useState } from "react";
// components and media
import { ReactComponent as Cupcake } from "../media/cupcake-svg.svg";
import { ReactComponent as Toaster } from "../media/toaster-svg.svg";
import { ReactComponent as Oven } from "../media/oven-svg.svg";
import { ReactComponent as IndustrialOven } from "../media/industrial-oven-svg.svg";
import { ReactComponent as Friends } from "../media/friends-svg.svg";
import { ReactComponent as Chef } from "../media/chef-svg.svg";
import { ReactComponent as CupcakeGod } from "../media/cupcake-god-svg.svg";
// styles
import { Flex, Text, Button, Box, Scale } from "@chakra-ui/core";
import { useSpring, animated } from "react-spring";
import { Keyframes } from "react-spring/renderprops";

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
  // const [resetScale, setResetScale] = useState(false);

  // TODO: react-spring on click for baking cupcakes
  // const props = useSpring({
  //   from: { transform: "scale(1, 1)" },
  //   to: { transform: "scale(1.5, 1.5)" },
  //   onRest: () => setResetScale((state) => !state),
  //   reset: resetScale,
  // });
  // const AnimatedCupcake = animated(Cupcake);

  return (
    <Flex direction="column" m="0 auto">
      <Flex direction="column" align="center" textAlign="center" mb="2rem">
        <Button
          as={Cupcake}
          onClick={bakeCupcakes}
          _hover={{ transform: "scale(1.2, 1.2)" }}
          _focus={{
            boxShadow:
              "0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)",
          }}
          bg="None"
          rounded="50%"
          cursor="pointer"
          h="200px"
          w="200px"
          mb="1rem"
        />
        <Text
          mb="0.5rem"
          fontSize="2rem"
          fontFamily="'Sue Ellen Francisco', cursive"
        >
          {cupcakes}
        </Text>

        <Text
          fontSize="2rem"
          fontFamily="'Sue Ellen Francisco', cursive"
          letterSpacing="5px"
        >
          ⬆ Bake! ⬆
        </Text>
      </Flex>
      <Flex
        direction={["column", "row"]}
        justify="space-between"
        align="center"
        w="100%"
        flexWrap="wrap"
        m="0 auto"
      >
        <Box textAlign="center" w={["100%", "50%", "33%"]} mb="1rem">
          <Toaster
            style={{
              height: "75px",
              width: "75px",
              margin: "0 auto",
            }}
          />
          <Text fontSize="1.2rem" fontFamily="'Sue Ellen Francisco', cursive">
            Toasters
          </Text>
          <Text fontSize="1rem" fontFamily="'Sue Ellen Francisco', cursive">
            {toasters}
          </Text>
        </Box>
        <Box textAlign="center" w={["100%", "50%", "33%"]} mb="1rem">
          <Oven style={{ height: "75px", width: "75px", margin: "0 auto" }} />
          <Text fontSize="1.2rem" fontFamily="'Sue Ellen Francisco', cursive">
            Ovens
          </Text>
          <Text fontSize="1rem" fontFamily="'Sue Ellen Francisco', cursive">
            {ovens}
          </Text>
        </Box>
        <Box textAlign="center" w={["100%", "50%", "33%"]} mb="1rem">
          <IndustrialOven
            style={{ height: "75px", width: "75px", margin: "0 auto" }}
          />
          <Text fontSize="1.2rem" fontFamily="'Sue Ellen Francisco', cursive">
            Industrial Ovens
          </Text>
          <Text fontSize="1rem" fontFamily="'Sue Ellen Francisco', cursive">
            {industrialOvens}
          </Text>
        </Box>
        <Box textAlign="center" w={["100%", "50%", "33%"]} mb="1rem">
          <Friends
            style={{ height: "75px", width: "75px", margin: "0 auto" }}
          />
          <Text fontSize="1.2rem" fontFamily="'Sue Ellen Francisco', cursive">
            Friends
          </Text>
          <Text fontSize="1rem" fontFamily="'Sue Ellen Francisco', cursive">
            {friends}
          </Text>
        </Box>
        <Box textAlign="center" w={["100%", "50%", "33%"]} mb="1rem">
          <Chef style={{ height: "75px", width: "75px", margin: "0 auto" }} />
          <Text fontSize="1.2rem" fontFamily="'Sue Ellen Francisco', cursive">
            Chefs
          </Text>
          <Text fontSize="1rem" fontFamily="'Sue Ellen Francisco', cursive">
            {chefs}
          </Text>
        </Box>
        <Box textAlign="center" w={["100%", "50%", "33%"]} mb="1rem">
          <CupcakeGod
            style={{ height: "75px", width: "75px", margin: "0 auto" }}
          />
          <Text fontSize="1.2rem" fontFamily="'Sue Ellen Francisco', cursive">
            Cupcake Gods
          </Text>
          <Text fontSize="1rem" fontFamily="'Sue Ellen Francisco', cursive">
            {cupcakeGods}
          </Text>
        </Box>
      </Flex>
    </Flex>
  );
}

export default Bakery;
