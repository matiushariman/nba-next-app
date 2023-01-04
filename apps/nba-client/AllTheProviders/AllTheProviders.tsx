import { useMemo, useState } from 'react';
import { PaletteMode } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { CacheProvider, EmotionCache } from '@emotion/react';

import ColorModeContext from '../context/ColorModeContext';
import createTheme from '../src/createTheme';

import type { ReactNode } from 'react';

export interface AllTheProvidersProps {
  readonly children?: ReactNode;
  readonly emotionCache?: EmotionCache;
}

export const AllTheProviders = ({
  children,
  emotionCache,
}: AllTheProvidersProps) => {
  const [mode, setMode] = useState<PaletteMode>('light');

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    []
  );

  const theme = useMemo(() => createTheme(mode), [mode]);

  return (
    <CacheProvider value={emotionCache}>
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            {children}
          </LocalizationProvider>
          <CssBaseline />
        </ThemeProvider>
      </ColorModeContext.Provider>
    </CacheProvider>
  );
};
