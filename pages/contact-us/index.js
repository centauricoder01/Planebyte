import React, {useState} from 'react';
import styles from './contactUs.module.css';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import Image from 'next/image';
import Head from 'next/head';
import contact from '../../public/images/contact.jpg';
import {BsShare} from 'react-icons/bs';
import {AiOutlineFileProtect} from 'react-icons/ai';
import {MdOutlineMarkEmailRead} from 'react-icons/md';
import {useI18n} from '../../lib/i18n';

const CONTACT_SCRIPT_URL =
  'https://script.google.com/macros/s/AKfycbzsYcO-VZmHiZa9CPWZiDSyhp2-PTI1y_Al0Ds_woEYSxK6zQyOMf2j8rNp4yCc8Qwf/exec';

const initialFormData = {
  name: '',
  email: '',
  organization: '',
  country: '',
  number: '',
  project_type: '',
  message: '',
};

const isValidPhoneNumber = value => {
  const trimmedValue = value.trim ();

  if (!trimmedValue) {
    return true;
  }

  const hasValidCharacters = /^[+\d\s().-]+$/.test (trimmedValue);
  const digitCount = trimmedValue.replace (/\D/g, '').length;

  return hasValidCharacters && digitCount >= 10 && digitCount <= 15;
};

const isValidEmail = value => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test (value.trim ());

