import React from "react";
//Next imports
import Image from "next/image";
import Link from "next/link";
//Components
import { Box } from "@chakra-ui/react";
//Icons
import { CgFacebook } from "react-icons/cg";

function SocialIcons({
  socialIcons = [
    {
      id: 1,
      url: "https://www.facebook.com/momagicbd/",
      icon: <CgFacebook size={24} />,
      trueIcon: true,
      alt: "facebook",
    },
  ],
}) {
  return (
    <Box
      display={"flex"}
      flexDir={"row"}
      ml={[5, 5, "auto", "auto"]}
      alignItems={"center"}
      mr={[0, 0, 5, 10]}
    >
      {socialIcons?.map(item => (
        <Box
          ml={[5]}
          display={["block", "block", "block", "block"]}
          key={item?.id}
          data-testid="social-links-id"
        >
          <Link href={item?.url}>
            {item?.trueIcon ? (
              item?.icon
            ) : (
              <Image src={item?.icon} width={20} height={10} alt={item?.alt} />
            )}
          </Link>
        </Box>
      ))}
    </Box>
  );
}

export default SocialIcons;
