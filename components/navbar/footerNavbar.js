import { Flex, Img, useColorMode } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import ChakraNextLink from "../chakraNextLink";
import NextImage from "next/image";

function FooterNavbar() {
  const { colorMode } = useColorMode();
  const DynamicDarkMode = dynamic(() => import("../darkMode"), { ssr: false });
  return (
    <Flex
      display={{ base: "flex", md: "none" }}
      justifyContent="flex-end"
      bg={colorMode === "light" ? "white" : "gray.900"}
      px={3}
      pb={1}
      gridGap={2}
      align="center"
      minH="6vh"
      maxH="6vh"
      zIndex="10"
      sx={{
        position: "-webkit-sticky" /* Safari */,
        position: "sticky",
        bottom: "0",
      }}
    >
      <ChakraNextLink to="/">Home</ChakraNextLink>
      <ChakraNextLink to="/about">About</ChakraNextLink>
      <ChakraNextLink to="https://github.com/erinmhpark">
        {colorMode === "light" ? (
          <NextImage
            src="/githubLight.png"
            alt="Github logo"
            width="20px"
            height="20px"
          />
        ) : (
          <NextImage
            src="/githubDark.png"
            alt="Github logo"
            width="20px"
            height="20px"
          />
        )}
      </ChakraNextLink>
      <DynamicDarkMode />
    </Flex>
  );
}

export default FooterNavbar;
