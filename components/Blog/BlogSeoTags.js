import Head from 'next/head';
import {useI18n} from '../../lib/i18n';

const SITE_URL = 'https://www.planebyte.com';

function BlogSeoTags ({
  title,
  description,
  path,
  keywords,
  type = 'website',
  publishedAt,
  modifiedAt,
  readingTime,
}) {
  const {locale, t} = useI18n ();
  const localizedPath = locale === 'de' ? `/de${path}` : path;
  const alternatePath = path;
  const localizedBlogPath = locale === 'de' ? '/de/blog' : '/blog';
  const blogName = t.blog.list.title;
  const localizedUrl = `${SITE_URL}${localizedPath}`;
  const schema = type === 'article'
    ? {
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline: title.replace (' | PlaneByte', ''),
        description,
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': localizedUrl,
        },
        author: {
          '@type': 'Organization',
          name: 'PlaneByte',
          url: SITE_URL,
        },
        publisher: {
          '@type': 'Organization',
          name: 'PlaneByte',
          logo: {
            '@type': 'ImageObject',
            url: `${SITE_URL}/planebyte-logo.png`,
          },
        },
        datePublished: publishedAt,
        dateModified: modifiedAt || publishedAt,
        timeRequired: readingTime,
      }
    : {
        '@context': 'https://schema.org',
        '@type': 'Blog',
        name: blogName,
        description,
        url: localizedUrl,
        publisher: {
          '@type': 'Organization',
          name: 'PlaneByte',
        },
      };

  const breadcrumbSchema = type === 'article'
    ? {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: t.blog.breadcrumb.home,
            item: SITE_URL,
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: t.blog.breadcrumb.blog,
            item: `${SITE_URL}${localizedBlogPath}`,
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: title.replace (' | PlaneByte', ''),
            item: localizedUrl,
          },
        ],
      }
    : null;

  return (
    <Head>
      <title>{title}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={localizedUrl} />
      <link rel="alternate" hrefLang="en" href={`${SITE_URL}${alternatePath}`} />
      <link rel="alternate" hrefLang="de" href={`${SITE_URL}/de${alternatePath}`} />
      <link rel="alternate" hrefLang="x-default" href={`${SITE_URL}${alternatePath}`} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={localizedUrl} />
      <meta property="og:type" content={type === 'article' ? 'article' : 'website'} />
      <meta property="og:site_name" content="PlaneByte" />
      <meta property="og:locale" content={locale === 'de' ? 'de_DE' : 'en_US'} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {type === 'article' && publishedAt && (
        <meta property="article:published_time" content={publishedAt} />
      )}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{__html: JSON.stringify (schema)}}
      />
      {breadcrumbSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{__html: JSON.stringify (breadcrumbSchema)}}
        />
      )}
    </Head>
  );
}

export default BlogSeoTags;
