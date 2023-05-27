import React from "react";
import { Box, Heading, Text, Image, Button } from "@chakra-ui/react";
import { removeCartItem } from "@/redux/slices/globalUiSlice";
import { useDispatch, useSelector } from "react-redux";
import { AiFillDelete } from "react-icons/ai";
import {BsFillCartXFill} from 'react-icons/bs'

function CartModal({}) {
  const cartItems = useSelector(state => state?.globalUiSlice?.cartItems);
  const dispatch = useDispatch();
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
      <Heading fontSize={24}>Cart</Heading>
      <Box display={"flex"} flexDir={"column"} alignItems={"center"} mt={5}>
        {cartItems?.length > 0 ? (
          cartItems?.map(item => (
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
              <Box display={"flex"} alignItems={"center"}>
                <Image
                  src={item?.image}
                  width={50}
                  height={50}
                  alt={item?.title}
                />
                <Text ml={5}>{item?.title?.slice(0, 18)}..</Text>
              </Box>
              <Text fontWeight={"bold"} mr={5}>
                RS {item?.price}
              </Text>
              <Button
                onClick={() => dispatch(removeCartItem(item?.id))}
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
          <Box mt={5} color={'#b6b6b6'} display={'flex'} flexDir={'column'} alignItems={'center'}>
            <BsFillCartXFill size={50}/>
            <Text mt={5}>Your cart is empty </Text>
          </Box>
        )}
      </Box>
    </Box>
  );
}

export default CartModal;
