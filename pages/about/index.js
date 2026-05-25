import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import ContactSection from '../../components/ContactSection/ContactSection';
import styles from './about.module.css';
import aboutImg from '../../public/images/aboutUs.jpg';
import storyImg from '../../public/images/story.jpg';
import founderImg from '../../public/founder.png';
import {BsGraphUp, BsShieldCheck} from 'react-icons/bs';
import {HiOutlineLightBulb} from 'react-icons/hi';
import {RiTeamLine} from 'react-icons/ri';
import {useI18n} from '../../lib/i18n';

const valueIcons = [HiOutlineLightBulb, RiTeamLine, BsShieldCheck, BsGraphUp];

function AboutUs () {
  const {t} = useI18n ();
  const content = t.about;

  return (
    <div className={styles.aboutPage}>
      <Head>
        <title>{content.seo.title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content={content.seo.description}
        />
      </Head>
      <Navbar />
      <main>
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <span className={styles.eyebrow}>{content.hero.eyebrow}</span>
            <h1>{content.hero.title}</h1>
            <p>{content.hero.text}</p>
            <div className={styles.heroActions}>
              <Link legacyBehavior href="/contact-us">
                <a className={styles.primaryAction}>{content.hero.primaryAction}</a>
              </Link>
              <Link legacyBehavior href="/#services">
                <a className={styles.secondaryAction}>{content.hero.secondaryAction}</a>
              </Link>
            </div>
          </div>
          <div className={styles.heroImage}>
            <Image
              src={aboutImg}
              alt={content.hero.imageAlt}
              fill
              sizes="(max-width: 900px) 100vw, 44vw"
              priority
            />
          </div>
        </section>

        <section className={styles.statsSection}>
          {content.stats.map (stat => (
            <div key={stat.value}>
              <strong>{stat.value}</strong>
              <span>{stat.text}</span>
            </div>
          ))}
        </section>

        <section className={styles.storySection}>
          <div className={styles.sectionCopy}>
            <span className={styles.eyebrow}>{content.story.eyebrow}</span>
            <h2>{content.story.title}</h2>
            {content.story.paragraphs.map (paragraph => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <div className={styles.storyImage}>
            <Image
              src={storyImg}
              alt={content.story.imageAlt}
              fill
              sizes="(max-width: 900px) 100vw, 42vw"
            />
          </div>
        </section>

        <section className={styles.valuesSection}>
          <div className={styles.sectionHeader}>
            <span className={styles.eyebrow}>{content.valuesIntro.eyebrow}</span>
            <h2>{content.valuesIntro.title}</h2>
          </div>
          <div className={styles.valueGrid}>
            {content.values.map ((value, index) => {
              const Icon = valueIcons[index];

              return (
                <div className={styles.valueCard} key={value.title}>
                  <Icon className={styles.valueIcon} />
                  <h3>{value.title}</h3>
                  <p>{value.text}</p>
                </div>
              );
            })}
          </div>
        </section>

        <section className={styles.founderSection}>
          <div className={styles.founderCard}>
            <Image
              src={founderImg}
              className={styles.founderImage}
              alt={content.founder.imageAlt}
              width={190}
              height={190}
            />
            <div>
              <span className={styles.eyebrow}>{content.founder.eyebrow}</span>
              <h2>{content.founder.title}</h2>
              <p>{content.founder.text}</p>
              <strong>{content.founder.signature}</strong>
            </div>
          </div>
        </section>

        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default AboutUs;
