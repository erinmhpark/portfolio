import { Flex, Img, useColorMode } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import ChakraNextLink from "../chakraNextLink";

function FooterNavbar() {
  const { colorMode } = useColorMode();
  const DynamicDarkMode = dynamic(() => import("../darkMode"), { ssr: false });
  return (
    <Flex
      display={{ base: "flex", md: "none" }}
      justifyContent="flex-end"
      bg={colorMode === "light" ? "white" : "gray.900"}
      px={3}
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
          <Img
            src="/githubLight.png"
            alt="Github logo"
            boxSize="22px"
            cursor="pointer"
          />
        ) : (
          <Img
            src="/githubDark.png"
            alt="Github logo"
            boxSize="22px"
            cursor="pointer"
          />
        )}
      </ChakraNextLink>
      <DynamicDarkMode />
    </Flex>
  );
}

export default FooterNavbar;
