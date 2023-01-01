import { AppProps } from 'next/app';
import Head from 'next/head';

import { AllTheProviders } from '../AllTheProviders';

export default function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to nba-client!</title>
      </Head>
      <AllTheProviders>
        <main className="app">
          <Component {...pageProps} />
        </main>
      </AllTheProviders>
    </>
  );
}
