import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  styles: {
    global: (props) => ({
      "body, html": {
        bg: props.colorMode === "light" ? "white" : "gray.900",
      },
    }),
  },
});

export default theme;
