import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Router from 'next/router';
import { useEffect, useState } from 'react';

import Layout from '../components/layout';

export default function App({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const start = () => {
      console.log('Loading new page...');
      setLoading(true);
    };
    const end = () => {
      console.log('Page load finished.');
      setLoading(false);
    };
    Router.events.on('routeChangeStart', start);
    Router.events.on('routeChangeComplete', end);
    Router.events.on('routeChangeError', end);
    return () => {
      Router.events.off('routeChangeStart', start);
      Router.events.off('routeChangeComplete', end);
      Router.events.off('routeChangeError', end);
    };
  }, []);

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
