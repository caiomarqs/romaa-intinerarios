import React from 'react'
import Head from 'next/head';
import { SessionProvider } from 'next-auth/react'
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider } from '@emotion/react';

import { unstable_getServerSession } from 'next-auth';
import authOptions from './api/auth/[...nextauth]'

import {
  theme,
  createEmotionCache
} from '../src/theme';
import { ProtectedComponent } from '../src/components';

const clientSideEmotionCache = createEmotionCache();

const MyApp = ({
  Component,
  pageProps: {
    session,
    ...pageProps
  }
}) => {
  return (
    <CacheProvider value={clientSideEmotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <SessionProvider session={session}>
          {Component.auth
            ?
            (
              <ProtectedComponent>
                <Component {...pageProps} />
              </ProtectedComponent>
            )
            : <Component {...pageProps} />
          }
        </SessionProvider>
      </ThemeProvider>
    </CacheProvider>
  );
}


export async function getServerSideProps({ req, res }) {
  return {
    props: {
      session: await unstable_getServerSession(req, res, authOptions)
    }
  }
}

export default MyApp