function ContactUs () {
  const {t} = useI18n ();
  const content = t.contact;
  const [formData, setFormData] = useState (initialFormData);
  const [formStatus, setFormStatus] = useState ({type: '', message: ''});
  const [formErrors, setFormErrors] = useState ({});
  const [isSubmitting, setIsSubmitting] = useState (false);

  const handleChange = event => {
    const {name, value} = event.target;
    setFormData (currentData => ({
      ...currentData,
      [name]: value,
    }));
    setFormErrors (currentErrors => {
      if (!currentErrors[name]) {
        return currentErrors;
      }

      const updatedErrors = {...currentErrors};
      delete updatedErrors[name];
      return updatedErrors;
    });
  };

  const validateForm = () => {
    const errors = {};

    if (!formData.name.trim ()) {
      errors.name = content.validation.required;
    }

    if (!formData.email.trim ()) {
      errors.email = content.validation.required;
    } else if (!isValidEmail (formData.email)) {
      errors.email = content.validation.email;
    }

    if (!formData.country.trim ()) {
      errors.country = content.validation.required;
    }

    if (!formData.project_type.trim ()) {
      errors.project_type = content.validation.required;
    }

    if (!formData.message.trim ()) {
      errors.message = content.validation.required;
    }

    if (!isValidPhoneNumber (formData.number)) {
      errors.number = content.validation.phone;
    }

    return errors;
  };

  const renderLabel = (label, name, isRequired = false) => (
    <label className={styles.fieldLabel}>
      <span>
        {label}
        {isRequired && <span className={styles.requiredMark}> *</span>}
      </span>
      {formErrors[name] && (
        <span className={styles.fieldError}>{formErrors[name]}</span>
      )}
    </label>
  );

  const getFieldClassName = name =>
    `form-control ${formErrors[name] ? styles.inputError : ''}`;

  const handleSubmit = async event => {
    event.preventDefault ();

    const errors = validateForm ();

    if (Object.keys (errors).length > 0) {
      setFormErrors (errors);
      setFormStatus ({type: '', message: ''});
      return;
    }

    setIsSubmitting (true);
    setFormStatus ({type: '', message: ''});
    setFormErrors ({});

    try {
      await fetch (CONTACT_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'text/plain;charset=utf-8',
        },
        body: JSON.stringify (formData),
      });

      setFormData (initialFormData);
      setFormStatus ({
        type: 'success',
        message: content.status.success,
      });
    } catch (error) {
      setFormStatus ({
        type: 'error',
        message: content.status.error,
      });
    } finally {
      setIsSubmitting (false);
    }
  };

  return (
    <div>
      <Head>
        <title>{content.seo.title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content={content.seo.description}
        />
      </Head>
      <Navbar />
      <main className={styles.contactUs}>
        <section className={styles.contactSection}>
          <div className={styles.contactHero}>
            <div className={styles.contactImagePanel}>
              <Image
                src={contact}
                placeholder="blur"
                alt={content.hero.imageAlt}
                fill
                sizes="(max-width: 992px) 100vw, 42vw"
                priority
              />
              <div className={styles.quickInfo}>
                <span>{content.hero.quickNote}</span>
                <strong>{content.hero.quickTitle}</strong>
              </div>
            </div>
            <div className={styles.contactFormPanel}>
              <span className={styles.eyebrow}>{content.hero.eyebrow}</span>
              <h1>{content.hero.title}</h1>
              <p>{content.hero.text}</p>
              {formStatus.type === 'success' ? (
                <div className={styles.successPanel}>
                  <div className={styles.successIcon} />
                  <h2>{content.success.title}</h2>
                  <p>{content.success.text}</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className={styles.formGrid}>
                    <div className={styles.formField}>
                      {renderLabel (content.fields.name.label, 'name', true)}
                      <input
                        className={getFieldClassName ('name')}
                        name="name"
                        type="text"
                        placeholder={content.fields.name.placeholder}
                        value={formData.name}
                        onChange={handleChange}
                      />
                    </div>
                    <div className={styles.formField}>
                      {renderLabel (content.fields.email.label, 'email', true)}
                      <input
                        className={getFieldClassName ('email')}
                        name="email"
                        type="email"
                        placeholder={content.fields.email.placeholder}
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>
                    <div className={styles.formField}>
                      {renderLabel (content.fields.organization.label, 'organization')}
                      <input
                        className="form-control"
                        name="organization"
                        type="text"
                        placeholder={content.fields.organization.placeholder}
                        value={formData.organization}
                        onChange={handleChange}
                      />
                    </div>
                    <div className={styles.formField}>
                      {renderLabel (content.fields.country.label, 'country', true)}
                      <input
                        className={getFieldClassName ('country')}
                        name="country"
                        type="text"
                        placeholder={content.fields.country.placeholder}
                        value={formData.country}
                        onChange={handleChange}
                      />
                    </div>
                    <div className={styles.formField}>
                      {renderLabel (content.fields.number.label, 'number')}
                      <input
                        className={getFieldClassName ('number')}
                        name="number"
                        type="tel"
                        inputMode="tel"
                        placeholder={content.fields.number.placeholder}
                        value={formData.number}
                        onChange={handleChange}
                        aria-invalid={formErrors.number ? 'true' : undefined}
                      />
                    </div>
                    <div className={styles.formField}>
                      {renderLabel (content.fields.projectType.label, 'project_type', true)}
                      <input
                        className={getFieldClassName ('project_type')}
                        name="project_type"
                        type="text"
                        placeholder={content.fields.projectType.placeholder}
                        value={formData.project_type}
                        onChange={handleChange}
                      />
                    </div>
                    <div className={`${styles.formField} ${styles.fullWidth}`}>
                      {renderLabel (content.fields.message.label, 'message', true)}
                      <textarea
                        className={getFieldClassName ('message')}
                        name="message"
                        rows="5"
                        placeholder={content.fields.message.placeholder}
                        value={formData.message}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  {formStatus.message && (
                    <p className={`${styles.formMessage} ${styles.formMessageError}`}>
                      {formStatus.message}
                    </p>
                  )}
                  <button
                    type="submit"
                    className={styles.submitButton}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? content.submit.sending : content.submit.idle}
                  </button>
                </form>
              )}
            </div>
          </div>
        </section>

        <section className={styles.helpSection}>
          <div className={styles.helpSection__header}>
            <h1>{content.help.title}</h1>
            <p>{content.help.text}</p>

          </div>
          <div className={styles.helpSection__card__group}>
            <div className={styles.helpCardsGrid}>
              <div>
                <div className={`card ${styles.helpSection__card}`}>
                  <div className={styles.helpSection__card__icon__wrapper}>
                    <BsShare className={styles.helpSection__card__icon} />
                  </div>
                  <div className="card-body">
                    <h4>{content.help.cards[0].title}</h4>
                    <p>{content.help.cards[0].text}</p>
                  </div>
                </div>
              </div>

              <div>
                <div className={`card ${styles.helpSection__card}`}>
                  <div className={styles.helpSection__card__icon__wrapper}>
                    <AiOutlineFileProtect
                      className={styles.helpSection__card__icon}
                    />
                  </div>
                  <div className="card-body">
                    <h4>{content.help.cards[1].title}</h4>
                    <p>{content.help.cards[1].text}</p>
                  </div>
                </div>
              </div>

              <div>
                <div className={`card ${styles.helpSection__card}`}>
                  <div className={styles.helpSection__card__icon__wrapper}>
                    <MdOutlineMarkEmailRead
                      className={styles.helpSection__card__icon}
                    />
                  </div>
                  <div className="card-body">
                    <h4>{content.help.cards[2].title}</h4>
                    <p>{content.help.cards[2].text}</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}

export default ContactUs;
