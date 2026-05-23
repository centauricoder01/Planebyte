import Head from "next/head";
import Navbar from '../components/Navbar/Navbar';
import styles from '../styles/Home.module.css';
import Image from 'next/image';
import Link from 'next/link';
import {useState} from 'react';
import laptop from '../public/images/laptop2.png';
import {HiOutlineDesktopComputer} from 'react-icons/hi';
import {BiSupport,BiGlobe} from 'react-icons/bi';
import {ImMobile} from 'react-icons/im';
import {SiProbot} from 'react-icons/si';
import {BsCart3,BsCartCheck,BsUiRadiosGrid,BsClockHistory,BsArrowRight} from 'react-icons/bs';
import {GiHealthNormal} from 'react-icons/gi';
import {AiOutlineHome,AiOutlineCloudServer,AiOutlineRobot,AiOutlineShoppingCart} from 'react-icons/ai';
import {FaGamepad,FaGraduationCap,FaHotel,FaUsers} from 'react-icons/fa';
import {RiMentalHealthLine,RiMoneyDollarCircleLine} from 'react-icons/ri';
import {MdOutlinePermMedia} from 'react-icons/md';
import {RiBankCardLine} from 'react-icons/ri';
import {FaRegFileCode} from 'react-icons/fa';
import {IoBulbOutline,IoFastFoodOutline} from 'react-icons/io5';
import {AiOutlineCalendar} from 'react-icons/ai';
import gamingProject from '../public/gaming.png';
import ryccaProject from '../public/rycca.png';
import gaonikaProject from '../public/gaonika-s.png';
import Footer from "../components/Footer/Footer";
import ContactSection from "../components/ContactSection/ContactSection";

