import React from 'react';
import styles from './ContactSection.module.css';
import Image from 'next/image';
import Link from 'next/link';
import contact from '../../public/images/contactBg.jpg';

function ContactSection () {
  return (
    <section className={`container my-5 py-5 ${styles.contactSection}`}>
      <div className={styles.contactSection__imgWrapper}>
        <Image
          src={contact}
          width={1200}
          height={400}
          placeholder="blur"
        />
        <div className={styles.contactSection__infoWrapper}>
          <div>
            <h5>We Carry more Than Just Good Coding Skills</h5>
            <h2>Let's Build Your Software! </h2>
          </div>
          <div className={styles.contactSection__btnArea}>
            <Link legacyBehavior href="/contact-us">
              <a className="btn btn-outline-light">Contact</a>
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}

export default ContactSection;
