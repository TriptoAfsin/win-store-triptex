//SSG with Dynamic Parameters

import React from "react";
import { useRouter } from "next/router";
import { Box, Text, Button, Image, Spinner, useToast  } from "@chakra-ui/react";
import { addCartItem, addWishlistItem } from "@/redux/slices/globalUiSlice";
import { useDispatch, useSelector } from "react-redux";
import {AiFillHeart} from 'react-icons/ai'

function ProductDetails({ product }) {
  const router = useRouter();
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state?.globalUiSlice?.cartItems);
  const wishListItems = useSelector(state => state?.globalUiSlice?.wishListItems);
  const toast = useToast();

  if (router.isFallback) {
    //this will be shown on ID above 100, but for a bit,but fetch the actual post in the meantime
    return (
      <Box
        display={"flex"}
        flexDir={"row"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Spinner color="#03484c" mt={20} size={"lg"} />
      </Box>
    );
  }

  const handleAddToWishList = () => {
    if(!wishListItems?.some( item => item?.id === product?.id)){
      dispatch(addWishlistItem(product))
    }
    else{
      toast({
        title: 'Already in wishlist 😅',
        description: "This product is already in your wishlist",
        status: 'warning',
        duration: 4000,
        isClosable: true,
        position: 'top-right'
      })
    }
  }

  const handleAddToCart = () => {
    if(!cartItems?.some( item => item?.id === product?.id)){
      dispatch(addCartItem(product))
    }
    else{
      toast({
        title: 'Product already in cart 😅',
        description: "This product is already in your cart",
        status: 'warning',
        duration: 4000,
        isClosable: true,
        position: 'top-right'
      })
    }
  }

  return (
    <Box display={"flex"} flexDir={"column"} alignItems={"center"} padding={5}>
      <Box
        display={"flex"}
        flexDir={["column", "column", "row", "row"]}
        alignItems={"center"}
      >
        <Image src={product?.image} alt={product?.title} width={200} />
        <Box display={"flex"} flexDir={"column"} ml={[0, 0, 10, 10]} mt={[5,5,0,0]}>
          <Text fontWeight={"semibold"} fontSize={[20, 20, 24, 24]} textAlign={['center', 'center', 'left', 'left']}>
            {product?.title}
          </Text>
          <Text mt={5} maxW={["100%", "100%", "250px", "350px"]} textAlign={['center', 'center', 'left', 'left']}>
            {product?.description}
          </Text>
          <Box display={'flex'} flexDir={['column','column','row','row']} alignItems={'center'} mt={[5,5,0,0]}>
            <Button
              bg={cartItems?.some( item => item?.id === product?.id) ? "#e2e8f0" : "#15adb7"}
              borderRadius={0}
              height={"50px"}
              color={"white"}
              mt={[5, 5, 8, 10]}
              width={["80vw", "80vw", 200, 250]}
              mb={5}
              fontWeight={400}
              mr={[0,0,5,5]}
              minH={"50px"}
              onClick={handleAddToCart}
            >
              Add to cart
            </Button>
            <Button
              bg={wishListItems?.some( item => item?.id === product?.id) ? "#e2e8f0" : "#de5147"}
              borderRadius={0}
              height={"50px"}
              color={"white"}
              mt={[5, 5, 8, 10]}
              width={["80vw", "80vw", 200, 250]}
              mb={5}
              fontWeight={400}
              mr={[0,0,5,5]}
              minH={"50px"}
              onClick={handleAddToWishList}
            >
              <AiFillHeart color="white" size={20}/>
              <Text ml={2}>Add to Wishlist</Text>
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default ProductDetails;

export async function getStaticPaths() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_ROOT}/products`);
  const data = await response.json();

  //looping all the paths
  const paths = data.map(product => {
    return {
      params: {
        id: `${product?.id}`,
      },
    };
  });

  //returning all the path routes
  return {
    paths: paths,
    fallback: true,
  };
}

export async function getStaticProps(context) {
  const { params } = context;
  console.log(params);

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_ROOT}/products/${params.id}`
  );
  const data = await response.json();

  return {
    props: {
      product: data,
    },
  };
}
