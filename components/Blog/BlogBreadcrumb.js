import Link from 'next/link';
import styles from '../../pages/blog/blog.module.css';

function BlogBreadcrumb ({currentPage}) {
  const label =
    currentPage.length > 30 ? `${currentPage.slice (0, 30).trim ()}...` : currentPage;

  return (
    <nav className={styles.breadcrumb} aria-label="Breadcrumb">
      <Link legacyBehavior href="/">
        <a>Home</a>
      </Link>
      <span>/</span>
      <Link legacyBehavior href="/blog">
        <a>Blog</a>
      </Link>
      <span>/</span>
      <span aria-current="page" title={currentPage}>{label}</span>
    </nav>
  );
}

export default BlogBreadcrumb;
