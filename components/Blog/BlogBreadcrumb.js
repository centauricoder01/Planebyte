import Link from 'next/link';
import styles from '../../pages/blog/blog.module.css';
import {useI18n} from '../../lib/i18n';

function BlogBreadcrumb ({currentPage}) {
  const {t} = useI18n ();
  const label =
    currentPage.length > 30 ? `${currentPage.slice (0, 30).trim ()}...` : currentPage;

  return (
    <nav className={styles.breadcrumb} aria-label="Breadcrumb">
      <Link legacyBehavior href="/">
        <a>{t.blog.breadcrumb.home}</a>
      </Link>
      <span>/</span>
      <Link legacyBehavior href="/blog">
        <a>{t.blog.breadcrumb.blog}</a>
      </Link>
      <span>/</span>
      <span aria-current="page" title={currentPage}>{label}</span>
    </nav>
  );
}

export default BlogBreadcrumb;
