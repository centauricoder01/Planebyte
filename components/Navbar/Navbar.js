import styles from './Navbar.module.css';
import Link from 'next/link';
import logo from '../../public/planebyte-logo.png';
import Image from 'next/image';
import {useEffect, useRef, useState} from 'react';

function Navbar () {
  const [isMenuOpen, setIsMenuOpen] = useState (false);
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
          aria-label="Toggle navigation"
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
                <a className="nav-link" onClick={closeMobileMenu}>Services</a>
              </Link>
            </li>

            <li className="nav-item">
              <Link legacyBehavior href="/#portfolio">
                <a className="nav-link" onClick={closeMobileMenu}>Portfolio</a>
              </Link>
            </li>

            <li className="nav-item">
              <Link legacyBehavior href="/#industries">
                <a className="nav-link" onClick={closeMobileMenu}>Industries</a>
              </Link>
            </li>

            <li className="nav-item">
              <Link legacyBehavior href="/about">
                <a className="nav-link" onClick={closeMobileMenu}>About</a>
              </Link>
            </li>

            <li className="nav-item">
              <Link legacyBehavior href="/blog">
                <a className="nav-link" onClick={closeMobileMenu}>Blog</a>
              </Link>
            </li>

          </ul>
          <div className="hidden">
            <Link legacyBehavior href="/contact-us">
              <a className="primaryBtn" style={{width: '25%'}} onClick={closeMobileMenu}>
                Contact
              </a>
            </Link>
          </div>
        </div>
        <div className="nav-contact">
          <Link legacyBehavior href="/contact-us">
            <a className="primaryBtn" onClick={closeMobileMenu}>Contact</a>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
