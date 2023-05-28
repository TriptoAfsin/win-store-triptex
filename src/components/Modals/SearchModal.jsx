import React from "react";
//Components
import { Box, Input } from "@chakra-ui/react";
//Icons
import { FiSearch } from "react-icons/fi";

function SearchModal({ placeHolderText = "Search for products" }) {
  return (
    <Box
      borderRadius={6}
      bg="#ffffff"
      display={"flex"}
      flexDir={"row"}
      alignItems={"center"}
      justifyContent={"space-evenly"}
      height={"39px"}
      width={["auto", "auto", "400px", "534px"]}
    >
      <Input
        placeholder={placeHolderText}
        height={"38px"}
        textAlign={"left"}
        border={"none"}
        focusBorderColor="transparent"
        color={"black"}
      />
      <Box
        borderRightRadius={5}
        height={"39px"}
        display={"flex"}
        flexDir={"row"}
        alignItems={"center"}
        justifyContent={"space-evenly"}
        padding={2}
      >
        <FiSearch color="#b6b6b6" size={24} />
      </Box>
    </Box>
  );
}

export default SearchModal;
