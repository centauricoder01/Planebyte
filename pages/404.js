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

export default function Custom404 () {
  return (
    <>
      <Head>
        <title>Page Not Found | PlaneByte</title>
        <meta
          name="description"
          content="The page you are looking for could not be found. Explore PlaneByte services, portfolio, blog, or contact our team."
        />
        <meta name="robots" content="noindex, follow" />
      </Head>
      <Navbar />
      <main className={styles.notFoundPage}>
        <section className={styles.hero}>
          <div className={styles.heroInner}>
            <div className={styles.copy}>
              <span className={styles.eyebrow}>Page not found</span>
              <h1>This page took a different route.</h1>
              <p>
                The link may be old, moved, or typed incorrectly. You can head back home,
                explore what PlaneByte builds, or start a project conversation.
              </p>

              <div className={styles.actions}>
                <Link legacyBehavior href="/">
                  <a className={styles.primaryAction}>
                    <BiHomeAlt />
                    Back to Home
                  </a>
                </Link>
                <Link legacyBehavior href="/contact-us">
                  <a className={styles.secondaryAction}>
                    <BiMessageRoundedDetail />
                    Contact Team
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
                  <span>/missing-page</span>
                </div>
                <div className={styles.errorMark}>404</div>
                <div className={styles.routeLine}>
                  <span />
                  <span />
                  <span />
                </div>
                <div className={styles.statusChip}>
                  <BiArrowBack />
                  Better ideas are one click away
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
