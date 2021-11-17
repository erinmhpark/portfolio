import NextLink from "next/link";
import { Link as ChakraLink } from "@chakra-ui/react";
import { useRouter } from "next/router";

function ChakraNextLink(props) {
  const router = useRouter();
  const { children, to } = props;
  const isActive = router.pathname === to;
  return (
    <NextLink passHref href={to}>
      <ChakraLink fontWeight={isActive && "bold"}>{children}</ChakraLink>
    </NextLink>
  );
}

export default ChakraNextLink;
