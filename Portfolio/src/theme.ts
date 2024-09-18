import { createTheme, responsiveFontSizes } from "@mui/material";


let theme = createTheme({
  palette: {
    primary: {
      main: '#232323',
    },
    secondary: {
      main: "#999999",
    },
  },
  typography:{
    fontFamily:"Poppins, sans serif"
  }
});

theme = responsiveFontSizes(theme)

export default theme;