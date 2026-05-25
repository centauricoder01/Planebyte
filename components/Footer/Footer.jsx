import React, {useState, useEffect} from 'react';
import logo from '../../public/planebyte-logo.png';
import styles from './Footer.module.css';
import Image from 'next/image';
import Link from 'next/link';
import {FaInstagram, FaLinkedin} from 'react-icons/fa';
import {useI18n} from '../../lib/i18n';

function Footer () {
  const [year, setYear] = useState (2023);
  const {t} = useI18n ();
  const footer = t.common.footer;
  const footerServiceLinks = [
    {label: footer.serviceLinks[0], href: '/#services'},
    {label: footer.serviceLinks[1], href: '/#services'},
    {label: footer.serviceLinks[2], href: '/#services'},
    {label: footer.serviceLinks[3], href: '/#services'},
    {label: footer.serviceLinks[4], href: '/#services'},
    {label: footer.serviceLinks[5], href: '/#services'},
  ];
  const footerOtherLinks = [
    {label: footer.home, href: '/'},
    {label: footer.blog, href: '/blog'},
    {label: footer.terms, href: '/terms-and-conditions'},
    {label: footer.privacy, href: '/privacy-policy'},
  ];

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
          <h3>{footer.aboutTitle}</h3>

          <div className={styles.footer__info}>
            <p>{footer.aboutText}</p>
          </div>
          <div className={styles.footer__social}>

            <a href="https://www.instagram.com/planebyte" target={'_blank'}>
              <div className={styles.foooterIcon}>
                <FaInstagram />
              </div>
            </a>

            <a
              href="https://www.linkedin.com/company/planebyte"
              target={'_blank'}
            >
              <div className={styles.foooterIcon}>
                <FaLinkedin />
              </div>
            </a>

          </div>

          <div className={styles.footer__address}>
            <h5>{footer.contactTitle}</h5>
            <div>
              <b>{footer.emailLabel} </b>
              <a href="mailto:rajendra@rpatel.tech">
                rajendra@rpatel.tech
              </a>
            </div>
          </div>

        </div>

        <div className={styles.footer__links}>
          <h5>{footer.servicesTitle}</h5>
          {footerServiceLinks.map (link => (
            <Link legacyBehavior href={link.href} key={link.label}>
              <a>{link.label}</a>
            </Link>
          ))}
        </div>

        <div className={styles.footer__links}>
          <h5>{footer.otherTitle}</h5>
          {footerOtherLinks.map (link => (
            <Link legacyBehavior href={link.href} key={link.label}>
              <a>{link.label}</a>
            </Link>
          ))}

        </div>

      </div>
      <div className={styles.footer__copyright}>
        <small>
          &copy; 2023 - {year} {footer.copyright}
        </small>
      </div>
    </footer>
  );
}

export default Footer;
