import { extendTheme } from "@mui/joy/";

const theme = extendTheme({
  fontWeight: {
    sm: 400,
  },
  typography: {
    h1: {
      fontFamily: "YS Display",
      fontSize: "34px",
      fontStyle: "normal",
      fontWeight: 400,
      lineHeight: "40px",
      color: "inherit",
    },
    h2: {
      fontFamily: "YS Display",
      fontSize: "24px",
      fontStyle: "normal",
      fontWeight: 400,
      lineHeight: "32px",
      color: "inherit",
    },
    h3: {
      fontFamily: "YS Display",
      fontSize: "20px",
      fontStyle: "normal",
      fontWeight: 400,
      lineHeight: "24px",
      color: "inherit",
    },
    "title-md": {
      fontFamily: "YS Text",
      fontSize: "18px",
      fontStyle: "normal",
      fontWeight: 400,
      lineHeight: "24px",
      color: "inherit",
    },
    "body-lg": {
      fontFamily: "YS Text",
      fontSize: "16px",
      fontStyle: "normal",
      fontWeight: 400,
      lineHeight: "20px",
      color: "inherit",
    },
    "body-md": {
      fontFamily: "YS Text",
      fontSize: "14px",
      fontStyle: "normal",
      fontWeight: 400,
      lineHeight: "20px",
      color: "inherit",
    },
    "body-sm": {
      fontFamily: "YS Text",
      fontSize: "13px",
      fontStyle: "normal",
      fontWeight: 400,
      lineHeight: "16px",
      color: "inherit",
    },
    "body-xs": {
      fontFamily: "YS Text",
      fontSize: "11px",
      fontStyle: "normal",
      fontWeight: 400,
      lineHeight: "12px",
      color: "inherit",
    },
  },
  colorSchemes: {
    light: {
      palette: {
        text: {
          primary: "#1A1B22",
          secondary: "#797981",
        },
      },
    },
  },
  components: {
    JoyButton: {
      styleOverrides: {
        root: {
          paddingBlock: "10px",
          paddingInline: "20px",
          borderRadius: 6,
          backgroundColor: "#5A9BFF",
          "&:disabled": {
            backgroundColor: "#B5B5B7",
          },
          "&:hover": {
            backgroundColor: "#1D6BF3",
          },
        },
      },
    },
  },
});

export default theme;
