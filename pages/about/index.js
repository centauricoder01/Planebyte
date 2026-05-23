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

const values = [
  {
    icon: HiOutlineLightBulb,
    title: 'Clear Planning',
    text: 'We understand your business, audience, pages, and goals before design or development starts.',
  },
  {
    icon: RiTeamLine,
    title: 'Focused Team',
    text: 'A small team works closely with you, keeps communication simple, and moves with your priorities.',
  },
  {
    icon: BsShieldCheck,
    title: 'Reliable Build',
    text: 'We create responsive, production-ready websites that look polished and work smoothly on all screens.',
  },
  {
    icon: BsGraphUp,
    title: 'Growth Ready',
    text: 'We keep the structure flexible so you can add pages, content, and features as your business grows.',
  },
];

function AboutUs () {
  return (
    <div className={styles.aboutPage}>
      <Head>
        <title>About PlaneByte | Business Website Development Company</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="PlaneByte helps businesses build custom websites, e-commerce stores, CMS platforms, and digital solutions that support real growth."
        />
      </Head>
      <Navbar />
      <main>
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <span className={styles.eyebrow}>About PlaneByte</span>
            <h1>Helping businesses look credible and grow online.</h1>
            <p>
              PlaneByte helps business owners turn ideas into clean, responsive, customer-ready websites, e-commerce stores, CMS platforms, and digital solutions.
            </p>
            <div className={styles.heroActions}>
              <Link legacyBehavior href="/contact-us">
                <a className={styles.primaryAction}>Discuss Your Project</a>
              </Link>
              <Link legacyBehavior href="/#services">
                <a className={styles.secondaryAction}>View Services</a>
              </Link>
            </div>
          </div>
          <div className={styles.heroImage}>
            <Image
              src={aboutImg}
              alt="PlaneByte team planning a digital project"
              fill
              sizes="(max-width: 900px) 100vw, 44vw"
              priority
            />
          </div>
        </section>

        <section className={styles.statsSection}>
          <div>
            <strong>Custom</strong>
            <span>Websites and digital platforms built around your business goals</span>
          </div>
          <div>
            <strong>17+</strong>
            <span>Industries supported with business-friendly digital solutions</span>
          </div>
          <div>
            <strong>Launch</strong>
            <span>Clear planning, responsive development, testing, and support</span>
          </div>
        </section>

        <section className={styles.storySection}>
          <div className={styles.sectionCopy}>
            <span className={styles.eyebrow}>Our Story</span>
            <h2>Built for business owners who need clarity, not confusion.</h2>
            <p>
              PlaneByte was created to make digital development easier for businesses that want to launch, sell, manage content, or modernize the way they work.
            </p>
            <p>
              From a first website to a custom platform, our goal is to help you understand what should be built, why it matters, and how it can support your next stage of growth.
            </p>
          </div>
          <div className={styles.storyImage}>
            <Image src={storyImg} alt="PlaneByte project discussion" fill sizes="(max-width: 900px) 100vw, 42vw" />
          </div>
        </section>

        <section className={styles.valuesSection}>
          <div className={styles.sectionHeader}>
            <span className={styles.eyebrow}>How We Work</span>
            <h2>Simple, practical, and built around outcomes.</h2>
          </div>
          <div className={styles.valueGrid}>
            {values.map(({icon: Icon, title, text}) => (
              <div className={styles.valueCard} key={title}>
                <Icon className={styles.valueIcon} />
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.founderSection}>
          <div className={styles.founderCard}>
            <Image
              src={founderImg}
              className={styles.founderImage}
              alt="Rajendra Patel"
              width={190}
              height={190}
            />
            <div>
              <span className={styles.eyebrow}>Founder Note</span>
              <h2>Led with a practical, business-first mindset.</h2>
              <p>
                Rajendra Patel leads PlaneByte with a focus on clear communication, thoughtful design, reliable development, and long-term support. The goal is simple: help business owners move from idea to launch with confidence.
              </p>
              <strong>Rajendra Patel, Founder</strong>
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
