import Navbar from '../components/Navbar/Navbar';
import styles from '../styles/Home.module.css';
import Image from 'next/image';
import Link from 'next/link';
import {useState} from 'react';
import laptop from '../public/images/laptop2.png';
import {HiOutlineDesktopComputer} from 'react-icons/hi';
import {BiSupport, BiGlobe} from 'react-icons/bi';
import {ImMobile} from 'react-icons/im';
import {SiProbot} from 'react-icons/si';
import {
  BsCart3,
  BsCartCheck,
  BsUiRadiosGrid,
  BsClockHistory,
  BsArrowRight,
} from 'react-icons/bs';
import {GiHealthNormal} from 'react-icons/gi';
import {
  AiOutlineHome,
  AiOutlineCloudServer,
  AiOutlineRobot,
  AiOutlineShoppingCart,
} from 'react-icons/ai';
import {FaGamepad, FaGraduationCap, FaHotel, FaUsers} from 'react-icons/fa';
import {RiMentalHealthLine, RiMoneyDollarCircleLine} from 'react-icons/ri';
import {MdOutlinePermMedia} from 'react-icons/md';
import {RiBankCardLine} from 'react-icons/ri';
import {FaRegFileCode} from 'react-icons/fa';
import {IoBulbOutline, IoFastFoodOutline} from 'react-icons/io5';
import {AiOutlineCalendar} from 'react-icons/ai';
import gamingProject from '../public/gaming.png';
import ryccaProject from '../public/rycca.png';
import gaonikaProject from '../public/gaonika-s.png';
import blissbriteProject from '../public/blissbrite.png';
import Footer from '../components/Footer/Footer';
import ContactSection from '../components/ContactSection/ContactSection';
import {useI18n} from '../lib/i18n';
import SeoHead from '../components/SeoHead';

const serviceHighlightIcons = [
  HiOutlineDesktopComputer,
  BsUiRadiosGrid,
  BsCartCheck,
];

const serviceIcons = [
  BiGlobe,
  ImMobile,
  SiProbot,
  AiOutlineCloudServer,
  AiOutlineShoppingCart,
  BsUiRadiosGrid,
];

const workCycleIcons = [
  BiGlobe,
  BsUiRadiosGrid,
  HiOutlineDesktopComputer,
  BsClockHistory,
  AiOutlineCloudServer,
  BiSupport,
];

const projectAssets = [
  {
    image: gamingProject,
    href: 'https://bgmilover.in',
  },
  {
    image: ryccaProject,
    href: 'https://www.findmeplot.com',
  },
  {
    image: gaonikaProject,
    href: 'https://www.gaonika.com',
  },
  {
    image: blissbriteProject,
    href: 'https://blissbrite.in',
  },
];

const industryIcons = [
  GiHealthNormal,
  RiMentalHealthLine,
  FaGamepad,
  BsCart3,
  RiMoneyDollarCircleLine,
  AiOutlineHome,
  IoFastFoodOutline,
  MdOutlinePermMedia,
  FaGraduationCap,
  FaUsers,
  RiBankCardLine,
  FaRegFileCode,
  IoBulbOutline,
  FaHotel,
  AiOutlineCalendar,
  AiOutlineRobot,
  AiOutlineCloudServer,
];

