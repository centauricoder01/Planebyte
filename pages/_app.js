import 'bootstrap/dist/css/bootstrap.css';
import '../styles/globals.css';
import Head from 'next/head';

function MyApp({Component, pageProps}) {
  return (
    <>
      <Head>
        <meta name="application-name" content="PlaneByte" />
        <meta name="theme-color" content="#0A0057" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="PlaneByte" />
        <meta
          name="description"
          content="PlaneByte builds custom websites, e-commerce platforms, CMS solutions, and digital products that help businesses attract customers and grow online."
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="PlaneByte" />
        <meta property="og:title" content="PlaneByte | Innovative Digital Solutions" />
        <meta
          property="og:description"
          content="Custom website development, e-commerce websites, CMS solutions, and digital platforms for growing businesses."
        />
        <meta property="og:url" content="https://www.planebyte.com/" />
        <meta property="og:image" content="/planebyte-logo.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="PlaneByte | Innovative Digital Solutions" />
        <meta
          name="twitter:description"
          content="Business-friendly website and digital solution development from PlaneByte."
        />
        <meta name="twitter:image" content="/planebyte-logo.png" />
        <link rel="icon" type="image/png" href="/planebyte-favicon.png" />
        <link rel="apple-touch-icon" href="/planebyte-favicon.png" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
