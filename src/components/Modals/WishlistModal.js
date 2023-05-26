import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";
import Image from "next/image";

function WishlistModal({
  wishlistArr = [
    {
      id: 1,
      title: "Super Cool TV",
      price: 20000,
      img: "/images/wish-1.png",
    },
    {
      id: 2,
      title: "Super Cool Laptop",
      price: 25000,
      img: "/images/wish-2.png",
    },
  ],
}) {
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
    >
      <Heading fontSize={24}>Wishlist</Heading>
      <Box display={"flex"} flexDir={"column"} alignItems={"center"} mt={5}>
        {wishlistArr?.map(item => (
          <Box
            key={item?.id}
            display={"flex"}
            flexDirection={"row"}
            justifyContent={"space-between"}
            alignItems={"center"}
            borderRadius={5}
            padding={2}
            width={["auto", "auto", "400px", "400px"]}
            boxShadow="2px 1px 60px 5px rgba(44, 44, 44, 0.3)"
            minH={50}
            mb={5}
          >
            <Box display={'flex'} alignItems={"center"}>
              <Image src={item?.img} width={50} height={50} alt={item?.title} />
              <Text ml={5}>{item?.title}</Text>
            </Box>
            <Text fontWeight={"bold"} mr={5}>
              RS {item?.price}
            </Text>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default WishlistModal;
