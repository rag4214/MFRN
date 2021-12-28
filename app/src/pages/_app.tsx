import './globals.scss';

import { ApolloProvider } from '@apollo/client';
import { NextComponentType } from 'next';
import { AppContext, AppInitialProps, AppProps } from 'next/app';
import Head from 'next/head';

import Footer from 'components/Footer';
import Header from 'components/Header';
import { useClient } from 'utils/apollo';

const MyApp: NextComponentType<AppContext, AppInitialProps, AppProps> = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <title>Create Next App</title>
      <meta name="description" content="Website Created Using Create Next App" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <ApolloProvider client={useClient(pageProps.incomingCache)}>
      <Header />
      <main>
        <Component {...pageProps} />
      </main>
      <Footer />
    </ApolloProvider>
  </>
);

export default MyApp;