export default function Home () {
  const [showAllIndustries, setShowAllIndustries] = useState (false);
  const {t} = useI18n ();
  const content = t.home;
  const {seo} = content;
  const visibleIndustries = showAllIndustries
    ? content.industries.items
    : content.industries.items.slice (0, 6);

  return (
    <>
      <SeoHead
        title={seo.title}
        description={seo.description}
        keywords={seo.keywords}
        ogDescription={seo.ogDescription}
        path="/"
      />
      <header>
        <Navbar />
      </header>
      <main className={styles.landing}>
        <div className={`container-fluid row justify-content-between align-items-center ${styles.landingInner}`}>
          <div className={`col-md-7 ${styles.landingData}`}>
            <div className={styles.heroEyebrow}>{content.hero.eyebrow}</div>
            <h1>
              {content.hero.title.map (line => (
                <span key={line}>{line}</span>
              ))}
            </h1>
            <p>{content.hero.description}</p>
            <div className={styles.heroActions}>
              <Link legacyBehavior href="#services">
                <a className={`btn btn-light ${styles.lightBtn}`} style={{color: 'black'}}>
                  {content.hero.primaryAction}
                </a>
              </Link>
              <Link legacyBehavior href="/contact-us">
                <a className={styles.heroSecondaryBtn}>{content.hero.secondaryAction}</a>
              </Link>
            </div>
          </div>
          <div className={`col ${styles.landingImage}`}>
            <div>
              <Image
                src={laptop}
                alt={content.hero.imageAlt}
                placeholder="blur"
                width={480}
                height={400}
              />
            </div>
          </div>
        </div>
      </main>
      <section className={styles.serveCardGroups}>
        {content.serviceHighlights.map ((service, index) => {
          const Icon = serviceHighlightIcons[index];

          return (
            <div
              className={`${styles.serveCard} ${styles[`serveCard${index + 1}`]}`}
              key={service}
            >
              <p>{service}</p>
              <span className={styles.serveCard__icon_wrapper}>
                <Icon className={styles.serveCard__icon} />
              </span>
            </div>
          );
        })}
      </section>
      <section className={`my-5 py-5 ${styles.ourServices}`} id="services">
        <div className={`text-center ${styles.ourServices__header}`}>
          <h4>{content.services.eyebrow}</h4>
          <h2>{content.services.title}</h2>
        </div>
        {[0, 3].map (startIndex => (
          <div className="row my-5" key={startIndex}>
            {content.services.items.slice (startIndex, startIndex + 3).map ((service, index) => {
              const Icon = serviceIcons[startIndex + index];

              return (
                <div className="col-md-4 col-sm-12" key={service.title}>
                  <div className={`card ${styles.ourServices__card}`}>
                    <Icon className={styles.ourServices__card__icon} />
                    <h3>{service.title}</h3>
                    <p>{service.text}</p>
                  </div>
                </div>
              );
            })}
          </div>
        ))}
      </section>

      <section className={styles.workCycleSection}>
        <div className={styles.workCycleHeader}>
          <h5>{content.workCycle.eyebrow}</h5>
          <h2>{content.workCycle.title}</h2>
          <p>{content.workCycle.description}</p>
        </div>
        <div className={styles.workCycleGrid}>
          {content.workCycle.steps.map ((step, index) => {
            const Icon = workCycleIcons[index];

            return (
              <div className={styles.workCycleCard} key={step.title}>
                <div className={styles.workCycleCardHeader}>
                  <div className={styles.workCycleIcon}>
                    <Icon />
                  </div>
                  <span>{String (index + 1).padStart (2, '0')}</span>
                </div>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section id="portfolio" className={`container-fluid my-5 py-5 ${styles.blogSection}`}>
        <div className={styles.projectsHeader}>
          <h2 className={styles.blogSection__heading}>{content.portfolio.title}</h2>
          <p>{content.portfolio.description}</p>
        </div>
        <div className={styles.blogCardGroup}>
          {content.portfolio.projects.map ((project, index) => (
            <a
              className={styles.blogCard}
              href={projectAssets[index].href}
              target="_blank"
              rel="noreferrer"
              key={project.title}
            >
              <div className={styles.blogCard__img}>
                <Image
                  src={projectAssets[index].image}
                  alt={project.imageAlt}
                  placeholder="blur"
                />
              </div>
              <div className={styles.blogCard__titleWrapper}>
                <div className={styles.blogCard__titleContainer}>
                  <h4>{project.title}</h4>
                  <h6>{project.type}</h6>
                </div>
                <div className={styles.blogCard__icon__wrapper}>
                  <BsArrowRight className={styles.blogCard__icon} />
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section id="industries" className={`my-5 ${styles.globalSolutionSection}`}>
        <div className={styles.globalSolution__info}>
          <h5>{content.industries.eyebrow}</h5>
          <h2>{content.industries.title}</h2>
          <p>{content.industries.description}</p>
        </div>

        <div className={styles.globalSolution__cardGroup}>
          {visibleIndustries.map ((industry, index) => {
            const Icon = industryIcons[index];

            return (
              <div className={styles.globalSolutionCard} key={industry}>
                <div className={styles.globalSolutionCard__icon}>
                  <Icon />
                </div>
                <div className={styles.globalSolutionCard__title}>
                  <h6>{industry}</h6>
                </div>
              </div>
            );
          })}
        </div>
        {!showAllIndustries && (
          <button
            type="button"
            className={styles.industryViewMore}
            onClick={() => setShowAllIndustries (true)}
          >
            {content.industries.viewMore}
          </button>
        )}
        {showAllIndustries && (
          <button
            type="button"
            className={styles.industryViewMore}
            onClick={() => setShowAllIndustries (false)}
          >
            {content.industries.showLess}
          </button>
        )}
      </section>

      <ContactSection />
      <Footer />
    </>
  );
}
