import Head from "next/head";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { store } from "../store";
import { Provider } from "react-redux";
import { Roboto } from "next/font/google";
import "../styles.css";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

const config = {
  fonts: {
    heading: roboto.style.fontFamily,
    body: roboto.style.fontFamily,
  },
};

const theme = extendTheme({
  config,
});

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Win Store ⭐</title>
        <link rel="shortcut icon" href="/favicon.png" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0"
        />
        <meta name="description" content="Win Store by TriptoAfsin" />

        <meta property="og:title" content="Win Store" />
        <meta property="og:site_name" content="Win Store" />
        <meta property="og:url" content="" />
        <meta property="og:description" content="Win Store by TriptoAfsin" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="" />
      </Head>
      <Provider store={store}>
        <ChakraProvider theme={theme}>
          <Component {...pageProps} />
        </ChakraProvider>
      </Provider>
    </>
  );
}
