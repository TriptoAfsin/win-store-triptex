import React, { useState } from "react";
import { Box, Text, Spinner } from "@chakra-ui/react";
import {
  useGetFakeCatsQuery,
  useGetFakeProductsByCatsQuery,
} from "@/redux/slices/apiSlice";
import enumFormatter from "@/utils/enumFormatter";
import ProductCards from "../Cards/ProductCards";
import SpinnerLoader from "../SpinnerLoader";

function BestDeals() {
  const [selectedCat, setSelectedCat] = useState("electronics");
  const { data: cats, isLoading, refetch: refetchCats } = useGetFakeCatsQuery();
  const {
    data: catProds,
    isLoading: isCatProdsLoading,
    refetch: refetchCatProducts,
  } = useGetFakeProductsByCatsQuery(selectedCat);
  return (
    <Box display={"flex"} flexDir={"column"} padding={[5, 5, 10, 15]} mt={20}>
      <Box display={"flex"} flexDir={"row"}>
        <Box display={"flex"} flexDir={"row"} mb={[5, 5, 15, 15]}>
          <Text color={"#00cad7"} fontSize={[20, 20, 24, 26]}>
            Best
          </Text>
          <Text color={"black"} ml={2} fontSize={[20, 20, 24, 26]}>
            Deals
          </Text>
        </Box>
        <Box
          display={"flex"}
          flexDir={"row"}
          mb={[5, 5, 15, 15]}
          ml={"auto"}
          mr={[0, 0, 5, 10]}
        >
          {cats?.map(cat => (
            <Text
              color={selectedCat === cat ? "#00cad7" : "black"}
              fontSize={[16, 16, 20, 20]}
              mr={[2, 5, 5, 5]}
              cursor={"pointer"}
              key={cat}
              textDecoration={selectedCat === cat ? "underline" : "none"}
              fontWeight={"semibold"}
              onClick={() => {
                setSelectedCat(cat);
                refetchCatProducts();
              }}
            >
              {enumFormatter(cat)}
            </Text>
          ))}
        </Box>
      </Box>
      <Box
        display={"flex"}
        flexDir={"column"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Box
          display={"flex"}
          flexDir={["column", "column", "row", "row"]}
          justifyContent={"center"}
          alignItems={"center"}
          mt={5}
        >
          {!isCatProdsLoading ? (
            catProds?.length > 0 ? (
              catProds?.map(prod => <ProductCards prod={prod} key={prod?.id} />)
            ) : (
              <Box
                display={"flex"}
                flexDir={"row"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <Text>No Products 😭</Text>
              </Box>
            )
          ) : (
            <SpinnerLoader />
          )}
        </Box>
      </Box>
    </Box>
  );
}

export default BestDeals;
