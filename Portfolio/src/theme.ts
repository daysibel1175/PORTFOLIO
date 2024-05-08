import { createTheme, responsiveFontSizes } from "@mui/material";


let theme = createTheme({
  palette: {
    primary: {
      main: '#232323',
    },
    secondary: {
      main: "#232323",
    },
  },
  typography:{
    fontFamily:"fantasy"
  }
});

theme = responsiveFontSizes(theme)

export default theme;