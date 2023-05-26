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

function Footer() {
  return (
    <>
      <Box
        display={"flex"}
        as="footer"
        position="sticky"
        w="100%"
        bg={"#393939"}
        color={"white"}
        flexDir={"column"}
        minH={["200px", "200px", "404px", "404px"]}
        bottom={0}
        minW={"100vw"}
        mt={["120vh", "100vh", "100vh", "100vh"]}
        textAlign={["center", "center", "left", "left"]}
        maxW={'100vw'}
      >
        <Box
          flexDir={["column", "column", "row", "row"]}
          display={"flex"}
          justifyContent={["center", "center", "space-evenly", "space-evenly"]}
          alignItems={"center"}
          mt={14}
        >
          <Box display={"flex"} flexDir={"column"} ml={[0, 0, 16, 16]}>
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
              <Text color={"#00cad7"} minW={["auto", "auto", 250, 250]} mt={2}>
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
          <Box display={"flex"} flexDir={"column"} ml={[2, 2, 16, 16]}>
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
              >
                Trending
              </Text>
              <Link href="/">
                <Text
                  color={"#ffffff"}
                  minW={100}
                  mt={5}
                  mb={2}
                  fontSize={14}
                  _hover={{ textDecoration: "underline" }}
                >
                  Installments
                </Text>
              </Link>
              <Link href="/">
                <Text
                  color={"#ffffff"}
                  minW={100}
                  mb={2}
                  fontSize={14}
                  _hover={{ textDecoration: "underline" }}
                >
                  Electronics
                </Text>
              </Link>
              <Link href="/">
                <Text
                  color={"#ffffff"}
                  minW={100}
                  fontSize={14}
                  mb={2}
                  _hover={{ textDecoration: "underline" }}
                >
                  Grocery
                </Text>
              </Link>
              <Link href="/">
                <Text
                  color={"#ffffff"}
                  minW={100}
                  mb={2}
                  fontSize={14}
                  _hover={{ textDecoration: "underline" }}
                >
                  Health & Beauty
                </Text>
              </Link>
              <Link href="/">
                <Text
                  color={"#ffffff"}
                  minW={100}
                  mb={2}
                  fontSize={14}
                  _hover={{ textDecoration: "underline" }}
                >
                  Home Appliances
                </Text>
              </Link>
              <Link href="/">
                <Text
                  color={"#ffffff"}
                  minW={100}
                  mb={2}
                  fontSize={14}
                  _hover={{ textDecoration: "underline" }}
                >
                  Mobile Accessories
                </Text>
              </Link>
            </Box>
          </Box>
          <Box display={"flex"} flexDir={"column"} ml={[2, 2, 16, 16]}>
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
              >
                Information
              </Text>
              <Link href="/">
                <Text
                  color={"#ffffff"}
                  minW={100}
                  mt={5}
                  mb={2}
                  fontSize={14}
                  _hover={{ textDecoration: "underline" }}
                >
                  About Us
                </Text>
              </Link>
              <Link href="/">
                <Text
                  color={"#ffffff"}
                  minW={100}
                  mb={2}
                  fontSize={14}
                  _hover={{ textDecoration: "underline" }}
                >
                  Contact Us
                </Text>
              </Link>
              <Link href="/">
                <Text
                  color={"#ffffff"}
                  minW={100}
                  fontSize={14}
                  mb={2}
                  _hover={{ textDecoration: "underline" }}
                >
                  FAQs
                </Text>
              </Link>
              <Link href="/">
                <Text
                  color={"#ffffff"}
                  minW={100}
                  mb={2}
                  fontSize={14}
                  _hover={{ textDecoration: "underline" }}
                >
                  Shipping & Return
                </Text>
              </Link>
              <Link href="/">
                <Text
                  color={"#ffffff"}
                  minW={100}
                  mb={2}
                  fontSize={14}
                  _hover={{ textDecoration: "underline" }}
                >
                  Privacy policy
                </Text>
              </Link>
              <Link href="/">
                <Text
                  color={"#ffffff"}
                  minW={100}
                  mb={2}
                  fontSize={14}
                  _hover={{ textDecoration: "underline" }}
                >
                  Terms & Conditions
                </Text>
              </Link>
            </Box>
          </Box>
          <Box display={"flex"} flexDir={"column"} ml={[2, 2, 16, 16]}>
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
              >
                Customer Care
              </Text>
              <Link href="/profile">
                <Text
                  color={"#ffffff"}
                  minW={100}
                  mt={5}
                  mb={2}
                  fontSize={14}
                  _hover={{ textDecoration: "underline" }}
                >
                  My Account
                </Text>
              </Link>
              <Link href="/profile">
                <Text
                  color={"#ffffff"}
                  minW={100}
                  mb={2}
                  fontSize={14}
                  _hover={{ textDecoration: "underline" }}
                >
                  Track Your Order
                </Text>
              </Link>
              <Link href="/">
                <Text
                  color={"#ffffff"}
                  minW={100}
                  fontSize={14}
                  mb={2}
                  _hover={{ textDecoration: "underline" }}
                >
                  Recently Viewed
                </Text>
              </Link>
              <Link href="/">
                <Text
                  color={"#ffffff"}
                  minW={100}
                  mb={2}
                  fontSize={14}
                  _hover={{ textDecoration: "underline" }}
                >
                  Wishlist
                </Text>
              </Link>
              <Link href="/">
                <Text
                  color={"#ffffff"}
                  minW={100}
                  mb={2}
                  fontSize={14}
                  _hover={{ textDecoration: "underline" }}
                >
                  Compare
                </Text>
              </Link>
              <Link href="/">
                <Text
                  color={"#ffffff"}
                  minW={100}
                  mb={2}
                  fontSize={14}
                  _hover={{ textDecoration: "underline" }}
                >
                  Become a Vendor
                </Text>
              </Link>
            </Box>
          </Box>
        </Box>
        <Box
          ml={"auto"}
          display={"flex"}
          flexDir={"row"}
          mr={[2, 2, 0, 5]}
          justifyContent={"center"}
          mb={5}
        >
          <Box
            borderRadius={5}
            bg={"#ffffff"}
            ml={2}
            display={"flex"}
            alignItems={"center"}
          >
            <Image
              src="/images/footer-logos/VISA.png"
              width={84}
              height={59}
              alt="logo"
            />
          </Box>
          <Box
            borderRadius={5}
            bg={"#ffffff"}
            ml={2}
            display={"flex"}
            alignItems={"center"}
          >
            <Image
              src="/images/footer-logos/MASTER.png"
              width={84}
              height={59}
              alt="logo"
            />
          </Box>
          <Box
            borderRadius={5}
            bg={"#ffffff"}
            ml={2}
            display={"flex"}
            alignItems={"center"}
          >
            <Image
              src="/images/footer-logos/cod.png"
              width={84}
              height={59}
              alt="logo"
            />
          </Box>
          <Box
            borderRadius={5}
            bg={"#ffffff"}
            ml={2}
            display={"flex"}
            alignItems={"center"}
          >
            <Image
              src="/images/footer-logos/INSLALLMENTS.png"
              width={84}
              height={59}
              alt="logo"
            />
          </Box>
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
