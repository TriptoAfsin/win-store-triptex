import React from "react";
//Components
import { Box, Text, Input, useDisclosure } from "@chakra-ui/react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
} from "@chakra-ui/react";
import SearchModal from "../Modals/SearchModal";
//Icons
import { BsChevronDown } from "react-icons/bs";
import { FiSearch } from "react-icons/fi";

function SearchBar({ placeHolderText = "Search for products" }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent ml={2} mr={2}>
          <ModalBody>
            <SearchModal />
          </ModalBody>
        </ModalContent>
      </Modal>
      <Box
        borderRadius={6}
        bg="#ffffff"
        display={["none", "none", "flex", "flex"]}
        flexDir={"row"}
        alignItems={"center"}
        justifyContent={"space-evenly"}
        height={"39px"}
        width={["auto", "auto", "400px", "534px"]}
      >
        <Box
          borderRightColor="#aeaeae"
          borderRightWidth={1.8}
          borderRightStyle="solid"
          borderLeftRadius={5}
          mr={2}
          display={"flex"}
          flexDir={"row"}
          alignItems={"center"}
          justifyContent={"space-evenly"}
          height={"39px"}
        >
          <Text color="#aba3a3" ml={3} mr={2} minWidth={100} fontSize={15}>
            All Categories
          </Text>
          <Box mr={2}>
            <BsChevronDown color="#aba3a3" size={15} />
          </Box>
        </Box>
        <Input
          placeholder={placeHolderText}
          height={"38px"}
          textAlign={"left"}
          border={"none"}
          focusBorderColor="transparent"
          color={"black"}
          _placeholder={{ color: "#aeaeae" }}
          data-testid="search-bar-id"
        />
        <Box
          bg={"#b6b6b6"}
          borderRightRadius={5}
          height={"39px"}
          display={"flex"}
          flexDir={"row"}
          alignItems={"center"}
          justifyContent={"space-evenly"}
          padding={2}
        >
          <FiSearch color="#ffffff" size={24} />
        </Box>
      </Box>
      <Box
        borderRadius={"50%"}
        cursor={"pointer"}
        display={["flex", "flex", "none", "none"]}
        flexDir={"row"}
        alignItems={"center"}
        justifyContent={"space-evenly"}
        height={"auto"}
        ml={"auto"}
        padding={2}
        _hover={{
          background: "#0e3b3e",
        }}
        onClick={onOpen}
      >
        <FiSearch color="#ffffff" size={24} />
      </Box>
    </>
  );
}

export default SearchBar;
