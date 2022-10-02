import React from 'react'
import Head from 'next/head';
import { SessionProvider } from 'next-auth/react'
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider } from '@emotion/react';
import {
  theme,
  createEmotionCache
} from '../src/theme';

const clientSideEmotionCache = createEmotionCache();

const MyApp = ({ Component, pageProps }) => {

  return (
    <CacheProvider value={clientSideEmotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <SessionProvider session={pageProps.session}>
          <Component {...pageProps} />
        </SessionProvider>
      </ThemeProvider>
    </CacheProvider>
  );
}

export default MyApp