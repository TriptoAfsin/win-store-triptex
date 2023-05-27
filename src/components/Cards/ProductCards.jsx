import React from "react";
import { Box, Text, Button, Image, useToast } from "@chakra-ui/react";
import Link from "next/link";
import { addCartItem } from "@/redux/slices/globalUiSlice";
import { useDispatch, useSelector } from "react-redux";

function ProductCards({ prod }) {
  const dispatch = useDispatch();
  const toast = useToast();
  const cartItems = useSelector(state => state?.globalUiSlice?.cartItems);
  const handleAddToCart = () => {
    if (!cartItems?.some(item => item?.id === prod?.id)) {
      dispatch(addCartItem(prod));
      toast({
        title: "Product added to cart !",
        status: "info",
        duration: 2000,
        isClosable: true,
        position: "top-right",
      });
    } else {
      toast({
        title: "Product already in cart 😅",
        description: "This product is already in your cart",
        status: "warning",
        duration: 4000,
        isClosable: true,
        position: "top-right",
      });
    }
  };
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
      <Link href={`/products/${prod?.id}`}>
        <Text color={"#034e53"} fontSize={16} mb={5} mt={2}>
          {prod?.title?.slice(0, 15)}..
        </Text>

        <Image src={prod?.image} alt={prod?.title} height={130} width={130} />
        <Text color={"#034e53"} fontSize={16} mb={5} mt={4} textAlign={'center'}>
          RS {prod?.price}
        </Text>
      </Link>
      <Button
        bg={
          cartItems?.some(item => item?.id === prod?.id) ? "#e2e8f0" : "#15adb7"
        }
        borderRadius={0}
        height={"35px"}
        color={"white"}
        mt={"auto"}
        width={"90%"}
        mb={5}
        fontWeight={400}
        minH={"35px"}
        id="add-to-cart"
        onClick={handleAddToCart}
      >
        Add to cart
      </Button>
    </Box>
  );
}

export default ProductCards;
