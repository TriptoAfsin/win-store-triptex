import React from "react";
import { Box, Text } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import SocialIcons from "../SocialIcons";
import { CgFacebook } from "react-icons/cg";
import { AiOutlineTwitter } from "react-icons/ai";
import { ImLinkedin2 } from "react-icons/im";
import { BsInstagram } from "react-icons/bs";

const socialIcons = [
  {
    id: 1,
    url: "https://www.facebook.com/momagicbd/",
    icon: <CgFacebook size={26} />,
    trueIcon: true,
    alt: "facebook",
  },
  {
    id: 2,
    url: "https://twitter.com/?lang=en",
    icon: <AiOutlineTwitter size={26} />,
    trueIcon: true,
    alt: "twitter",
  },
  {
    id: 3,
    url: "https://bd.linkedin.com/company/mmbd",
    icon: <ImLinkedin2 size={26} />,
    trueIcon: true,
    alt: "linkedin",
  },
  {
    id: 4,
    url: "https://www.instagram.com/",
    icon: <BsInstagram size={26} />,
    trueIcon: true,
    alt: "instagram",
  },
];

const trendingLinks = [
  {
    id: 1,
    title: "Installments",
    url: "/",
  },
  {
    id: 2,
    title: "Electronics",
    url: "/",
  },
  {
    id: 3,
    title: "Grocery",
    url: "/",
  },
  {
    id: 4,
    title: "Health & Beauty",
    url: "/",
  },
  {
    id: 5,
    title: "Home Appliances",
    url: "/",
  },
  {
    id: 6,
    title: "Mobile Accessories",
    url: "/",
  },
];

const infoLinks = [
  {
    id: 1,
    title: "About Us",
    url: "/",
  },
  {
    id: 2,
    title: "Contact Us",
    url: "/",
  },
  {
    id: 3,
    title: "FAQs",
    url: "/",
  },
  {
    id: 4,
    title: "Shipping & Return",
    url: "/",
  },
  {
    id: 5,
    title: "Privacy policy",
    url: "/",
  },
  {
    id: 6,
    title: "Terms & Conditions",
    url: "/",
  },
];

const careLinks = [
  {
    id: 1,
    title: "My Account",
    testId: 'my-account-test-id',
    url: "/profile",
  },
  {
    id: 2,
    title: "Track Your Order",
    testId: null,
    url: "/profile",
  },
  {
    id: 3,
    title: "Recently Viewed",
    testId: null,
    url: "/",
  },
  {
    id: 4,
    title: "Wishlist",
    testId: null,
    url: "/",
  },
  {
    id: 5,
    title: "Compare",
    testId: null,
    url: "/",
  },
  {
    id: 6,
    title: "Become a Vendor",
    testId: null,
    url: "/become-vendor",
  },
];

const paymentCards = [
  {
    id: 1,
    title: "visa-logo",
    img: "/images/footer-logos/VISA.png",
  },
  {
    id: 2,
    title: "master-logo",
    img: "/images/footer-logos/MASTER.png",
  },
  {
    id: 3,
    title: "cod-logo",
    img: "/images/footer-logos/cod.png",
  },
  {
    id: 4,
    title: "installment-logo",
    img: "/images/footer-logos/INSLALLMENTS.png",
  },
];

