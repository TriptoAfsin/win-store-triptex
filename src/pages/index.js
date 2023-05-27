import { Box } from "@chakra-ui/react";
import Carousel from "@/components/Carousel";
import CatSlider from "@/components/CatSlider";
import NewArrival from "@/components/NewArrival";
import dynamic from "next/dynamic";
import SpinnerLoader from "@/components/SpinnerLoader";

const BestDeals = dynamic(() => import("@/components/BestDeals"), {
  loading: () => <SpinnerLoader />,
});

export default function Home() {
  return (
    <>
      <Box>
        <Carousel />
        <CatSlider />
        <NewArrival />
        <BestDeals />
      </Box>
    </>
  );
}

export async function getStaticProps() {
  //to fetch cats for seo
  const catResponse = await fetch(
    `${process.env.NEXT_PUBLIC_API_ROOT}/products/categories`
  );
  const catsData = await catResponse.json();

  //ro fetch products for seo
  const prodResponse = await fetch(
    `${process.env.NEXT_PUBLIC_API_ROOT}/products`
  );
  const productsData = await prodResponse.json();

  return {
    props: {
      cats: catsData,
      products: productsData?.slice(0, 10),
    },
  };
}
