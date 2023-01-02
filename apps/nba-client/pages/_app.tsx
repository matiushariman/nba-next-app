import { AppProps } from 'next/app';
import Head from 'next/head';
import { CacheProvider, EmotionCache } from '@emotion/react';
import { createEmotionCache } from '@nba-app/ui';

import { AllTheProviders } from '../AllTheProviders';

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
    <CacheProvider value={emotionCache}>
      <AllTheProviders>
        <Head>
          <title>NBA Next | Home</title>
        </Head>
        <main className="app">
          <Component {...pageProps} />
        </main>
      </AllTheProviders>
    </CacheProvider>
  );
}
