import React from "react";
// components and media
import { BakeryItems } from "./reusable/BakeryItems";
import { ReactComponent as Cupcake } from "../media/cupcake-svg.svg";
import { ReactComponent as Toaster } from "../media/toaster-svg.svg";
import { ReactComponent as Oven } from "../media/oven-svg.svg";
import { ReactComponent as IndustrialOven } from "../media/industrial-oven-svg.svg";
import { ReactComponent as Friends } from "../media/friends-svg.svg";
import { ReactComponent as Chef } from "../media/chef-svg.svg";
import { ReactComponent as CupcakeGod } from "../media/cupcake-god-svg.svg";
// styles
import { Flex, Text, Button } from "@chakra-ui/core";
// import { useSpring, animated } from "react-spring";
// import { Keyframes } from "react-spring/renderprops";

function Bakery({ bakeCupcakes, user }) {
  // TEST: React-spring
  // const [resetScale, setResetScale] = useState(false);

  // TODO: react-spring on click for baking cupcakes
  // const props = useSpring({
  //   from: { transform: "scale(1, 1)" },
  //   to: { transform: "scale(1.5, 1.5)" },
  //   onRest: () => setResetScale((state) => !state),
  //   reset: resetScale,
  // });
  // const AnimatedCupcake = animated(Cupcake);

  const {
    cupcakes,
    toasters,
    ovens,
    industrialOvens,
    friends,
    chefs,
    cupcakeGods,
  } = user;

  return (
    <Flex direction="column" m="0 auto">
      <Flex direction="column" align="center" textAlign="center" mb="2rem">
        {/* CUPCAKE SVG, COUNT, AND BAKE TEXT */}
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
          {cupcakes.toLocaleString()}
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
        <BakeryItems Svg={Toaster} itemName="Toasters" itemAmount={toasters} />
        <BakeryItems Svg={Oven} itemName="Ovens" itemAmount={ovens} />
        <BakeryItems
          Svg={IndustrialOven}
          itemName="Industrial Ovens"
          itemAmount={industrialOvens}
        />
        <BakeryItems Svg={Friends} itemName="Friends" itemAmount={friends} />
        <BakeryItems Svg={Chef} itemName="Chefs" itemAmount={chefs} />
        <BakeryItems
          Svg={CupcakeGod}
          itemName="Cupcake Gods"
          itemAmount={cupcakeGods}
        />
      </Flex>
    </Flex>
  );
}

export default Bakery;
