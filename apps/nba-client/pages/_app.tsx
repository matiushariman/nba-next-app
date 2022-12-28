import { AppProps } from 'next/app';
import Head from 'next/head';
import CssBaseline from '@mui/material/CssBaseline';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to nba-client!</title>
      </Head>
      <main className="app">
        <Component {...pageProps} />
      </main>
      <CssBaseline />
    </>
  );
}

export default CustomApp;