function Footer() {
  return (
    <>
      <Box
        display={"flex"}
        as="footer"
        w="100%"
        bg={"#393939"}
        color={"white"}
        flexDir={"column"}
        minH={["200px", "200px", "404px", "404px"]}
        bottom={0}
        mt={["20vh", "20vh", "26vh", "20vh"]}
        textAlign={["center", "center", "left", "left"]}
        maxW={"100vw"}
      >
        <Box
          flexDir={["column", "column", "row", "row"]}
          display={"flex"}
          justifyContent={["center", "center", "space-evenly", "space-evenly"]}
          alignItems={"center"}
          mt={14}
        >
          <Box display={"flex"} flexDir={"column"} ml={[0, 0, 10, 16]}>
            <Box
              width={[100, 100, 132, 132]}
              height={"auto"}
              mr={[0, 0, 12, 16]}
              display={"block"}
            >
              <Link href="/">
                <Image
                  src="/images/header-logo.png"
                  width={132}
                  height={48}
                  alt="logo"
                />
              </Link>
              <Text color={"#00cad7"} minW={["auto", "auto", 200, 250]} mt={2}>
                Got questions? Call us 24/7!
              </Text>
              <Link href="tel:03111666144">
                <Text
                  color={"#ffffff"}
                  minW={100}
                  mt={5}
                  fontSize={14}
                  _hover={{ textDecoration: "underline" }}
                >
                  03 111 666 144
                </Text>
              </Link>
              <Link href="tel:03171777015">
                <Text
                  color={"#ffffff"}
                  minW={100}
                  mb={5}
                  fontSize={14}
                  _hover={{ textDecoration: "underline" }}
                >
                  0317 1777015
                </Text>
              </Link>
              <Text color={"#00cad7"} mt={5} minW={["auto", "auto", 220, 250]}>
                Contact info
              </Text>
              <Link href="mailto:03111666144">
                <Text
                  color={"#ffffff"}
                  minW={100}
                  mt={5}
                  fontSize={14}
                  _hover={{ textDecoration: "underline" }}
                >
                  info@winstore.pk
                </Text>
              </Link>
              <Box mt={5} ml={["-16", "-10", "-6", "-6"]}>
                <SocialIcons socialIcons={socialIcons} />
              </Box>
            </Box>
          </Box>
          <Box display={"flex"} flexDir={"column"} ml={[2, 2, 2, 16]}>
            <Box
              width={[100, 100, 132, 132]}
              height={"auto"}
              mr={[0, 0, 12, 16]}
              display={"block"}
            >
              <Text
                color={"#00cad7"}
                minW={["auto", "auto", 220, 250]}
                mt={[5, 5, "-10", "-10"]}
                mb={5}
              >
                Trending
              </Text>
              {trendingLinks?.map(item => (
                <Link href={item?.url} key={item?.id}>
                  <Text
                    color={"#ffffff"}
                    minW={100}
                    mb={2}
                    fontSize={14}
                    _hover={{ textDecoration: "underline" }}
                  >
                    {item?.title}
                  </Text>
                </Link>
              ))}
            </Box>
          </Box>
          <Box display={"flex"} flexDir={"column"} ml={[2, 2, 2, 16]}>
            <Box
              width={[100, 100, 132, 132]}
              height={"auto"}
              mr={[0, 0, 12, 16]}
              display={"block"}
            >
              <Text
                color={"#00cad7"}
                minW={["auto", "auto", 220, 250]}
                mt={[5, 5, "-10", "-10"]}
                mb={5}
              >
                Information
              </Text>
              {infoLinks?.map(item => (
                <Link href={item?.url} key={item?.id}>
                  <Text
                    color={"#ffffff"}
                    minW={100}
                    mb={2}
                    fontSize={14}
                    _hover={{ textDecoration: "underline" }}
                  >
                    {item?.title}
                  </Text>
                </Link>
              ))}
            </Box>
          </Box>
          <Box display={"flex"} flexDir={"column"} ml={[2, 2, 2, 16]}>
            <Box
              width={[100, 100, 130, 132]}
              height={"auto"}
              mr={[0, 0, 10, 16]}
              display={"block"}
            >
              <Text
                color={"#00cad7"}
                minW={["auto", "auto", "auto", 250]}
                mt={[5, 5, "-10", "-10"]}
                mb={5}
              >
                Customer Care
              </Text>
              {careLinks?.map(item => (
                <Link href={item?.url} key={item?.id} data-testid={item?.testId}>
                  <Text
                    color={"#ffffff"}
                    minW={100}
                    mb={2}
                    fontSize={14}
                    _hover={{ textDecoration: "underline" }}
                  >
                    {item?.title}
                  </Text>
                </Link>
              ))}
            </Box>
          </Box>
        </Box>
        <Box
          ml={"auto"}
          display={"flex"}
          flexDir={"row"}
          mr={[6, 6, 5, 5]}
          justifyContent={"center"}
          mb={5}
        >
          {paymentCards?.map(item => (
            <Box
              borderRadius={5}
              bg={"#ffffff"}
              ml={2}
              display={"flex"}
              alignItems={"center"}
              key={item?.id}
            >
              <Image src={item?.img} width={84} height={59} alt={item?.title} />
            </Box>
          ))}
        </Box>
      </Box>
      <Box
        display={"flex"}
        as="footer"
        w="100%"
        bg={"#161616"}
        color={"white"}
        flexDir={"row"}
        minH={["50px", "50px", "59px", "59px"]}
        alignItems={"center"}
        justifyContent={["center", "center", "start", "start"]}
        bottom={0}
      >
        <Text
          textAlign={["center", "center", "left", "left"]}
          ml={[0, 0, 10, 52]}
        >
          © 2021 Winstore. All Rights Reserved.
        </Text>
      </Box>
    </>
  );
}

export default Footer;
