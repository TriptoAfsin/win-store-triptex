import { Box, Heading, Button } from "@chakra-ui/react";
import { useGetFakeCatsQuery } from "@/redux/slices/apiSlice";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CategoryBar from "@/components/CategoryBar";
import Carousel from "@/components/Carousel";
import CatSlider from "@/components/CatSlider";
import NewArrival from "@/components/NewArrival";

export default function Home() {
  const {
    data: fakeCats,
    isLoading,
    refetch: refetchCats,
  } = useGetFakeCatsQuery();
  return (
    <>
    <Box>
      <Carousel />
      <CatSlider />
      <NewArrival />
    </Box>
    </>
  );
}
