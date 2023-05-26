import React from "react";
import { Flex, Box, Text } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import SearchBar from "../Searchbar";
import { GiHamburgerMenu } from "react-icons/gi";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  useDisclosure,
} from "@chakra-ui/react";
import WishlistModal from "../Modals/WishlistModal";
import CartModal from "../Modals/CartModal";
import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import { useSelector } from 'react-redux';

function Header() {
  const {
    isOpen: isCartOpen,
    onOpen: onCartOpen,
    onClose: onCartClose,
  } = useDisclosure();
  const {
    isOpen: isWishlistOpen,
    onOpen: onWishlistOpen,
    onClose: onWishlistClose,
  } = useDisclosure();
  const cartLength = useSelector(
    state => state?.globalUiSlice?.cartLength,
  );
  return (
    <>
      <Modal isOpen={isWishlistOpen} onClose={onWishlistClose}>
        <ModalOverlay />
        <ModalContent ml={2} mr={2}>
          <ModalBody>
            <WishlistModal />
          </ModalBody>
        </ModalContent>
      </Modal>
      <Modal isOpen={isCartOpen} onClose={onCartClose}>
        <ModalOverlay />
        <ModalContent ml={2} mr={2}>
          <ModalBody>
            <CartModal />
          </ModalBody>
        </ModalContent>
      </Modal>
      <Flex
        as="header"
        position="sticky"
        w="100%"
        bg={"#03484d"}
        color={"white"}
        flexDir={"row"}
        height={"68px"}
        alignItems={"center"}
      >
        <Box
          ml={[2, 2, 10, 10]}
          cursor={"pointer"}
          width={[100, 100, 132, 132]}
          height={"auto"}
          mr={16}
          display={"block"}
        >
          <Link href="/">
            <Image
              src="/images/header-logo.png"
              width={132}
              height={48}
              alt="logo"
            />
          </Link>
        </Box>
        <SearchBar />
        <Box
          display={"flex"}
          flexDir={"row"}
          alignItems={"center"}
          ml={"auto"}
          mr={[0, 0, "153", "153"]}
        >
          <Box mt={1} mb={1} display={["none", "none", "none", "block"]}>
            <Text fontSize={11}>Calls Us Now</Text>
            <Box display={"flex"} height={"auto"}>
              <Image
                src="/images/headphone.png"
                width={20}
                height={20}
                alt="phone-logo"
              />
              <Link href="tel:+011 5827918">
                <Text
                  fontSize={14}
                  _hover={{ textDecoration: "underline" }}
                  ml={2}
                >
                  +011 5827918
                </Text>
              </Link>
            </Box>
            <Link href="/sign-in">
              <Text
                fontSize={14}
                fontWeight={500}
                _hover={{ textDecoration: "underline" }}
              >
                Sign In
              </Text>
            </Link>
          </Box>
          <Box display={"flex"} height={"auto"} alignItems={"center"}>
            <Box ml={5} display={["none", "none", "block", "block"]}>
              <Link href="/profile">
                <Image
                  src="/images/user-icon.png"
                  width={20}
                  height={20}
                  alt="phone-logo"
                />
              </Link>
            </Box>
            <Box
              ml={5}
              cursor={"pointer"}
              onClick={onWishlistOpen}
              display={["none", "none", "block", "block"]}
            >
              <Image
                src="/images/heart-icon.png"
                width={20}
                height={20}
                alt="wishlist"
              />
            </Box>
            <Box
              ml={[0, 0, 5, 5]}
              mr={[5, 5, 0, 0]}
              cursor={"pointer"}
              display={"flex"}
              flexDir={"row"}
              alignItems={"center"}
              fontWeight={"light"}
              onClick={onCartOpen}
            >
              <Box>
              <Text color={'#fdde3b'} ml={2} display={cartLength > 0 ? 'block' : 'none'}>{cartLength}</Text>
                <Image
                  src="/images/cart-empty.png"
                  width={20}
                  height={100}
                  alt="cart-icon"
                />
              </Box>
              <Text ml={2}>Cart</Text>
            </Box>
          </Box>
        </Box>
        <Box
          display={["block", "block", "none", "none"]}
          mr={5}
          color={"black"}
          mt={2}
        >
          <Menu>
            <MenuButton>
              <GiHamburgerMenu size={20} color="white" />
            </MenuButton>
            <MenuList>
              <MenuItem>Profile</MenuItem>
              <MenuItem onClick={onWishlistOpen}>Wishlist</MenuItem>
            </MenuList>
          </Menu>
        </Box>
      </Flex>
    </>
  );
}

export default Header;
