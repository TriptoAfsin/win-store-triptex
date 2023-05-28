//Next imports
import Head from "next/head";
import { Roboto } from "next/font/google";
//Providers
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { Provider } from "react-redux";
import NextNProgress from "nextjs-progressbar";
//next-redux wrapper for ssr/ssg
import { wrapper } from "@/store";
//Components
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CategoryBar from "@/components/CategoryBar";
import { Box } from "@chakra-ui/react";
//Global styles
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

function App({ Component, pageProps, ...rest }) {
  console.log(`⭐ Thanks for inviting me to the interview, the assignment was fun\n
  Regardless of getting hired or not it was an excellent experience 😁
  Feel free to get in touch with me - \n\n📞 +8801936396220\n✉️ AfsinTripto@gmail.com\n\nHappy Coding 🧑‍💻
  `);
  const { store, props } = wrapper.useWrappedStore(rest);
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
        <meta
          property="og:image"
          content="https://i.ibb.co/ZLp6DMH/web-thumb.png"
        />
      </Head>
      <>
        <ChakraProvider theme={theme}>
          <Provider store={store}>
            <Box>
              <Header />
              <CategoryBar />
              <Box flexGrow={1}>
                <NextNProgress color="#2563eb" />
                <Component {...pageProps} />
              </Box>
              <Footer />
            </Box>
          </Provider>
        </ChakraProvider>
      </>
    </>
  );
}

export default App;
