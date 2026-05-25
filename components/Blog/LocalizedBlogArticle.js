import Link from 'next/link';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import styles from '../../pages/blog/blog.module.css';
import BlogBreadcrumb from './BlogBreadcrumb';
import BlogSeoTags from './BlogSeoTags';
import {useI18n} from '../../lib/i18n';

const renderArticleBlock = block => {
  if (block.type === 'h2') {
    return <h2 key={block.text}>{block.text}</h2>;
  }

  if (block.type === 'h3') {
    return <h3 key={block.text}>{block.text}</h3>;
  }

  if (block.type === 'ul') {
    return (
      <ul key={block.items.join ('|')}>
        {block.items.map (item => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    );
  }

  if (block.type === 'ol') {
    return (
      <ol key={block.items.join ('|')}>
        {block.items.map (item => (
          <li key={item}>{item}</li>
        ))}
      </ol>
    );
  }

  if (block.type === 'cta') {
    return (
      <div className={styles.articleCta} key={block.title}>
        <h2>{block.title}</h2>
        <p>{block.text}</p>
        <Link legacyBehavior href="/contact-us">
          <a>{block.linkText}</a>
        </Link>
      </div>
    );
  }

  return <p key={block.text}>{block.text}</p>;
};

function LocalizedBlogArticle ({articleKey}) {
  const {t} = useI18n ();
  const article = t.blog.articles[articleKey];

  return (
    <>
      <BlogSeoTags
        title={article.seoTitle}
        description={article.description}
        path={article.path}
        keywords={article.keywords}
        type="article"
        publishedAt={article.publishedAtIso}
        readingTime={article.readingTimeIso}
      />
      <Navbar />
      <main className={styles.articlePage}>
        <section className={styles.articleHero}>
          <div className={styles.articleHeroInner}>
            <BlogBreadcrumb currentPage={article.title} />
            <span className={styles.eyebrow}>{article.eyebrow}</span>
            <h1>{article.title}</h1>
            <p>{article.intro}</p>
            <div className={styles.articleMeta}>
              {article.meta.map (item => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.articleLayout}>
          <article className={styles.article}>
            {article.blocks.map (renderArticleBlock)}
          </article>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default LocalizedBlogArticle;
