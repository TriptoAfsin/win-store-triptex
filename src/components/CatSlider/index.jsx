import React from "react";
import {
  Box,
  IconButton,
  useBreakpointValue,
  Text,
  Spinner,
  Image,
} from "@chakra-ui/react";
// Here we have used react-icons package for the icons
// And react-slick as our Carousel Lib
import Slider from "react-slick";
import { useGetFakeCatsQuery } from "@/redux/slices/apiSlice";
import enumFormatter from "@/utils/enumFormatter";
import CatCard from "../Cards/CatCard";

// Settings for the slider
const settings = {
  dots: false,
  arrows: false,
  infinite: true,
  autoplay: false,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        arrows: false,
        dots: true,
      },
    },
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 2,
        arrows: false,
        dots: false,
      },
    },
  ],
};

export default function CatSlider() {
  // As we have used custom buttons, we need a reference variable to
  // change the state
  const [slider, setSlider] = React.useState(null);
  const [count, setCount] = React.useState(1);
  const {
    data: fakeCats,
    isLoading,
    refetch: refetchCats,
  } = useGetFakeCatsQuery();

  const modifiedCats = [
    {
      id: 1,
      title: !isLoading && fakeCats[0] ? enumFormatter(fakeCats[0]) : null,
      img: "/images/cats/electronics.png",
    },
    {
      id: 2,
      title: !isLoading && fakeCats[1] ? enumFormatter(fakeCats[1]) : null,
      img: "/images/cats/Fashion.png",
    },
    {
      id: 3,
      title: !isLoading && fakeCats[2] ? enumFormatter(fakeCats[2]) : null,
      img: "/images/cats/Fashion.png",
    },
    {
      id: 4,
      title: !isLoading && fakeCats[3] ? enumFormatter(fakeCats[3]) : null,
      img: "/images/cats/babies.png",
    },
    {
      id: 4,
      title: enumFormatter("Appliances"), //added a fake cat to show that the slider is working
      img: "/images/cats/appliances.png",
    },
  ];

  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes
  const top = useBreakpointValue({ base: "90%", md: "50%" });
  const side = useBreakpointValue({ base: "30%", md: "10px" });

  // These are the images used in the slide
  const cards = [
    "/images/hero-1.png",
    "/images/hero-1.png",
    "/images/hero-1.png",
  ];

  return (
    <Box position={"relative"} bgGradient="linear(to-b, #F3EDC9, #FFFFFF)">
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
          <IconButton
            aria-label="left-arrow"
            background={"transparent"}
            display={["none", "none", "block", "block"]}
            color={"white"}
            borderRadius="full"
            position="absolute"
            left={side}
            top={top}
            _hover={{
              background: "transparent",
            }}
            transform={"translate(0%, -50%)"}
            zIndex={2}
            onClick={() => {
              slider?.slickPrev();
              if (count > 1) {
                setCount(count => count - 1);
              }
            }}
          >
            <Image
              src="/images/prev-btn.png"
              alt="next"
              height={"auto"}
              width={[6, 6, 8, 8]}
            />
          </IconButton>
          <IconButton
            aria-label="right-arrow"
            borderRadius="full"
            background={"transparent"}
            display={["none", "none", "block", "block"]}
            position="absolute"
            right={side}
            _hover={{
              background: "transparent",
            }}
            top={top}
            transform={"translate(0%, -50%)"}
            zIndex={2}
            onClick={() => {
              slider?.slickNext();
              if (count < 3) {
                setCount(count => count + 1);
              }
            }}
          >
            <Image
              src="/images/next-btn.png"
              alt="next"
              height={"auto"}
              width={[6, 6, 8, 8]}
            />
          </IconButton>
          {/* Slider */}
          <Slider {...settings} ref={slider => setSlider(slider)}>
            {modifiedCats?.map(item => (
              <CatCard item={item} key={item?.id}/>
            ))}
          </Slider>
        </>
      )}
    </Box>
  );
}
