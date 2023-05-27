//Components
import { Box } from "@chakra-ui/react";
import CatSlider from "@/components/CatSlider";
import NewArrival from "@/components/NewArrival";
import BestDeals from "@/components/BestDeals";

export default function Home() {
  return (
    <>
      <Box>
        <link
          rel="stylesheet"
          type="text/css"
          charSet="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
        <Box padding={5}>
          <NewArrival />
          <BestDeals />
        </Box>
      </Box>
    </>
  );
}
