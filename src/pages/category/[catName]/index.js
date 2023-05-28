import React from "react";
//Next imports
import { useRouter } from "next/router";
import Head from "next/head";
//Components
import { Box, Text, Heading, Spinner } from "@chakra-ui/react";
import { Grid, GridItem } from "@chakra-ui/react";
import ProductCards from "@/components/Cards/ProductCards";
//Icons
import { BiConfused } from "react-icons/bi";
//rtk query functions for getStaticProps
import {
  getFakeProductsByCats,
  getRunningQueriesThunk,
} from "@/redux/slices/apiSlice";
//next-redux wrapper for ssr/ssg
import { wrapper } from "@/store";
//util function to properly display strings
import enumFormatter from "@/utils/enumFormatter";

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
        bg={"#ffffff"}
        ml={[0, 0, 5, 0]}
      >
        <Heading mt={5} color={"#393939"}>
          {catProducts?.length > 0 ? enumFormatter(catName) : ""}
        </Heading>
        <Box
          display={"flex"}
          flexDir={"column"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Grid
            templateColumns={[
              "repeat(2, 1fr)",
              "repeat(2, 1fr)",
              "repeat(4, 1fr)",
              "repeat(4, 1fr)",
            ]}
            gap={[2, 2, 6, 6]}
          >
            {catProducts ? (
              catProducts?.length > 0 ? (
                catProducts?.map(prod => (
                  <GridItem w="100%" key={prod?.id} mt={[5, 5, 10, 10]}>
                    <ProductCards prod={prod} key={prod?.id} />
                  </GridItem>
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
                    <Text
                      mt={5}
                      textAlign={"center"}
                      fontSize={[20, 20, 26, 26]}
                    >
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
          </Grid>
        </Box>
        <Box
          display={"flex"}
          flexDir={["column", "column", "row", "row"]}
          justifyContent={"center"}
          alignItems={"center"}
          mt={[5, 5, 10, 10]}
        ></Box>
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
