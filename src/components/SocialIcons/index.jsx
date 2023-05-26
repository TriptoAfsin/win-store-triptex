import React from "react";
import { Box } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";

function SocialIcons({ socialIcons }) {
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
