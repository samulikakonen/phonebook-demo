import Head from 'next/head';

import NavBar from './navbar';
import Footer from './footer';

interface LayoutProps {
  children: React.ReactNode | React.ReactNode[];
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Head>
        <title>Phonebook demo</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <NavBar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
