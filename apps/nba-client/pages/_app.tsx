import { AppProps } from 'next/app';
import Head from 'next/head';

import '../styles/globals.css';

export default function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>NBA Next | Home</title>
      </Head>
      <main className="app h-screen bg-gray-100">
        <Component {...pageProps} />
      </main>
    </>
  );
}
