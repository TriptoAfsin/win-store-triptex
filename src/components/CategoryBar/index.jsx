import React from "react";
import { Box, Text } from "@chakra-ui/react";
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
import { useRouter } from "next/router";
const socialIcons = [
  {
    id: 1,
    url: "https://www.facebook.com/momagicbd/",
    icon: <CgFacebook size={24} />,
    trueIcon: true,
    alt: "facebook",
  },
  {
    id: 2,
    url: "https://twitter.com/?lang=en",
    icon: <AiOutlineTwitter size={24} />,
    trueIcon: true,
    alt: "twitter",
  },
  {
    id: 3,
    url: "https://bd.linkedin.com/company/mmbd",
    icon: <ImLinkedin2 size={24} />,
    trueIcon: true,
    alt: "linkedin",
  },
  {
    id: 4,
    url: "https://www.instagram.com/",
    icon: <BsInstagram size={24} />,
    trueIcon: true,
    alt: "instagram",
  },
];

const linkArr = [
  {
    id: 1,
    url: "/",
    title: "Home",
  },
  {
    id: 2,
    url: "/emi",
    title: "Easy Monthly Installments",
  },
  {
    id: 3,
    url: "/brands",
    title: "Shop by Brands",
  },
  {
    id: 4,
    url: "/become-vendor",
    title: "Become a Vendor",
  },
];

function CategoryBar() {
  const router = useRouter();
  const { catName } = router.query;
  const {
    data: fakeCats,
    isLoading,
    refetch: refetchCats,
  } = useGetFakeCatsQuery();
  return (
    <Box
      as="header"
      w="100%"
      position={'sticky'}
      top={['68px']}
      zIndex={5000}
      display={"flex"}
      bg={"#0e3b3e"}
      color={"white"}
      flexDir={"row"}
      height={["49px", "49px", "56px", "49px"]}
      alignItems={"center"}
      px={[16, 16, 18, 20]}
    >
      <Box
        display={["none", "none", "flex", "flex"]}
        flexDir={"row"}
        alignItems={"center"}
      >
        <Menu>
          <MenuButton>
            <GiHamburgerMenu size={20} color="white" />
          </MenuButton>
          <MenuList>
            {!isLoading ? (
              fakeCats?.map(item => (
                <MenuItem
                  key={item}
                  mb={2}
                  color={item === catName ? "#00CAD7" : "black"}
                >
                  <Link href={`/category/${item}`}>{enumFormatter(item)}</Link>
                </MenuItem>
              ))
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
        <Text fontSize={[16, 16, 16, 18]} ml={5} cursor={"pointer"}>
          Browse By Category
        </Text>
        {linkArr?.map(item => (
          <Link href={item?.url} key={item?.id}>
            <Text
              fontSize={[16, 16, 14, 16]}
              ml={5}
              _hover={{ textDecoration: "underline" }}
            >
              {item?.title}
            </Text>
          </Link>
        ))}
      </Box>
      <SocialIcons socialIcons={socialIcons} />
    </Box>
  );
}

export default CategoryBar;
