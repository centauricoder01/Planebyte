import React, {useMemo, useState} from 'react';
import Link from 'next/link';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import styles from './blog.module.css';
import {BiSearchAlt2} from 'react-icons/bi';
import {BsArrowRight} from 'react-icons/bs';
import BlogSeoTags from '../../components/Blog/BlogSeoTags';
import {useI18n} from '../../lib/i18n';

function Blog () {
  const {t} = useI18n ();
  const {posts} = t.blog;
  const content = t.blog.list;
  const [searchText, setSearchText] = useState ('');
  const filteredBlogs = useMemo (() => {
    const query = searchText.trim ().toLowerCase ();

    if (!query) {
      return posts;
    }

    return posts.filter (blog => {
      const searchableText = [
        blog.title,
        blog.description,
        blog.author,
        blog.publishedAt,
        blog.readingTime,
        ...(blog.keywords || []),
      ]
        .join (' ')
        .toLowerCase ();

      return searchableText.includes (query);
    });
  }, [posts, searchText]);

  return (
    <>
      <BlogSeoTags
        title={t.blog.seo.title}
        description={t.blog.seo.description}
        path="/blog"
        keywords={t.blog.seo.keywords}
      />
      <Navbar />
      <main className={styles.blogPage}>
        <section className={styles.blogHero}>
          <h1>{content.title}</h1>
          <div className={styles.blog__input}>
            <input
              type="text"
              placeholder={content.searchPlaceholder}
              value={searchText}
              onChange={event => setSearchText (event.target.value)}
              aria-label={content.searchLabel}
            />
            <BiSearchAlt2 className={styles.searchIcon} />
          </div>
        </section>

        <section className={styles.blogListSection}>
          <div className={styles.blogListHeader}>
            <h2>{content.latest}</h2>
            <span>
              {filteredBlogs.length}{' '}
              {filteredBlogs.length === 1 ? content.articleSingular : content.articlePlural}
            </span>
          </div>

          <div className={styles.blog__cardGroup}>
            {filteredBlogs.map (blog => (
              <article className={styles.blog__card} key={blog.link}>
                <div className={styles.blog__cardBody}>
                  <div className={styles.blog__cardHeader}>
                    <small>{blog.publishedAt}</small>
                    <small>{blog.readingTime}</small>
                  </div>
                  <h3>{blog.title}</h3>
                  <p>{blog.description}</p>
                  <div className={styles.keywordList}>
                    {blog.keywords.slice (0, 3).map (keyword => (
                      <span key={keyword}>{keyword}</span>
                    ))}
                  </div>
                  <Link legacyBehavior href={blog.link}>
                    <a className={styles.readMoreLink}>
                      {content.readArticle} <BsArrowRight />
                    </a>
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {filteredBlogs.length === 0 && (
            <div className={styles.emptyState}>
              <h3>{content.emptyTitle}</h3>
              <p>{content.emptyText}</p>
            </div>
          )}
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Blog;
