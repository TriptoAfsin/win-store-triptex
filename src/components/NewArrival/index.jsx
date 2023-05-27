//SSG with Dynamic Parameters

import React, {useState} from "react";
import { useRouter } from "next/router";
import {
  Box,
  Text,
  Spinner,
  useBreakpointValue,
} from "@chakra-ui/react";
import ProductCards from "@/components/Cards/ProductCards";
import Slider from "react-slick";
import { useGetFakeProductsQuery } from "@/redux/slices/apiSlice";

const settings = {
  dots: true,
  arrows: false,
  infinite: true,
  autoplay: false,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 6,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1.5,
        arrows: false,
        dots: true,
      },
    },
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 3.5,
        arrows: false,
        dots: false,
      },
    },
  ],
};

function NewArrival() {
  const top = useBreakpointValue({ base: "90%", md: "50%" });
  const side = useBreakpointValue({ base: "30%", md: "10px" });
  const [slider, setSlider] = useState(null);
  const [count, setCount] = useState(1);
  const router = useRouter();

  const {
    data: products,
    isLoading,
    refetch: refetchProducts,
  } = useGetFakeProductsQuery();

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
      <Box position={"relative"} mt={[5, 5, 15, 15]} px={[5,5,10,10]}>
        <Box display={'flex'} flexDir={'row'} mb={[5, 5, 15, 15]}>
          <Text color={'#00cad7'} fontSize={[20,20,24,26]}>New</Text>
          <Text color={'black'} ml={1} fontSize={[20,20,24,26]}>Arrivals</Text>
        </Box>
        {isLoading ? (
          <Box
            display={"flex"}
            flexDir={"row"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Spinner color="#03484c" mt={20} size={"lg"} />
          </Box>
        ) : (
          <>
            {" "}

            {/* Slider */}
            <Slider {...settings} ref={slider => setSlider(slider)}>
              {products ? (
                products?.length > 0 ? (
                  products
                    ?.slice(0, 10)
                    ?.map(prod => <ProductCards prod={prod} key={prod?.id} />)
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
            </Slider>
          </>
        )}
      </Box>
    </>
  );
}

export default NewArrival;
