import React, { useState } from "react";
import { Box, Text, Image, Button, Divider } from "@chakra-ui/react";
import {
  useGetFakeCatsQuery,
  useGetFakeProductsByCatsQuery,
} from "@/redux/slices/apiSlice";
import enumFormatter from "@/utils/enumFormatter";
import SpinnerLoader from "../SpinnerLoader";
import Link from "next/link";
import { AiFillCaretDown } from "react-icons/ai";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
} from "@chakra-ui/react";

function BestDeals() {
  const [selectedCat, setSelectedCat] = useState("electronics");
  const [dummyLoading, setDummyLoading] = useState(false);
  const { data: cats, isLoading, refetch: refetchCats } = useGetFakeCatsQuery();
  const {
    data: catProds,
    isLoading: isCatProdsLoading,
    refetch: refetchCatProducts,
  } = useGetFakeProductsByCatsQuery(selectedCat);
  return (
    <Box display={"flex"} flexDir={"column"} padding={[5, 5, 10, 15]} mt={20}>
      <Box display={"flex"} flexDir={"row"}>
        <Box
          display={"flex"}
          flexDir={"row"}
          mb={[5, 5, 15, 15]}
          ml={[0, 0, 5, 10]}
        >
          <Text color={"#00cad7"} fontSize={[20, 20, 24, 26]}>
            Best
          </Text>
          <Text color={"black"} ml={2} fontSize={[20, 20, 24, 26]}>
            Deals
          </Text>
        </Box>
        <Box
          display={"flex"}
          flexDir={"row"}
          mb={[5, 5, 15, 15]}
          ml={"auto"}
          mr={[0, 0, 5, 10]}
        >
          <Box display={["block", "block", "none", "none"]} color={"black"}>
            <Menu>
              <MenuButton as={Button} rightIcon={<AiFillCaretDown />}>
                {enumFormatter(selectedCat)}
              </MenuButton>
              <MenuList>
                {cats?.map(cat => (
                  <MenuItem
                    key={cat}
                    onClick={() => {
                      setSelectedCat(cat);
                      refetchCatProducts();
                      setDummyLoading(true);
                      setTimeout(() => {
                        setDummyLoading(false);
                      }, 900);
                    }}
                    color={cat === selectedCat ? "#00CAD7" : "black"}
                    mt={2}
                  >
                    {enumFormatter(cat)}
                  </MenuItem>
                ))}
              </MenuList>
            </Menu>
          </Box>
          <Box display={["none", "none", "flex", "flex"]}>
            {cats?.map(cat => (
              <Box key={cat} display={"flex"} flexDir={"column"}>
                <Text
                  color={selectedCat === cat ? "#00cad7" : "black"}
                  fontSize={[16, 16, 20, 20]}
                  mr={[2, 5, 3, 5]}
                  cursor={"pointer"}
                  fontWeight={"semibold"}
                  onClick={() => {
                    setSelectedCat(cat);
                    refetchCatProducts();
                    setDummyLoading(true);
                    setTimeout(() => {
                      setDummyLoading(false);
                    }, 1000);
                  }}
                >
                  {enumFormatter(cat)}
                </Text>
                <Divider
                  width={"90%"}
                  border={"2px"}
                  color={selectedCat === cat ? "#0aaeb9" : "transparent"}
                  borderRadius={5}
                />
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
      <Box
        display={"flex"}
        flexDir={"column"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Box
          display={"flex"}
          flexDir={["column", "column", "row", "row"]}
          justifyContent={"center"}
          alignItems={"center"}
          mt={5}
        >
          {!isCatProdsLoading && !dummyLoading ? (
            <Box
              display={"flex"}
              flexDir={["column", "column", "column", "row"]}
            >
              <Box
                display={"flex"}
                flexDir={["column", "column", "row", "column"]}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <Link href={`/products/${catProds[0]?.id}`}>
                  <Box
                    width={["80vw", "80vw", "350px", "414px"]}
                    height={"286px"}
                    padding={5}
                    border={"1px solid rgba(0, 0, 0, 0.11)"}
                    display={"flex"}
                    flexDir={"row"}
                    justifyContent={"space-around"}
                    alignItems={"center"}
                    mb={5}
                    mr={[0, 0, 5, 0]}
                  >
                    <Box display={"flex"} flexDir={"column"}>
                      <Box display={"flex"} flexDir={"column"} minH={"82px"}>
                        <Text fontSize={[16, 16, 18, 20]} ml={2}>
                          {catProds[0]?.title?.slice(0, 15)}
                        </Text>
                        <Text
                          fontSize={[16, 16, 20, 22]}
                          ml={2}
                          color={"#14B1F0"}
                          fontWeight={"semibold"}
                        >
                          Rs {catProds[0]?.price}
                        </Text>
                      </Box>
                      <Box
                        ml={2}
                        mt={10}
                        width={"137px"}
                        height={"91px"}
                        bgGradient="linear(to-r, #00C9FF, #92FE9D)"
                        display={"flex"}
                        flexDir={"column"}
                        justifyContent={"center"}
                        alignItems={"center"}
                      >
                        <Text color={"black"} fontSize={[20, 20, 24, 26]}>
                          Save
                        </Text>
                        <Text color={"black"} fontSize={[20, 20, 24, 26]}>
                          10%
                        </Text>
                      </Box>
                    </Box>
                    <Box display={"flex"} flexDir={"column"} ml={2}>
                      <Text color={"#00cad7"} fontSize={[20, 20, 24, 26]}>
                        Special
                      </Text>
                      <Text color={"black"} fontSize={[20, 20, 24, 26]}>
                        Offer
                      </Text>
                      <Image
                        src={catProds[0]?.image}
                        alt={catProds[0]?.title}
                        height={130}
                        width={130}
                        mt={5}
                      />
                    </Box>
                  </Box>
                </Link>
                <Link href={`/products/${catProds[1]?.id}`}>
                  <Box
                    width={["80vw", "80vw", "350px", "414px"]}
                    height={"286px"}
                    padding={5}
                    border={"1px solid rgba(0, 0, 0, 0.11)"}
                    display={"flex"}
                    flexDir={"row"}
                    justifyContent={"space-around"}
                    alignItems={"center"}
                    mb={5}
                  >
                    <Box display={"flex"} flexDir={"column"}>
                      <Text
                        color={"#c82020"}
                        fontSize={[20, 20, 24, 26]}
                        mt={"-16"}
                      >
                        Special
                      </Text>
                      <Text color={"black"} fontSize={[20, 20, 24, 26]}>
                        Offer
                      </Text>
                      <Box display={"flex"} flexDir={"column"} minH={"82px"}>
                        <Text fontSize={[16, 16, 18, 20]}>
                          {catProds[1]?.title?.slice(0, 15)}
                        </Text>
                        <Text
                          fontSize={[16, 16, 20, 22]}
                          color={"#14B1F0"}
                          fontWeight={"semibold"}
                        >
                          Rs {catProds[1]?.price}
                        </Text>
                      </Box>
                    </Box>
                    <Box display={"flex"} flexDir={"column"} ml={2}>
                      <Box
                        ml={2}
                        mt={2}
                        width={"100px"}
                        height={"100px"}
                        bgGradient="linear(to-r, #EE9CA7, #FFDDE1)"
                        display={"flex"}
                        flexDir={"column"}
                        justifyContent={"center"}
                        alignItems={"center"}
                        borderRadius={"50%"}
                      >
                        <Text color={"black"} fontSize={[20, 20, 24, 26]}>
                          Save
                        </Text>
                        <Text color={"black"} fontSize={[20, 20, 24, 26]}>
                          10%
                        </Text>
                      </Box>
                      <Image
                        src={catProds[1]?.image}
                        alt={catProds[1]?.title}
                        height={130}
                        width={130}
                        mt={5}
                      />
                    </Box>
                  </Box>
                </Link>
              </Box>
              <Box
                display={"flex"}
                flexDir={"column"}
                ml={5}
                mr={5}
                alignItems={"center"}
              >
                <Link href={`/products/${catProds[2]?.id}`}>
                  <Box
                    width={["90vw", "90vw", "414px", "414px"]}
                    height={"588px"}
                    padding={5}
                    border={"1px solid rgba(0, 0, 0, 0.11)"}
                    display={"flex"}
                    flexDir={"column"}
                    justifyContent={"space-around"}
                    mb={5}
                  >
                    <Box display={"flex"} flexDir={"row"}>
                      <Box display={"flex"} flexDir={"column"} ml={2}>
                        <Text color={"#c82020"} fontSize={[20, 20, 24, 26]}>
                          Special
                        </Text>
                        <Text color={"black"} fontSize={[20, 20, 24, 26]}>
                          Offer
                        </Text>
                        <Image
                          src={catProds[2]?.image}
                          alt={catProds[2]?.title}
                          height={300}
                          width={300}
                        />
                      </Box>
                      <Box
                        ml={2}
                        mt={10}
                        width={"150px"}
                        height={"120px"}
                        bgGradient="linear(to-r, #FF512F, #DD2476)"
                        display={"flex"}
                        flexDir={"column"}
                        justifyContent={"center"}
                        alignItems={"center"}
                        color={"white"}
                        borderRadius={"50%"}
                      >
                        <Text fontSize={[20, 20, 24, 26]}>Save</Text>
                        <Text fontSize={[20, 20, 24, 26]}>10%</Text>
                      </Box>
                    </Box>
                    <Box
                      display={"flex"}
                      flexDir={"column"}
                      minH={"82px"}
                      textAlign={"left"}
                    >
                      <Text fontSize={[16, 16, 18, 20]} ml={2}>
                        {catProds[2]?.title?.slice(0, 15)}
                      </Text>
                      <Text
                        fontSize={[16, 16, 20, 22]}
                        ml={2}
                        color={"#14B1F0"}
                        fontWeight={"semibold"}
                      >
                        Rs {catProds[2]?.price}
                      </Text>
                    </Box>
                  </Box>
                </Link>
              </Box>
              <Box
                display={"flex"}
                flexDir={["column", "column", "row", "column"]}
                alignItems={["center", "center", "center", "start"]}
                justifyContent={["center", "center", "center", "start"]}
              >
                <Link href={`/products/${catProds[0]?.id}`}>
                  <Box
                    width={["80vw", "80vw", "350px", "414px"]}
                    height={"286px"}
                    padding={5}
                    mr={[0, 0, 5, 0]}
                    border={"1px solid rgba(0, 0, 0, 0.11)"}
                    display={"flex"}
                    flexDir={"row"}
                    justifyContent={"space-around"}
                    alignItems={"center"}
                    mb={5}
                  >
                    <Box display={"flex"} flexDir={"column"}>
                      <Box display={"flex"} flexDir={"column"} minH={"82px"}>
                        <Text fontSize={[16, 16, 18, 20]} ml={2}>
                          {catProds[3]?.title?.slice(0, 15)}
                        </Text>
                        <Text
                          fontSize={[16, 16, 20, 22]}
                          ml={2}
                          color={"#14B1F0"}
                          fontWeight={"semibold"}
                        >
                          Rs {catProds[3]?.price}
                        </Text>
                      </Box>
                      <Box
                        ml={2}
                        mt={10}
                        width={"137px"}
                        height={"91px"}
                        bgGradient="linear(to-r, #EECFCC, #9fb2cb)"
                        display={"flex"}
                        flexDir={"column"}
                        justifyContent={"center"}
                        alignItems={"center"}
                      >
                        <Text color={"black"} fontSize={[20, 20, 24, 26]}>
                          Save
                        </Text>
                        <Text color={"black"} fontSize={[20, 20, 24, 26]}>
                          10%
                        </Text>
                      </Box>
                    </Box>
                    <Box
                      display={"flex"}
                      flexDir={"column"}
                      ml={2}
                      textAlign={"right"}
                    >
                      <Text color={"#034e53"} fontSize={[20, 20, 24, 26]}>
                        Special
                      </Text>
                      <Text color={"black"} fontSize={[20, 20, 24, 26]}>
                        Offer
                      </Text>
                      <Image
                        src={catProds[3]?.image}
                        alt={catProds[3]?.title}
                        height={130}
                        width={130}
                        mt={5}
                      />
                    </Box>
                  </Box>
                </Link>
                {catProds?.length > 4 ? (
                  <Link href={`/products/${catProds[4]?.id}`}>
                    <Box
                      width={["80vw", "80vw", "350px", "414px"]}
                      height={"286px"}
                      padding={5}
                      border={"1px solid rgba(0, 0, 0, 0.11)"}
                      display={"flex"}
                      flexDir={"row"}
                      justifyContent={"space-around"}
                      alignItems={"center"}
                      mb={5}
                    >
                      <Box display={"flex"} flexDir={"column"}>
                        <Text
                          color={"#c82020"}
                          fontSize={[20, 20, 24, 26]}
                          mt={"-16"}
                        >
                          Special
                        </Text>
                        <Text color={"black"} fontSize={[20, 20, 24, 26]}>
                          Offer
                        </Text>
                        <Box display={"flex"} flexDir={"column"} minH={"82px"}>
                          <Text fontSize={[16, 16, 18, 20]}>
                            {catProds[4]?.title?.slice(0, 15)}
                          </Text>
                          <Text
                            fontSize={[16, 16, 20, 22]}
                            color={"#14B1F0"}
                            fontWeight={"semibold"}
                          >
                            Rs {catProds[4]?.price}
                          </Text>
                        </Box>
                      </Box>
                      <Box display={"flex"} flexDir={"column"} ml={2}>
                        <Box
                          ml={2}
                          mt={2}
                          width={"100px"}
                          height={"100px"}
                          bgGradient="linear(to-r, #F09819, #EDDE5D)"
                          display={"flex"}
                          flexDir={"column"}
                          justifyContent={"center"}
                          alignItems={"center"}
                          borderRadius={"50%"}
                        >
                          <Text color={"black"} fontSize={[20, 20, 24, 26]}>
                            Save
                          </Text>
                          <Text color={"black"} fontSize={[20, 20, 24, 26]}>
                            10%
                          </Text>
                        </Box>
                        <Image
                          src={catProds[4]?.image}
                          alt={catProds[4]?.title}
                          height={130}
                          width={130}
                          mt={5}
                        />
                      </Box>
                    </Box>
                  </Link>
                ) : (
                  <></>
                )}
              </Box>
            </Box>
          ) : (
            <SpinnerLoader />
          )}
        </Box>
      </Box>
    </Box>
  );
}

export default BestDeals;
