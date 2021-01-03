import type { AppProps /*, AppContext */ } from 'next/app';
import Head from 'next/head';
// files

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Implement Various React Libraries</title>
        {/* meta */}
        <meta charSet="UTF-8" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />

        {/* link */}
        <link rel="icon" href="favicon.ico" />
        <link
          href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css"
          rel="stylesheet"
        />
      </Head>

      <Component {...pageProps} />
    </>
  );
}