export default function Home () {
  const [showAllIndustries, setShowAllIndustries] = useState (false);
  const industries = [
    {title: 'Healthcare', icon: <GiHealthNormal />},
    {title: 'Insurance', icon: <RiMentalHealthLine />},
    {title: 'Gaming', icon: <FaGamepad />},
    {title: 'Retail', icon: <BsCart3 />},
    {title: 'Payments', icon: <RiMoneyDollarCircleLine />},
    {title: 'Real Estate', icon: <AiOutlineHome />},
    {title: 'Food & Beverages', icon: <IoFastFoodOutline />},
    {title: 'Media & Entertainment', icon: <MdOutlinePermMedia />},
    {title: 'E-Learning & Education', icon: <FaGraduationCap />},
    {title: 'Human Capital Management', icon: <FaUsers />},
    {title: 'Banking & Finance', icon: <RiBankCardLine />},
    {title: 'Software Development', icon: <FaRegFileCode />},
    {title: 'Informational Services', icon: <IoBulbOutline />},
    {title: 'Hospitality & Travel', icon: <FaHotel />},
    {title: 'Meetings & Events', icon: <AiOutlineCalendar />},
    {title: 'Supply Chain', icon: <AiOutlineRobot />},
    {title: 'Cloud Solutions', icon: <AiOutlineCloudServer />},
  ];
  const visibleIndustries = showAllIndustries ? industries : industries.slice (0, 6);

  return (
    <>
  <Head>
  <title>PlaneByte | Custom Website & Digital Solution Development</title>
   <meta name="viewport" content="width=device-width, initial-scale=1" />
   <meta name='keywords'
         content='custom website development, website development company, ecommerce website development, CMS development, CRM development, business website development, digital solutions, PlaneByte'
         />

        <meta
          name="description"
          content="PlaneByte creates custom business websites, e-commerce platforms, CMS solutions, and digital products that help companies attract customers and grow online."
        />
        <link rel="canonical" href="https://www.planebyte.com/" />
        <meta property="og:title" content="PlaneByte | Custom Website & Digital Solution Development" />
        <meta
          property="og:description"
          content="Build a customer-ready website, e-commerce platform, CMS, or digital product with PlaneByte."
        />
        <meta property="og:url" content="https://www.planebyte.com/" />
  </Head>
  <header>
     <Navbar />
  </header>
  <main className={styles.landing}>
    <div className={`container-fluid row justify-content-between align-items-center ${styles.landingInner}`}>
        <div className={`col-md-7 ${styles.landingData}`}>
          <div className={styles.heroEyebrow}>Innovative Digital Solutions</div>
          <h1>
            <span>Empower Your Business</span>
            <span>with Personalized</span>
            <span>Solutions</span>
          </h1>
          <p>
          We help businesses turn ideas into reliable websites, apps, and digital platforms that attract customers, simplify daily work, and support long-term growth.
          </p>
          <div className={styles.heroActions}>
            <Link legacyBehavior href="#services">
              <a className={`btn btn-light ${styles.lightBtn}`} style={{color:'black'}}>Explore Services</a>
            </Link>
            <Link legacyBehavior href="/contact-us">
              <a className={styles.heroSecondaryBtn}>Project Discussion</a>
            </Link>
          </div>
        </div>
        <div className={`col ${styles.landingImage}`}>
         <div>
         <Image src={laptop} placeholder="blur" width={480} height={400} />
         </div>
        
        </div>
    </div>
  </main>
  <section className={styles.serveCardGroups}>
    <div className={`${styles.serveCard} ${styles.serveCard1}`}>
      <p>Custom Website Development</p>
      <span className={styles.serveCard__icon_wrapper}>
      <HiOutlineDesktopComputer className={styles.serveCard__icon}/>
      </span>
    </div>
    <div className={`${styles.serveCard} ${styles.serveCard2}`}>
      <p>Software Development</p>
      <span className={styles.serveCard__icon_wrapper}>
      <BsUiRadiosGrid className={styles.serveCard__icon} />
      </span>
    </div>
    <div className={`${styles.serveCard} ${styles.serveCard3}`}>
      <p>E-commerce Website Development</p>
      <span className={styles.serveCard__icon_wrapper}>
      <BsCartCheck className={styles.serveCard__icon}/>
      </span>
    </div>
  </section>
  <section className={`my-5 py-5 ${styles.ourServices}`} id="services">
      <div className={`text-center ${styles.ourServices__header}`}>
            <h4>Our Services</h4>
            <h2>
            We Offer a Wide
              Variety of IT Services
              </h2>
      </div>
      <div className="row my-5">
         <div className="col-md-4 col-sm-12">
          <div className={`card ${styles.ourServices__card}`}>
              <BiGlobe className={styles.ourServices__card__icon}/>
              
              <h3>Website Development</h3>
              <p>
              Creating Responsive, Beautiful, High Performance Websites Using all modern tech stack
              </p>
          </div>
         </div>
         <div className="col-md-4 col-sm-12">
          <div className={`card ${styles.ourServices__card}`}>
              <ImMobile className={styles.ourServices__card__icon}/>
              
              <h3>Mobile App Development</h3>
              <p>
              We build cross platform apps, android apps, iOS Apps. Reach to millions of mobile users via Mobile app.Our experience makes us stand out from other Mobile app development.

              
              </p>
          </div>
         </div>
         <div className="col-md-4 col-sm-12">
          <div className={`card ${styles.ourServices__card}`}>
              <SiProbot className={styles.ourServices__card__icon}/>
              
              <h3>Ai & Machine Learning</h3>
              <p>
              Predicting business over data and Data Insights using Machine learning, Data Science, Big Data and Data Analytics.  Automates manual or repetitive Work using AI enables solutions.
              </p>
          </div>
         </div>

         
        
      </div>

      <div className="row my-5">
         <div className="col-md-4 col-sm-12">
          <div className={`card ${styles.ourServices__card}`}>
              <AiOutlineCloudServer className={styles.ourServices__card__icon}/>
              
              <h3>Cloud & Devops</h3>
              <p>
              Online Premise infrastructure Setup, Deployment and Development to Production deployment.
              </p>
          </div>
         </div>
         <div className="col-md-4 col-sm-12">
          <div className={`card ${styles.ourServices__card}`}>
              <AiOutlineShoppingCart className={styles.ourServices__card__icon}/>
              
              <h3>CMS & Ecommerce</h3>
              <p>
              Customer data management, ERP. E-commerce development
              
              </p>
          </div>
         </div>
         <div className="col-md-4 col-sm-12">
          <div className={`card ${styles.ourServices__card}`}>
              <BsUiRadiosGrid className={styles.ourServices__card__icon}/>
              
              <h3>Application Development</h3>
              <p>
              We carry more than just good coding skills.
              Our experience makes us stand out from other cross platform services.
              </p>
          </div>
         </div>
      </div>
  </section>


  <section className={styles.workCycleSection}>
    <div className={styles.workCycleHeader}>
      <h5>Work Cycle</h5>
      <h2>How We Take Your Website From Idea to Launch</h2>
      <p>
        A clear, collaborative process helps you know what is happening, what comes next, and how your website will support your business goals.
      </p>
    </div>
    <div className={styles.workCycleGrid}>
      <div className={styles.workCycleCard}>
        <div className={styles.workCycleCardHeader}>
          <div className={styles.workCycleIcon}><BiGlobe /></div>
          <span>01</span>
        </div>
        <h3>Discovery & Planning</h3>
        <p>We understand your business, audience, goals, required pages, and the result you want from the website.</p>
      </div>
      <div className={styles.workCycleCard}>
        <div className={styles.workCycleCardHeader}>
          <div className={styles.workCycleIcon}><BsUiRadiosGrid /></div>
          <span>02</span>
        </div>
        <h3>Structure & Design</h3>
        <p>We map the user journey, plan the content flow, and create a clean design that matches your brand.</p>
      </div>
      <div className={styles.workCycleCard}>
        <div className={styles.workCycleCardHeader}>
          <div className={styles.workCycleIcon}><HiOutlineDesktopComputer /></div>
          <span>03</span>
        </div>
        <h3>Website Development</h3>
        <p>We build responsive pages, connect forms, add features, and make sure the site works smoothly on all screens.</p>
      </div>
      <div className={styles.workCycleCard}>
        <div className={styles.workCycleCardHeader}>
          <div className={styles.workCycleIcon}><BsClockHistory /></div>
          <span>04</span>
        </div>
        <h3>Review & Testing</h3>
        <p>We test speed, layout, mobile behavior, links, forms, and content before asking for your final approval.</p>
      </div>
      <div className={styles.workCycleCard}>
        <div className={styles.workCycleCardHeader}>
          <div className={styles.workCycleIcon}><AiOutlineCloudServer /></div>
          <span>05</span>
        </div>
        <h3>Launch</h3>
        <p>We prepare deployment, connect your domain, verify the live website, and make the launch smooth.</p>
      </div>
      <div className={styles.workCycleCard}>
        <div className={styles.workCycleCardHeader}>
          <div className={styles.workCycleIcon}><BiSupport /></div>
          <span>06</span>
        </div>
        <h3>Support & Growth</h3>
        <p>After launch, we help with updates, improvements, new pages, and features as your business grows.</p>
      </div>
    </div>
  </section>

  <section id="portfolio" className={`container-fluid my-5 py-5 ${styles.blogSection}`}>
    <div className={styles.projectsHeader}>
      <h2 className={styles.blogSection__heading}>Your Portfolio</h2>
      <p>Explore a focused range of products we have delivered for clients across industries.</p>
    </div>
    <div className={styles.blogCardGroup}>
      <a className={styles.blogCard} href="https://bgmilover.in" target="_blank" rel="noreferrer">
        <div className={styles.blogCard__img}>
          <Image src={gamingProject} alt="BGMILover gaming tournament website" placeholder="blur" />
        </div>
        <div className={styles.blogCard__titleWrapper}>
          <div className={styles.blogCard__titleContainer}>
            <h4>BGMILover</h4>
            <h6>Gaming Tournament Website</h6>
          </div>
          <div className={styles.blogCard__icon__wrapper}>
            <BsArrowRight className={styles.blogCard__icon} />
          </div>
        </div>
      </a>

      <a className={styles.blogCard} href="https://www.findmeplot.com" target="_blank" rel="noreferrer">
        <div className={styles.blogCard__img}>
          <Image src={ryccaProject} alt="Find Me Plot real estate website" placeholder="blur" />
        </div>
        <div className={styles.blogCard__titleWrapper}>
          <div className={styles.blogCard__titleContainer}>
            <h4>Find Me Plot</h4>
            <h6>Real Estate Website</h6>
          </div>
          <div className={styles.blogCard__icon__wrapper}>
            <BsArrowRight className={styles.blogCard__icon} />
          </div>
        </div>
      </a>

      <a className={styles.blogCard} href="https://www.gaonika.com" target="_blank" rel="noreferrer">
        <div className={styles.blogCard__img}>
          <Image src={gaonikaProject} alt="Gaonika beauty cosmetic website" placeholder="blur" />
        </div>
        <div className={styles.blogCard__titleWrapper}>
          <div className={styles.blogCard__titleContainer}>
            <h4>Gaonika</h4>
            <h6>Beauty Cosmetic Website</h6>
          </div>
          <div className={styles.blogCard__icon__wrapper}>
            <BsArrowRight className={styles.blogCard__icon} />
          </div>
        </div>
      </a>
    </div>
  </section>


  <section id="industries" className={`my-5 ${styles.globalSolutionSection}`}>
      <div className={styles.globalSolution__info}>
        <h5>Industries</h5>
        <h2>Industries We Serve</h2>
        <p>We build business-ready websites and digital platforms for different industries, with layouts, content flow, and features shaped around each customer journey.</p>
      </div>

      <div className={styles.globalSolution__cardGroup}>
        {visibleIndustries.map (industry => (
          <div className={styles.globalSolutionCard} key={industry.title}>
            <div className={styles.globalSolutionCard__icon}>
              {industry.icon}
            </div>
            <div className={styles.globalSolutionCard__title}>
              <h6>{industry.title}</h6>
            </div>
          </div>
        ))}
      </div>
      {!showAllIndustries && (
        <button
          type="button"
          className={styles.industryViewMore}
          onClick={() => setShowAllIndustries (true)}
        >
          View More
        </button>
      )}
      {showAllIndustries && (
        <button
          type="button"
          className={styles.industryViewMore}
          onClick={() => setShowAllIndustries (false)}
        >
          Show Less
        </button>
      )}
  </section>

<ContactSection />

  

  <Footer />

  

  
  
    </>
    
  );
}
