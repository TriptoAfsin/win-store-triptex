import React from "react";
//Next imports
import Link from "next/link";
//Components
import {
  Box,
  IconButton,
  useBreakpointValue,
  Text,
  Button,
} from "@chakra-ui/react";
//Icons
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
//React slick slider
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Settings for the slider
const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: false,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
  dotsClass: "slick-dots slick-thumb",
};

export default function Carousel() {
  const [slider, setSlider] = React.useState(null);
  const [count, setCount] = React.useState(1);

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
    <Box position={"relative"} overflow={"hidden"}>
      {/* Left Icon */}
      <IconButton
        aria-label="left-arrow"
        background={"#03484d"}
        color={"white"}
        borderRadius="full"
        position="absolute"
        left={side}
        top={top}
        transform={"translate(0%, -50%)"}
        zIndex={2}
        onClick={() => {
          slider?.slickPrev();
          if (count > 1) {
            setCount(count => count - 1);
          }
        }}
      >
        <BiLeftArrowAlt />
      </IconButton>
      {/* Right Icon */}
      <IconButton
        aria-label="right-arrow"
        background={"#03484d"}
        color={"white"}
        borderRadius="full"
        position="absolute"
        right={side}
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
        <BiRightArrowAlt />
      </IconButton>
      {/* Slider */}
      <Slider {...settings} ref={slider => setSlider(slider)}>
        {cards.map((url, index) => (
          <Box
            key={index}
            height={"400px"}
            position="relative"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize={["cover", "cover", "cover", "cover"]}
            backgroundImage={`url(${url})`}
          >
            <Box
              display={["none", "none", "none", "flex"]}
              flexDir={"row"}
              alignItems={"center"}
              justifyContent={"center"}
              bottom={0}
              position={"absolute"}
              mb={5}
              ml={800}
            >
              <Box
                width={20}
                height={4}
                borderRadius={10}
                bg={count === 1 ? "#034e53" : "#aa9393"}
                mr={3}
              ></Box>
              <Box
                width={20}
                height={4}
                borderRadius={10}
                bg={count === 2 ? "#034e53" : "#aa9393"}
                mr={3}
              ></Box>
              <Box
                width={20}
                height={4}
                borderRadius={10}
                bg={count === 3 ? "#034e53" : "#aa9393"}
                mr={3}
              ></Box>
            </Box>
            <Box
              display={"flex"}
              flexDir={"column"}
              ml={[10, 10, 20, 20]}
              mt={10}
              alignItems={["center", "center", "center", "start"]}
            >
              <Box display={"flex"}>
                <Text fontSize={[30, 30, 40, 58]} fontWeight={"semibold"} color={'black'}>
                  Shop
                </Text>
                <Text
                  fontSize={[30, 30, 40, 58]}
                  color={"#0aaeb9"}
                  ml={[2, 2, 5, 5]}
                  fontWeight={"semibold"}
                >
                  Computer
                </Text>
              </Box>
              <Box display={"flex"} fontWeight={"semibold"} mt={"-2"}>
                <Text fontSize={[30, 30, 40, 58]}>&</Text>
                <Text
                  fontSize={[30, 30, 40, 58]}
                  color={"#0aaeb9"}
                  ml={[2, 2, 5, 5]}
                >
                  experience
                </Text>
              </Box>
              <Text
                maxW={500}
                mt={[5, 5, 0, 0]}
                mr={[5, 5, 0, 0]}
                textAlign={["center", "center", "center", "left"]}
              >
                You cannot inspect quality into the product; it is already
                there.
              </Text>
              <Text
                maxW={500}
                mr={[5, 5, 0, 0]}
                textAlign={["center", "center", "center", "left"]}
              >
                I am not a product of my circumstances. I am a product of my
                decisions.
              </Text>
              <Link href={"/category/electronics"} data-testid="view-more-id">
                <Button
                  w={200}
                  bg={"#14b1f0"}
                  color={"white"}
                  mt={[5, 5, 2, 2]}
                >
                  View More
                </Button>
              </Link>
              <Box></Box>
              {/* <Box
                ml={"auto"}
                width={165}
                height={165}
                borderRadius={"50%"}
                bgGradient="linear(to-r, #FDC830, #F37335)"
                display={["none", "none", "none", "flex"]}
                flexDir={"column"}
                alignItems={"center"}
                justifyContent={"center"}
                color={"white"}
                mr={52}
                mt={"-260"}
              >
                <Text fontSize={[30, 30, 40, 48]} fontWeight={"semibold"}>
                  40%
                </Text>
                <Text fontSize={[30, 30, 40, 48]} fontWeight={"semibold"}>
                  Off
                </Text>
              </Box> */}
            </Box>
          </Box>
        ))}
      </Slider>
    </Box>
  );
}
