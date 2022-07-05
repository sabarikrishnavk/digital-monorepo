import { AppProps } from 'next/app';
import Head from 'next/head';
import './styles.css';
import { ThemeProvider } from 'next-themes'

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider>
        <Head>
          <title>Welcome to customercare-ui!</title>
        </Head>
        <main className="app">
          <Component {...pageProps} />
        </main>
      </ThemeProvider>
    </>
  );
}

export default CustomApp;
