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
