import React from "react";
import { Box, Heading, Text, Image, Button } from "@chakra-ui/react";
import { removeWishlistItem } from "@/redux/slices/globalUiSlice";
import { useDispatch, useSelector } from "react-redux";
import { AiFillDelete } from "react-icons/ai";
import { BsFillHeartbreakFill } from "react-icons/bs";
import Link from "next/link";

function WishlistModal({}) {
  const dispatch = useDispatch();
  const wishListItems = useSelector(
    state => state?.globalUiSlice?.wishListItems
  );
  return (
    <Box
      borderRadius={6}
      bg="#ffffff"
      display={"flex"}
      flexDir={"column"}
      alignItems={"center"}
      width={["auto", "auto", "400px", "400px"]}
      height={["400px", "400px", "500px", "500px"]}
      padding={2}
      color={"#3b3b3b"}
      overflowY={"scroll"}
      overflowX={"hidden"}
    >
      <Heading fontSize={24}>Wishlist</Heading>
      <Box display={"flex"} flexDir={"column"} alignItems={"center"} mt={5}>
        {wishListItems?.length > 0 ? (
          wishListItems?.map(item => (
            <Box
              key={item?.id}
              display={"flex"}
              flexDirection={"row"}
              justifyContent={"space-between"}
              alignItems={"center"}
              borderRadius={5}
              padding={2}
              width={["auto", "auto", "380px", "380px"]}
              border={"1px solid #e3e6e4"}
              minH={50}
              mb={5}
            >
              <Link href={`/products/${item?.id}`}>
                <Box display={"flex"} alignItems={"center"}>
                  <Image
                    src={item?.image}
                    width={50}
                    height={50}
                    alt={item?.title}
                  />
                  <Text ml={5}>{item?.title?.slice(0, 18)}..</Text>
                </Box>
              </Link>
              <Text fontWeight={"bold"} mr={5}>
                RS {item?.price}
              </Text>
              <Button
                onClick={() => dispatch(removeWishlistItem(item?.id))}
                bg={"#fe4400"}
                height={"45px"}
                _hover={{
                  background: "#a51e25",
                }}
              >
                <AiFillDelete size={20} color={"white"} />
              </Button>
            </Box>
          ))
        ) : (
          <Box
            mt={5}
            color={"#b6b6b6"}
            display={"flex"}
            flexDir={"column"}
            alignItems={"center"}
          >
            <BsFillHeartbreakFill size={50} />
            <Text mt={5}>Your wishlist is empty </Text>
          </Box>
        )}
      </Box>
    </Box>
  );
}

export default WishlistModal;
