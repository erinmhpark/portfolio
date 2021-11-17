import { ChakraProvider } from "@chakra-ui/react";
import Layout from "../components/layout";
import theme from "../theme/index";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}

export default MyApp;
