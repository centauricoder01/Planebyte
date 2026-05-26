import Head from 'next/head';
import {useI18n} from '../lib/i18n';

export const SITE_URL = 'https://planebyte.com';
export const DEFAULT_SOCIAL_IMAGE = `${SITE_URL}/planebyte-logo.png`;

function SeoHead ({
  title,
  description,
  keywords,
  ogDescription,
  path = '/',
  type = 'website',
  noindex = false,
}) {
  const {locale} = useI18n ();
  const normalizedPath = path === '/' ? '/' : path.replace (/\/$/, '');
  const localizedPath = locale === 'de' && normalizedPath !== '/'
    ? `/de${normalizedPath}`
    : locale === 'de'
      ? '/de'
      : normalizedPath;
  const canonicalUrl = `${SITE_URL}${localizedPath}`;
  const enUrl = `${SITE_URL}${normalizedPath}`;
  const deUrl = `${SITE_URL}${normalizedPath === '/' ? '/de' : `/de${normalizedPath}`}`;

  return (
    <Head>
      <title>{title}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta key="description" name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta
        key="robots"
        name="robots"
        content={noindex ? 'noindex, follow' : 'index, follow'}
      />
      <link rel="canonical" href={canonicalUrl} />
      <link rel="alternate" hrefLang="en" href={enUrl} />
      <link rel="alternate" hrefLang="de" href={deUrl} />
      <link rel="alternate" hrefLang="x-default" href={enUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={ogDescription || description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="PlaneByte" />
      <meta property="og:image" content={DEFAULT_SOCIAL_IMAGE} />
      <meta property="og:locale" content={locale === 'de' ? 'de_DE' : 'en_US'} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={ogDescription || description} />
      <meta name="twitter:image" content={DEFAULT_SOCIAL_IMAGE} />
    </Head>
  );
}

export default SeoHead;
