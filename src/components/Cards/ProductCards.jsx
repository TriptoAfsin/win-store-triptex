import React from "react";
import { Box, Text, Button, Image } from "@chakra-ui/react";

function ProductCards({prod}) {
  return (
    <Box
      key={prod?.id}
      width={"186px"}
      border={"1px solid rgba(0, 0, 0, 0.13)"}
      display={"flex"}
      mr={5}
      flexDir={"column"}
      minHeight={"310px"}
      maxHeight={"310px"}
      textOverflow={"ellipsis"}
      alignItems={"center"}
      mb={5}
    >
      <Text color={"#034e53"} fontSize={16} mb={5} mt={1}>
        {prod?.title?.slice(0, 15)}..
      </Text>
      <Image src={prod?.image} alt={prod?.title} height={150} width={150} />
      <Text color={"#034e53"} fontSize={16} mb={5} mt={2}>
        RS {prod?.price}
      </Text>
      <Button
        bg={"#15adb7"}
        borderRadius={0}
        height={"35px"}
        color={"white"}
        mt={"auto"}
        width={"80%"}
        mb={5}
      >
        Add to cart
      </Button>
    </Box>
  );
}

export default ProductCards;
