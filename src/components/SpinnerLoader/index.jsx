import React from "react";
import { Box, Spinner } from "@chakra-ui/react";

function SpinnerLoader() {
  return (
    <Box
      display={"flex"}
      flexDir={"row"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Spinner color="#03484c" mt={20} size={"lg"} />
    </Box>
  );
}

export default SpinnerLoader;
