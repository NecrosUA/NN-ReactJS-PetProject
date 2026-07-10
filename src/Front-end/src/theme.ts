import { createTheme } from "@mui/material/styles";

//TODO implement custom theme usage in the project
export const customTheme = createTheme({
  palette: {
    primary: {
      main: "#7749F8",
    },
    secondary: {
      main: "#6c757d",
    },
  },
  typography: {
    fontFamily: '"Inter", sans-serif',
  },
});