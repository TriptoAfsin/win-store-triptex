//SSG with Dynamic Parameters

import React from "react";
import { useRouter } from "next/router";
import { Box, Text, Heading, Spinner } from "@chakra-ui/react";
import enumFormatter from "@/utils/enumFormatter";
import ProductCards from "@/components/Cards/ProductCards";

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
    <Box
      display={"flex"}
      flexDir={"column"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Heading mt={5}>{enumFormatter(catName)}</Heading>
      <Box
        display={"flex"}
        flexDir={["column", "column", "row", "row"]}
        justifyContent={"center"}
        alignItems={"center"}
        mt={5}
      >
        {catProducts ? (
          catProducts?.length > 0 ? (
            catProducts?.map(prod => (
              <ProductCards prod={prod} key={prod?.id} />
            ))
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

export async function getStaticProps(context) {
  const { params } = context;
  console.log(params);

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_ROOT}/products/category/${params.catName}`
  );
  const data = await response.json();

  return {
    props: {
      catProducts: data,
    },
  };
}
