import { Box, Heading, Button } from "@chakra-ui/react";
import { useGetFakeCatsQuery } from "@/redux/slices/apiSlice";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CategoryBar from "@/components/CategoryBar";

export default function Home() {
  const {
    data: fakeCats,
    isLoading,
    refetch: refetchCats,
  } = useGetFakeCatsQuery();
  return (
    <>
    <Box>
      <Heading color={"#007df2"}>{isLoading ? "Loading" : "Cats"}</Heading>
      <Button onClick={() => refetchCats()}>Refetch</Button>
      {!isLoading ? fakeCats?.map(cat => <p key={cat}>{cat}</p>) : <></>}
    </Box>
    </>
  );
}
