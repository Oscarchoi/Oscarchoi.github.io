import { createTheme } from "@material-ui/core/styles";
import blue from "@material-ui/core/colors/blue";

const customColorTheme = {
  primary: {
    100: "#EDF5FA",
    200: "#DBEAF6",
    300: "#C0D3E6",
    400: "#A3B6CD",
    500: "#7E91AD",
    600: "#5C7094",
    700: "#3F537C",
    800: "#283964",
    900: "#182653",
    A100: "rgba(126, 145, 173, 0.08)",
    A200: "rgba(126, 145, 173, 0.16)",
    A300: "rgba(126, 145, 173, 0.24)",
    A400: "rgba(126, 145, 173, 0.32)",
    A500: "rgba(126, 145, 173, 0.4)",
    A600: "rgba(126, 145, 173, 0.48)",
  },
  success: {
    100: "#F2FBD9",
    200: "#E2F8B4",
    300: "#C7EA8A",
    400: "#A9D568",
    500: "#81BA3B",
    600: "#669F2B",
    700: "#4D851D",
    800: "#376B12",
    900: "#28590B",
    A100: "rgba(129, 186, 59, 0.08)",
    A200: "rgba(129, 186, 59, 0.16)",
    A300: "rgba(129, 186, 59, 0.24)",
    A400: "rgba(129, 186, 59, 0.32)",
    A500: "rgba(129, 186, 59, 0.4)",
    A600: "rgba(129, 186, 59, 0.48)",
  },
  info: {
    100: "#D7F5FE",
    200: "#B0E8FE",
    300: "#89D6FD",
    400: "#6BC2FB",
    500: "#3BA4F9",
    600: "#2B80D6",
    700: "#1D60B3",
    800: "#124390",
    900: "#0B2F77",
    A100: "rgba(59, 164, 249, 0.08)",
    A200: "rgba(59, 164, 249, 0.16)",
    A300: "rgba(59, 164, 249, 0.24)",
    A400: "rgba(59, 164, 249, 0.32)",
    A500: "rgba(59, 164, 249, 0.4)",
    A600: "rgba(59, 164, 249, 0.48)",
  },
  warning: {
    100: "#FEFBD1",
    200: "#FDF7A4",
    300: "#FBF076",
    400: "#F7E854",
    500: "#F2DC1D",
    600: "#D0BA15",
    700: "#AE9A0E",
    800: "#8C7A09",
    900: "#746305",
    A100: "rgba(242, 220, 29, 0.08)",
    A200: "rgba(242, 220, 29, 0.16)",
    A300: "rgba(242, 220, 29, 0.24)",
    A400: "rgba(242, 220, 29, 0.32)",
    A500: "rgba(242, 220, 29, 0.4)",
    A600: "rgba(242, 220, 29, 0.48)",
  },
  danger: {
    100: "#FFEBD8",
    200: "#FFD3B1",
    300: "#FFB48A",
    400: "#FF976D",
    500: "#FF673D",
    600: "#DB452C",
    700: "#B7291E",
    800: "#931313",
    900: "#7A0B14",
    A100: "rgba(255, 103, 61, 0.08)",
    A200: "rgba(255, 103, 61, 0.16)",
    A300: "rgba(255, 103, 61, 0.24)",
    A400: "rgba(255, 103, 61, 0.32)",
    A500: "rgba(255, 103, 61, 0.4)",
    A600: "rgba(255, 103, 61, 0.48)",
  },
};

const blueTheme = createTheme({
  palette: customColorTheme,
  //   palette: {
  //     primary: blue,
  //     background: {
  //       paper: "#F4F7FB",
  //     },
  //   },
});

export default blueTheme;
