//SSG with Dynamic Parameters

import React from "react";
import { useRouter } from "next/router";

function CategoryPage({ catProducts }) {
  const router = useRouter();
  const { catName } = router.query;

  if (router.isFallback) {
    //this will be shown on ID above 100, but for a bit,but fetch the actual post in the meantime
    return <h1>⏳ Loading ....</h1>;
  }

  return (
    <>
      <h2>{catName}</h2>
      {catProducts?.map(prod => (
        <div key={prod?.id}>
          <p>{prod?.title}</p>
        </div>
      ))}
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
