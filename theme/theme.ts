import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  styles: {
    global: {
      "*": {
        boxSizing: "border-box",
        padding: 0,
        margin: 0,
      },
      body: {
        color: "black",
        maxWidth: "100wh",
        minHeight: "100vh",
      },
      h2: {
        color: "black",
      },
      ul: {
        listStyleType: "none",
      },
      img: {
        display: "inline-block",
      },
    },
  },
});

export default theme;
