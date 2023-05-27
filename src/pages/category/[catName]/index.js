//SSG with Dynamic Parameters

import React from "react";
import { useRouter } from "next/router";
import { Box, Text, Heading, Spinner } from "@chakra-ui/react";
import enumFormatter from "@/utils/enumFormatter";
import ProductCards from "@/components/Cards/ProductCards";
import Head from "next/head";
import { BiConfused } from "react-icons/bi";
import {
  getFakeProductsByCats,
  getRunningQueriesThunk,
} from "@/redux/slices/apiSlice";
import { wrapper } from "@/store";

function CategoryPage({ catProducts }) {
  const router = useRouter();
  const { catName } = router.query;

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

  return (
    <>
      <Head>
        <title>Win Store - {enumFormatter(catName)}</title>
      </Head>
      <Box
        display={"flex"}
        flexDir={"column"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Heading mt={5} color={'#393939'}>
          {catProducts?.length > 0 ? enumFormatter(catName) : ""}
        </Heading>
        <Box
          display={"flex"}
          flexDir={["column", "column", "row", "row"]}
          justifyContent={"center"}
          alignItems={"center"}
          mt={[5,5,10,10]}
        >
          {catProducts ? (
            catProducts?.length > 0 ? (
              catProducts?.map(prod => (
                <ProductCards prod={prod} key={prod?.id} />
              ))
            ) : (
              <Box
                display={"flex"}
                flexDir={"column"}
                padding={[5, 5, 10, 10]}
                alignItems={["center", "center", "center", "center"]}
              >
                <Box
                  display={"flex"}
                  flexDir={"column"}
                  alignItems={["center", "center", "center", "center"]}
                  justifyContent={"center"}
                  mt={[5, 5, 10, 10]}
                >
                  <BiConfused color="#393939" size={"150px"} />
                  <Text mt={5} textAlign={"center"} fontSize={[20, 20, 26, 26]}>
                    No Products
                  </Text>
                </Box>
              </Box>
            )
          ) : (
            <Box
              display={"flex"}
              flexDir={"row"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Spinner color="#03484c" mt={20} size={"lg"} />
            </Box>
          )}
        </Box>
      </Box>
    </>
  );
}

export default CategoryPage;

export async function getStaticPaths() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_ROOT}/products/categories`
  );
  const data = await response.json();

  //looping all the paths
  const paths = data.map(cat => {
    return {
      params: {
        catName: `${cat}`,
      },
    };
  });

  //returning all the path routes
  return {
    paths: paths,
    fallback: true,
  };
}

export const getStaticProps = wrapper.getStaticProps(store => async context => {
  const name = context.params?.catName;
  const result = await store.dispatch(getFakeProductsByCats.initiate(name));
  await Promise.all(store.dispatch(getRunningQueriesThunk()));

  return {
    props: {
      catProducts: result?.data,
    },
  };
});
