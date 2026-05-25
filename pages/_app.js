import 'bootstrap/dist/css/bootstrap.css';
import '../styles/globals.css';
import Head from 'next/head';
import {useI18n} from '../lib/i18n';

function MyApp({Component, pageProps}) {
  const {locale} = useI18n ();
  const appTitle = locale === 'de'
    ? 'PlaneByte | Innovative digitale Lösungen'
    : 'PlaneByte | Innovative Digital Solutions';
  const appDescription = locale === 'de'
    ? 'PlaneByte entwickelt individuelle Websites, E-Commerce-Plattformen, CMS-Lösungen und digitale Produkte, die Unternehmen helfen, Kunden zu gewinnen und online zu wachsen.'
    : 'PlaneByte builds custom websites, e-commerce platforms, CMS solutions, and digital products that help businesses attract customers and grow online.';
  const appOgDescription = locale === 'de'
    ? 'Individuelle Website-Entwicklung, E-Commerce-Websites, CMS-Lösungen und digitale Plattformen für wachsende Unternehmen.'
    : 'Custom website development, e-commerce websites, CMS solutions, and digital platforms for growing businesses.';
  const appTwitterDescription = locale === 'de'
    ? 'Geschäftsorientierte Website- und Digitalentwicklung von PlaneByte.'
    : 'Business-friendly website and digital solution development from PlaneByte.';

  return (
    <>
      <Head>
        <meta name="application-name" content="PlaneByte" />
        <meta name="theme-color" content="#0A0057" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="PlaneByte" />
        <meta
          name="description"
          content={appDescription}
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="PlaneByte" />
        <meta property="og:title" content={appTitle} />
        <meta
          property="og:description"
          content={appOgDescription}
        />
        <meta property="og:url" content="https://www.planebyte.com/" />
        <meta property="og:image" content="/planebyte-logo.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={appTitle} />
        <meta
          name="twitter:description"
          content={appTwitterDescription}
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
