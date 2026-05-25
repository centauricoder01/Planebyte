import React from 'react';
import styles from './ContactSection.module.css';
import Image from 'next/image';
import Link from 'next/link';
import contact from '../../public/images/contactBg.jpg';
import {useI18n} from '../../lib/i18n';

function ContactSection () {
  const {t} = useI18n ();
  const content = t.common.contactCta;

  return (
    <section className={`container my-5 py-5 ${styles.contactSection}`}>
      <div className={styles.contactSection__imgWrapper}>
        <Image
          src={contact}
          width={1200}
          height={400}
          placeholder="blur"
          alt={content.imageAlt}
        />
        <div className={styles.contactSection__infoWrapper}>
          <div>
            <h5>{content.eyebrow}</h5>
            <h2>{content.title}</h2>
          </div>
          <div className={styles.contactSection__btnArea}>
            <Link legacyBehavior href="/contact-us">
              <a className="btn btn-outline-light">{content.button}</a>
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}

export default ContactSection;
