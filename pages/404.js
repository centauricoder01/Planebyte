import Head from 'next/head';
import Link from 'next/link';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import styles from './404.module.css';
import {
  BiArrowBack,
  BiHomeAlt,
  BiMessageRoundedDetail,
  BiSearchAlt,
} from 'react-icons/bi';
import {useI18n} from '../lib/i18n';

export default function Custom404 () {
  const {t} = useI18n ();
  const content = t.notFound;

  return (
    <>
      <Head>
        <title>{content.seo.title}</title>
        <meta
          name="description"
          content={content.seo.description}
        />
        <meta name="robots" content="noindex, follow" />
      </Head>
      <Navbar />
      <main className={styles.notFoundPage}>
        <section className={styles.hero}>
          <div className={styles.heroInner}>
            <div className={styles.copy}>
              <span className={styles.eyebrow}>{content.eyebrow}</span>
              <h1>{content.title}</h1>
              <p>{content.text}</p>

              <div className={styles.actions}>
                <Link legacyBehavior href="/">
                  <a className={styles.primaryAction}>
                    <BiHomeAlt />
                    {content.homeAction}
                  </a>
                </Link>
                <Link legacyBehavior href="/contact-us">
                  <a className={styles.secondaryAction}>
                    <BiMessageRoundedDetail />
                    {content.contactAction}
                  </a>
                </Link>
              </div>
            </div>

            <div className={styles.visualWrap} aria-hidden="true">
              <div className={styles.visualCard}>
                <div className={styles.windowBar}>
                  <span />
                  <span />
                  <span />
                </div>
                <div className={styles.searchLine}>
                  <BiSearchAlt />
                  <span>{content.missingPath}</span>
                </div>
                <div className={styles.errorMark}>404</div>
                <div className={styles.routeLine}>
                  <span />
                  <span />
                  <span />
                </div>
                <div className={styles.statusChip}>
                  <BiArrowBack />
                  {content.status}
                </div>
              </div>
              <div className={styles.orbitOne} />
              <div className={styles.orbitTwo} />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
