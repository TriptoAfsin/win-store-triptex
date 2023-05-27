//Next imports
import dynamic from "next/dynamic";
//Components
import { Box } from "@chakra-ui/react";
import Carousel from "@/components/Carousel";
import CatSlider from "@/components/CatSlider";
import NewArrival from "@/components/NewArrival";
import SpinnerLoader from "@/components/SpinnerLoader";

//next-redux wrapper for ssr/ssg
import { wrapper } from "@/store";
//rtk query functions for getStaticProps
import {
  getFakeProducts,
  getFakeCats,
  getRunningQueriesThunk,
} from "@/redux/slices/apiSlice";

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

export const getStaticProps = wrapper.getStaticProps(store => async () => {
  store.dispatch(getFakeProducts.initiate()); //to fetch products for seo
  store.dispatch(getFakeCats.initiate()); //to fetch cats for seo

  await Promise.all(store.dispatch(getRunningQueriesThunk()));

  return {
    props: {},
  };
});
