import 'bootstrap/dist/css/bootstrap.css';
import '../styles/globals.css';
import Head from 'next/head';
import {SITE_URL} from '../components/SeoHead';

function MyApp({Component, pageProps}) {
  return (
    <>
      <Head>
        <meta name="application-name" content="PlaneByte" />
        <meta name="theme-color" content="#0A0057" />
        <meta name="author" content="PlaneByte" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="512x512" href="/planebyte-favicon.png" />
        <link rel="apple-touch-icon" sizes="512x512" href="/planebyte-favicon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify ({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'PlaneByte',
              url: SITE_URL,
              logo: `${SITE_URL}/planebyte-favicon.png`,
              sameAs: [],
            }),
          }}
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
