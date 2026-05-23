import Head from 'next/head';

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
  const url = `${SITE_URL}${path}`;
  const schema = type === 'article'
    ? {
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline: title.replace (' | PlaneByte', ''),
        description,
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': url,
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
        name: 'PlaneByte Blog',
        description,
        url,
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
            name: 'Home',
            item: SITE_URL,
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Blog',
            item: `${SITE_URL}/blog`,
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: title.replace (' | PlaneByte', ''),
            item: url,
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
      <link rel="canonical" href={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type === 'article' ? 'article' : 'website'} />
      <meta property="og:site_name" content="PlaneByte" />
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
