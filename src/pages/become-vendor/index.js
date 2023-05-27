import React from "react";
//Components
import { Box, Text } from "@chakra-ui/react";
//Icons
import {MdOutlinePeople} from 'react-icons/md'

function Profile() {
  return (
    <Box
      display={"flex"}
      flexDir={"column"}
      padding={[5, 5, 10, 10]}
      alignItems={["center", "center", "center", "center"]}
    >
      <Box
        display={"flex"}
        flexDir={"column"}
        alignItems={["center", "center", "center", "center"]}
        justifyContent={'center'}
        mt={[5, 5, 10, 10]}
      >
        <MdOutlinePeople color="#393939" size={'150px'} />
       <Text mt={5} textAlign={'center'}>Well this section is not developed yet 😅</Text>
       <Text mt={2} textAlign={'center'}>Maybe I will develop this section in future if I get hired 😁</Text>
      </Box>
    </Box>
  );
}

export default Profile;
