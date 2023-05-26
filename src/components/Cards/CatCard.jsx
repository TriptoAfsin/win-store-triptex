import React from "react";
import {
  Box,
  Text,
  Image,
} from "@chakra-ui/react";
import { useRouter } from "next/router";

function CatCard({item}) {
    const router = useRouter();
  return (
    <Box
      key={item?.id}
      position="relative"
      cursor={"pointer"}
      height={"200px"}
      width={"272px"}
      ml={[14,14,20,20]}
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      backgroundSize={"-moz-initial"}
      backgroundImage={`url(${item?.img})`}
      border={"1px solid white"}
      onClick={() =>
        router.push(`/category/${item?.title?.toLocaleLowerCase()}`)
      }
    >
      <Image
        src="/images/poly.png"
        position={"absolute"}
        mt={"130px"}
        ml={["-13px", "-13px", "-13px", "-13px"]}
        alt={item?.title}
      />
      <Box
        display={"flex"}
        flexDir={"row"}
        position="absolute"
        background={"rgba(253, 248, 248, 0.8)"}
        width={270}
        height={"49px"}
        alignItems={"center"}
        boxShadow={"0px 1px 7px rgba(0, 0, 0, 0.57);"}
        mt={"140px"}
        ml={["-13px", "-13px", "-13px", "-13px"]}
      >
        <Text fontSize={[18, 18, 22, 22]} fontWeight={"semibold"} ml={2}>
          {item?.title}
        </Text>
        <Text
          fontSize={[18, 18, 22, 22]}
          fontWeight={"semibold"}
          color={"#14b1f0"}
          ml={5}
        >
          Shop
        </Text>
      </Box>
    </Box>
  );
}

export default CatCard;
