import styles from './Navbar.module.css';
import Link from 'next/link';
import logo from '../../public/planebyte-logo.png';
import Image from 'next/image';
import {useRouter} from 'next/router';
import {useEffect, useRef, useState} from 'react';
import {BiGlobe} from 'react-icons/bi';
import {useI18n} from '../../lib/i18n';

function Navbar () {
  const [isMenuOpen, setIsMenuOpen] = useState (false);
  const router = useRouter ();
  const {locale, t} = useI18n ();
  const nextLocale = locale === 'de' ? 'en' : 'de';
  const navRef = useRef (null);

  useEffect (() => {
    if (!isMenuOpen) {
      return undefined;
    }

    const handleOutsideClick = event => {
      if (navRef.current && !navRef.current.contains (event.target)) {
        setIsMenuOpen (false);
      }
    };

    document.addEventListener ('mousedown', handleOutsideClick);
    document.addEventListener ('touchstart', handleOutsideClick);

    return () => {
      document.removeEventListener ('mousedown', handleOutsideClick);
      document.removeEventListener ('touchstart', handleOutsideClick);
    };
  }, [isMenuOpen]);

  const closeMobileMenu = () => {
    setIsMenuOpen (false);
  };

  const switchLanguage = () => {
    const pathWithoutLocale =
      locale === 'de' ? router.asPath.replace (/^\/de(?=\/|$|#|\?)/, '') || '/' : router.asPath;

    document.cookie = `NEXT_LOCALE=${nextLocale}; path=/; max-age=31536000; SameSite=Lax`;
    setIsMenuOpen (false);
    router.push (pathWithoutLocale, pathWithoutLocale, {locale: nextLocale});
  };

  const languageButton = (
    <button
      type="button"
      className={styles.languageSwitch}
      onClick={switchLanguage}
      aria-label={`${t.common.language.label}: ${t.common.language.switchTo}`}
    >
      <BiGlobe className={styles.languageIcon} />
      <span className={styles.currentLanguage}>{t.common.language.short}</span>
      <span className={styles.languageDivider} />
      <strong className={styles.nextLanguage}>{t.common.language.nextShort}</strong>
    </button>
  );

  return (
    <nav ref={navRef} className="navbar navbar-expand-lg fixed-top navbar-light bg-light px-4">
      <div className="container-fluid">
        <Link legacyBehavior href="/">
          <a className="navbar-brand">
            <Image
              src={logo}
              alt="PlaneByte"
              className={styles.brandLogo}
              width={180}
              height={53}
              priority
            />
          </a>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          aria-controls="navbarTogglerDemo01"
          aria-expanded={isMenuOpen}
          aria-label={t.common.nav.toggle}
          onClick={() => setIsMenuOpen (currentValue => !currentValue)}
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div
          className={`navbar-collapse ${styles.mobileMenu} ${
            isMenuOpen ? styles.mobileMenuOpen : ''
          }`}
          id="navbarTogglerDemo01"
        >

          <ul className="navbar-nav me-auto mb-2 mb-lg-0">

            <li className="nav-item">
              <Link legacyBehavior href="/#services">
                <a className="nav-link" onClick={closeMobileMenu}>{t.common.nav.services}</a>
              </Link>
            </li>

            <li className="nav-item">
              <Link legacyBehavior href="/#portfolio">
                <a className="nav-link" onClick={closeMobileMenu}>{t.common.nav.portfolio}</a>
              </Link>
            </li>

            <li className="nav-item">
              <Link legacyBehavior href="/#industries">
                <a className="nav-link" onClick={closeMobileMenu}>{t.common.nav.industries}</a>
              </Link>
            </li>

            <li className="nav-item">
              <Link legacyBehavior href="/about">
                <a className="nav-link" onClick={closeMobileMenu}>{t.common.nav.about}</a>
              </Link>
            </li>

            <li className="nav-item">
              <Link legacyBehavior href="/blog">
                <a className="nav-link" onClick={closeMobileMenu}>{t.common.nav.blog}</a>
              </Link>
            </li>

          </ul>
          <div className="hidden">
            {languageButton}
            <Link legacyBehavior href="/contact-us">
              <a className="primaryBtn" style={{width: '25%'}} onClick={closeMobileMenu}>
                {t.common.nav.contact}
              </a>
            </Link>
          </div>
        </div>
        <div className="nav-contact">
          {languageButton}
          <Link legacyBehavior href="/contact-us">
            <a className="primaryBtn" onClick={closeMobileMenu}>{t.common.nav.contact}</a>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
