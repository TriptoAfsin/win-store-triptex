import React from "react";
import { Box, Text } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { CgFacebook } from "react-icons/cg";

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
    icon: "/images/twitter-icon.png",
    trueIcon: false,
    alt: "twitter",
  },
  {
    id: 3,
    url: "https://bd.linkedin.com/company/mmbd",
    icon: "/images/ln-icon.png",
    trueIcon: false,
    alt: "linkedin",
  },
  {
    id: 4,
    url: "https://www.instagram.com/",
    icon: "/images/insta-icon.png",
    trueIcon: false,
    alt: "instagram",
  },
];

function CategoryBar() {
  return (
    <Box
      as="header"
      w="100%"
      display={"flex"}
      bg={"#0e3b3e"}
      color={"white"}
      flexDir={"row"}
      height={"49px"}
      alignItems={"center"}
      px={[16,16,14,14]}
    >
      <Box display={["none", "none", "flex", "flex"]} flexDir={"row"}>
        cats
      </Box>
      <Box display={"flex"} flexDir={"row"} ml={[5,5,"auto","auto"]} alignItems={"center"}>
        {socialIcons?.map(item => (
          <Box
            ml={[5]}
            display={["block", "block", "block", "block"]}
            key={item?.id}
          >
            <Link href={item?.url}>
              {item?.trueIcon ? (
                item?.icon
              ) : (
                <Image
                  src={item?.icon}
                  width={20}
                  height={10}
                  alt={item?.alt}
                />
              )}
            </Link>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default CategoryBar;
