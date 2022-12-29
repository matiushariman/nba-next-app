import { useMemo, useState } from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { PaletteMode } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { Header } from '../components/Header';
import { ColorModeContext } from '../context/ColorMode';

function CustomApp({ Component, pageProps }: AppProps) {
  const [mode, setMode] = useState<PaletteMode>('light');

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    []
  );

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode]
  );

  return (
    <>
      <Head>
        <title>Welcome to nba-client!</title>
      </Head>
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <main className="app">
            <Header />
            <Component {...pageProps} />
          </main>
          <CssBaseline />
        </ThemeProvider>
      </ColorModeContext.Provider>
    </>
  );
}

export default CustomApp;
