import { Container, Flex, HStack, Text, useColorMode } from "@chakra-ui/react";
import {PlusSquareIcon} from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import {IoMoon} from "react-icons/io5"; 
import {LuSun} from "react-icons/lu";
import ButtonComponent from "../Button/ButtonComponent";

function Navbar() {
    const {colorMode, toggleColorMode} = useColorMode();
  return (
    <Container maxW={"container.lg"} px={4}>
      <Flex
        alignItems={"center"}
        justifyContent={"space-between"}
        flexDir={{ base: "column", sm: "row" }}
        p={4}
      >
        <Text
          fontSize={{ base: "22", sm: "28" }}
          fontWeight={"bold"}
          textTransform={"uppercase"}
          textAlign={"center"}
          bgClip={"text"}
          bgGradient={"linear(to-r, cyan.400, blue.500 )"}
        >
            <Link to="/">Product Store 🛒</Link>
        </Text>
      <HStack spacing={2} alignItems={"center"}>
      <Link to={"/create"}>
      <ButtonComponent btnIcon={<PlusSquareIcon />}/>
      </Link>
      <ButtonComponent onClickHandler={toggleColorMode} btnIcon={colorMode === "light" ? <IoMoon size="20" /> : <LuSun size="20" />} />
      </HStack>
      </Flex>
    </Container>
  );
}

export default Navbar;
