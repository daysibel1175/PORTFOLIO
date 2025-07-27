import { createTheme, responsiveFontSizes } from "@mui/material";

declare module "@mui/material/styles" {
  interface Palette {
    custom: {
      sectionDark: string;
      sectionLight: string;
    };
    customText: {
      contrast: string;
    };
  }
  interface PaletteOptions {
    custom?: {
      sectionDark: string;
      sectionLight: string;
    };
    customText?: {
      contrast: string;
    };
  }
}

let theme = createTheme({
  palette: {
    primary: { main: '#2e2e2e', contrastText: '#f5f5f5' },
    secondary: { main: '#aaaaaa', contrastText: '#2e2e2e' },
    background: {
      default: '#ebebeb',
      paper: '#f7f7f7',
    },
    custom: {
      sectionDark: '#2e2e2e',
      sectionLight: '#ebebeb',
    },
    text: {
      primary: '#2e2e2e',
      secondary: '#555555',
    },
    customText: {
      contrast: '#f5f5f5', // texto claro sobre fundo escuro
    },

  },
  typography: {
    fontFamily: "'OpenDyslexic', 'Arial', sans-serif",
  },
});
 


theme = responsiveFontSizes(theme)

export default theme;