import React, {useState, useEffect} from 'react';
import logo from '../../public/planebyte-logo.png';
import styles from './Footer.module.css';
import Image from 'next/image';
import Link from 'next/link';
import {FaFacebook, FaInstagram, FaLinkedin, FaTwitter} from 'react-icons/fa';

function Footer () {
  const [year, setYear] = useState (2023);
  useEffect (() => {
    let now = new Date ();
    let year = now.getFullYear ();
    setYear (year);
  }, []);
  return (
    <footer className={styles.footerSection}>
      <div className={styles.footerLogo}>
        <Image
          src={logo}
          alt="PlaneByte"
          className={styles.footerLogoImage}
          width={240}
          height={70}
        />

      </div>
      <div className={styles.link__area}>
        <div className={styles.footer__companyInfo}>
          <h3>About Us</h3>

          <div className={styles.footer__info}>
            <p>
              PlaneByte is a technology services and consulting company helping small businesses build, scale, and shine in today&apos;s digital world.
            </p>
          </div>
          <div className={styles.footer__social}>

            <a href="https://www.instagram.com/PlaneByte/" target={'_blank'}>
              <div className={styles.foooterIcon}>
                <FaInstagram />
              </div>
            </a>

            <a
              href="https://www.linkedin.com/company/PlaneByte-technology-solutions-private-limited"
              target={'_blank'}
            >
              <div className={styles.foooterIcon}>
                <FaLinkedin />
              </div>
            </a>

          </div>

          <div className={styles.footer__address}>
            <h5>Contact Us</h5>
            <div>
              <b>Email: </b>
              <a href="mailto:info@planebyte.com">
                info@planebyte.com
              </a>
            </div>
          </div>

        </div>

        <div className={styles.footer__links}>
          <h5>Services</h5>
          <Link legacyBehavior href="/#services">
            <a>
              Website Development
            </a>
          </Link>
          <Link legacyBehavior href="/#services">
            <a>
              Mobile App Development
            </a>
          </Link>

          <Link legacyBehavior href="/#services">
            <a>
              Machine Learning
            </a>
          </Link>

          <Link legacyBehavior href="/#services">
            <a>
              Software Development
            </a>
          </Link>

          <Link legacyBehavior href="/#services">
            <a>
              E-commerce Development
            </a>
          </Link>

          <Link legacyBehavior href="/#services">
            <a>
              CMS Development
            </a>
          </Link>
        </div>

        <div className={styles.footer__links}>
          <h5>Other</h5>
          <Link legacyBehavior href="/">
            <a>
              Home
            </a>
          </Link>

          <Link legacyBehavior href="/blog">
            <a>
              Blog
            </a>
          </Link>

          <Link legacyBehavior href="/terms-and-conditions">
            <a>
              Terms and Services
            </a>
          </Link>

          <Link legacyBehavior href="/privacy-policy">
            <a>
              Privacy Policy
            </a>
          </Link>

        </div>

      </div>
      <div className={styles.footer__copyright}>
        <small>
          &copy; 2023 - {year} PlaneByte Technology Solutions. All rights reserved.
        </small>
      </div>
    </footer>
  );
}

export default Footer;
