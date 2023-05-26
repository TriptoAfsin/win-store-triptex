import React from "react";
import { Box, Text } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { CgFacebook } from "react-icons/cg";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineTwitter } from "react-icons/ai";
import { ImLinkedin2 } from "react-icons/im";
import { BsInstagram } from "react-icons/bs";
import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import { useGetFakeCatsQuery } from "@/redux/slices/apiSlice";
import { Spinner } from "@chakra-ui/react";
import SocialIcons from "../SocialIcons";
import enumFormatter from "@/utils/enumFormatter";
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

function CategoryBar() {
  const {
    data: fakeCats,
    isLoading,
    refetch: refetchCats,
  } = useGetFakeCatsQuery();
  return (
    <Box
      as="header"
      w="100%"
      display={"flex"}
      bg={"#0e3b3e"}
      color={"white"}
      flexDir={"row"}
      height={['49px','49px',"56px","49px"]}
      alignItems={"center"}
      px={[16, 16, 18, 20]}
    >
      <Box display={["none", "none", "flex", "flex"]} flexDir={"row"} alignItems={'center'}>
        <Menu>
          <MenuButton>
            <GiHamburgerMenu size={20} color="white" />
          </MenuButton>
          <MenuList color={"black"}>
            {!isLoading ? (
              fakeCats?.map(item => <MenuItem key={item}>{enumFormatter(item)}</MenuItem>)
            ) : (
              <Box
                display={"flex"}
                flexDir={"row"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <Spinner color="#03484c" mt={5} mb={5} />
              </Box>
            )}
          </MenuList>
        </Menu>
        <Text fontSize={18} ml={5} cursor={"pointer"}>
          Browse By Category
        </Text>
        <Link href={"/"}>
          <Text fontSize={16} ml={5} _hover={{ textDecoration: "underline" }}>
            Home
          </Text>
        </Link>
        <Link href={"/"}>
          <Text fontSize={16} ml={5} _hover={{ textDecoration: "underline" }}>
            Easy Monthly Installments
          </Text>
        </Link>
        <Link href={"/"}>
          <Text fontSize={16} ml={5} _hover={{ textDecoration: "underline" }}>
            Shop by Brands
          </Text>
        </Link>
        <Link href={"/"}>
          <Text fontSize={16} ml={5} _hover={{ textDecoration: "underline" }}>
            Become a Vendor
          </Text>
        </Link>
      </Box>
      <SocialIcons socialIcons={socialIcons} />
    </Box>
  );
}

export default CategoryBar;
