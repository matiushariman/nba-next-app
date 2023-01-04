import { Roboto } from '@next/font/google';
import { createTheme as createMuiTheme } from '@mui/material/styles';

import type { PaletteMode } from '@mui/material';

export const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  fallback: ['Helvetica', 'Arial', 'sans-serif'],
});

// Create a theme instance.
const createTheme = (mode: PaletteMode = 'light') =>
  createMuiTheme({
    palette: {
      mode,
    },
    typography: {
      fontFamily: roboto.style.fontFamily,
    },
  });

export default createTheme;
