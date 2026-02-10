import createTheme from "@mui/system/createTheme";

//TODO implement custom theme usage in the project
export const customTheme = createTheme({
  palette: {
    primary:  "var(--color-primary)" ,   
    secondary: "var(--color-secondary)",   
  },
  typography: {
    fontFamily: '"Inter", sans-serif',
  },
});