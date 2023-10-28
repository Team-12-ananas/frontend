import { extendTheme } from "@mui/joy/";
// import colors from "./variables";

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
          primary: "#fff",
          secondary: "#1A1B22",
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
          // backgroundColor: "#5A9BFF",
          fontSize: "14px",
          // "&:disabled": {
          //   backgroundColor: "#B5B5B7",
          // },
          // "&:hover": {
          //   backgroundColor: "#1D6BF3",
          // },
        },
      },
    },
  },
});

export default theme;

/**
 *plain, soft,outlined
solidColor: "var(--joy-palette-common-white, #FFF)"
solidBg: "var(--joy-palette-primary-500, #0B6BCB)"
solidHoverBg: "var(--joy-palette-primary-600, #185EA5)"
solidActiveBg: "var(--joy-palette-primary-700, #12467B)"
solidDisabledColor: "var(--joy-palette-neutral-400, #9FA6AD)"
solidDisabledBg: "var(--joy-palette-neutral-100, #F0F4F8)"
 */
