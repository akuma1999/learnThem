import { createTheme } from '@mui/material';

declare module '@mui/material/styles' {
  interface Theme {
    custom: {
      buttonWidth: string;
    };
    font: {
      roboto: string;
      dancingScript: string;
      beauRivage: string;
    };
  }
  interface ThemeOptions {
    custom: {
      buttonWidth: string;
    };
    font: {
      roboto: string;
      dancingScript: string;
      beauRivage: string;
    };
  }
}

export const theme = createTheme({
  palette: {
    primary: {
      main: '#000',
    },
  },
  typography: {
    body1: {
      fontFamily: 'Comic Sans',
    },
  },
  custom: {
    buttonWidth: '200px',
  },
  font: {
    roboto: `'Beau Rivage', cursive;`,
    dancingScript: `'Dancing Script', cursive;`,
    beauRivage: `font-family: 'Roboto', sans-serif;`,
  },
});
