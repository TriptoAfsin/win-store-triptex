//SSG with Dynamic Parameters

import React from "react";
import { useRouter } from "next/router";

function ProductDetails({ product }) {
  const router = useRouter();

  if (router.isFallback) {
    //this will be shown on ID above 100, but for a bit,but fetch the actual post in the meantime
    return <h1>⏳ Loading ....</h1>;
  }

  return (
    <>
      <h2>
        {product.id}. {product.title}
      </h2>
      <p>{product.description}</p>
    </>
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
