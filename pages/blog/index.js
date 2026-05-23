import React, {useMemo, useState} from 'react';
import Link from 'next/link';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import styles from './blog.module.css';
import {BiSearchAlt2} from 'react-icons/bi';
import {BsArrowRight} from 'react-icons/bs';
import {blogData} from '../../util/blog';
import BlogSeoTags from '../../components/Blog/BlogSeoTags';

function Blog () {
  const [searchText, setSearchText] = useState ('');
  const filteredBlogs = useMemo (() => {
    const query = searchText.trim ().toLowerCase ();

    if (!query) {
      return blogData;
    }

    return blogData.filter (blog => {
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
  }, [searchText]);

  return (
    <>
      <BlogSeoTags
        title="PlaneByte Blog | Website Development & Digital Growth Insights"
        description="Read practical PlaneByte articles on website development, online presence, business websites, SEO, and digital growth for business owners."
        path="/blog"
        keywords="website development blog, business website tips, digital growth, online presence, website SEO"
      />
      <Navbar />
      <main className={styles.blogPage}>
        <section className={styles.blogHero}>
          <h1>PlaneByte Blog</h1>
          <div className={styles.blog__input}>
            <input
              type="text"
              placeholder="Search articles..."
              value={searchText}
              onChange={event => setSearchText (event.target.value)}
              aria-label="Search blog articles"
            />
            <BiSearchAlt2 className={styles.searchIcon} />
          </div>
        </section>

        <section className={styles.blogListSection}>
          <div className={styles.blogListHeader}>
            <h2>Latest Articles</h2>
            <span>{filteredBlogs.length} article{filteredBlogs.length === 1 ? '' : 's'}</span>
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
                      Read article <BsArrowRight />
                    </a>
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {filteredBlogs.length === 0 && (
            <div className={styles.emptyState}>
              <h3>No matching articles found</h3>
              <p>Try searching for website, SEO, online presence, or custom website.</p>
            </div>
          )}
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Blog;
