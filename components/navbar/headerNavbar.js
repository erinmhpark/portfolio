import { Flex, Img, useColorMode } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import ChakraNextLink from "../chakraNextLink";

function HeaderNavbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const DynamicDarkMode = dynamic(() => import("../darkMode"), { ssr: false });
  return (
    <Flex
      display={{ base: "none", md: "flex" }}
      justifyContent="flex-end"
      pt={3}
      px={3}
      gridGap={2}
      align="center"
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

export default HeaderNavbar;
