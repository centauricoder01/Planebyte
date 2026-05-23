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
      errors.name = 'Required';
    }

    if (!formData.email.trim ()) {
      errors.email = 'Required';
    } else if (!isValidEmail (formData.email)) {
      errors.email = 'Please enter correct email.';
    }

    if (!formData.country.trim ()) {
      errors.country = 'Required';
    }

    if (!formData.project_type.trim ()) {
      errors.project_type = 'Required';
    }

    if (!formData.message.trim ()) {
      errors.message = 'Required';
    }

    if (!isValidPhoneNumber (formData.number)) {
      errors.number = 'Please enter correct number.';
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
        message:
          'Thank you for sharing your project details. Our team will connect with you soon.',
      });
    } catch (error) {
      setFormStatus ({
        type: 'error',
        message:
          'Something went wrong while sending your details. Please try again in a moment.',
      });
    } finally {
      setIsSubmitting (false);
    }
  };

  return (
    <div>
      <Head>
        <title>Contact PlaneByte | Website & Digital Solution Development</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Contact PlaneByte to discuss custom website development, e-commerce websites, CMS solutions, and digital products for your business."
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
                alt="PlaneByte team discussing a website project"
                fill
                sizes="(max-width: 992px) 100vw, 42vw"
                priority
              />
              <div className={styles.quickInfo}>
                <span>Build a production ready site in 7 days only</span>
                <strong>Let&apos;s shape your next website.</strong>
              </div>
            </div>
            <div className={styles.contactFormPanel}>
              <span className={styles.eyebrow}>Start a conversation</span>
              <h1>Tell us what you want to build</h1>
              <p>
                Share a few details about your website, e-commerce store, CMS, or digital platform. We&apos;ll review it and suggest the best next step.
              </p>
              {formStatus.type === 'success' ? (
                <div className={styles.successPanel}>
                  <div className={styles.successIcon} />
                  <h2>Thank you for sharing your project details.</h2>
                  <p>Our team will connect with you soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className={styles.formGrid}>
                    <div className={styles.formField}>
                      {renderLabel ('Your Name', 'name', true)}
                      <input
                        className={getFieldClassName ('name')}
                        name="name"
                        type="text"
                        placeholder="e.g. John Doe"
                        value={formData.name}
                        onChange={handleChange}
                      />
                    </div>
                    <div className={styles.formField}>
                      {renderLabel ('Your Email', 'email', true)}
                      <input
                        className={getFieldClassName ('email')}
                        name="email"
                        type="email"
                        placeholder="e.g. john@gmail.com"
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>
                    <div className={styles.formField}>
                      {renderLabel ('Your Organization', 'organization')}
                      <input
                        className="form-control"
                        name="organization"
                        type="text"
                        placeholder="e.g. PlaneByte"
                        value={formData.organization}
                        onChange={handleChange}
                      />
                    </div>
                    <div className={styles.formField}>
                      {renderLabel ('Your Country', 'country', true)}
                      <input
                        className={getFieldClassName ('country')}
                        name="country"
                        type="text"
                        placeholder="e.g. USA"
                        value={formData.country}
                        onChange={handleChange}
                      />
                    </div>
                    <div className={styles.formField}>
                      {renderLabel ('Your Number', 'number')}
                      <input
                        className={getFieldClassName ('number')}
                        name="number"
                        type="tel"
                        inputMode="tel"
                        placeholder="e.g. +1 (415) 555-0134"
                        value={formData.number}
                        onChange={handleChange}
                        aria-invalid={formErrors.number ? 'true' : undefined}
                      />
                    </div>
                    <div className={styles.formField}>
                      {renderLabel ('Project Type', 'project_type', true)}
                      <input
                        className={getFieldClassName ('project_type')}
                        name="project_type"
                        type="text"
                        placeholder="Website, e-commerce, CMS, CRM..."
                        value={formData.project_type}
                        onChange={handleChange}
                      />
                    </div>
                    <div className={`${styles.formField} ${styles.fullWidth}`}>
                      {renderLabel ('Your Message', 'message', true)}
                      <textarea
                        className={getFieldClassName ('message')}
                        name="message"
                        rows="5"
                        placeholder="Tell us about your goals, timeline, required pages, and any must-have features."
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
                    {isSubmitting ? 'Sending...' : 'Send Project Details'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </section>

        <section className={styles.helpSection}>
          <div className={styles.helpSection__header}>
            <h1>We're Here to Help You</h1>
            <p>
              We'll review your goals, clarify the scope, and suggest the best way to move your project forward.
            </p>

          </div>
          <div className={styles.helpSection__card__group}>
            <div className={styles.helpCardsGrid}>
              <div>
                <div className={`card ${styles.helpSection__card}`}>
                  <div className={styles.helpSection__card__icon__wrapper}>
                    <BsShare className={styles.helpSection__card__icon} />
                  </div>
                  <div className="card-body">
                    <h4>Share Your Requirements</h4>
                    <p>
                      We keenly analyze your requirements from the beginning for a seamless development process.
                    </p>
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
                    <h4>Non Disclosure Agreement</h4>
                    <p>
                      Your business ideas are always safe with us. We assure you complete confidentiality with NDA
                    </p>
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
                    <h4>Understanding Your Requirement</h4>
                    <p>
                      Once we have your requirement, we will allocate our expert team for consultation to choose the right approach.
                    </p>
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
