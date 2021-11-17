import HeaderNavbar from "./navbar/headerNavbar";
import FooterNavbar from "./navbar/footerNavbar";
import { Box } from "@chakra-ui/layout";

export default function Layout({ children }) {
  return (
    <>
      <HeaderNavbar />
      <main>
        <Box minH="94vh" p={6}>
          {children}
        </Box>
      </main>
      <FooterNavbar />
    </>
  );
}
