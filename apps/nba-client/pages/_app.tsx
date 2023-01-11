import { AppProps } from 'next/app';
import Head from 'next/head';
import { EmotionCache } from '@emotion/react';

import { AllTheProviders } from '../AllTheProviders';
import createEmotionCache from '../src/createEmotionCache';
import '../styles/globals.css';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

interface CustomAppProps extends AppProps {
  readonly emotionCache?: EmotionCache;
}

export default function CustomApp({
  Component,
  emotionCache = clientSideEmotionCache,
  pageProps,
}: CustomAppProps) {
  return (
    <AllTheProviders emotionCache={emotionCache}>
      <Head>
        <title>NBA Next | Home</title>
      </Head>
      <main className="app">
        <Component {...pageProps} />
      </main>
    </AllTheProviders>
  );
}
