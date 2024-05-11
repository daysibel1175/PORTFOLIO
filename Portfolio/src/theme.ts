import { createTheme, responsiveFontSizes } from "@mui/material";


let theme = createTheme({
  palette: {
    primary: {
      main: '#232323',
    },
    secondary: {
      main: "#ff0033",
    },
  },
  typography:{
    fontFamily:"Times New Roman"
  }
});

theme = responsiveFontSizes(theme)

export default theme;