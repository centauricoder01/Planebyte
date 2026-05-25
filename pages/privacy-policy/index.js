import Head from 'next/head';
import React from 'react';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';
import {useI18n} from '../../lib/i18n';

const renderBlock = block => {
  if (block.type === 'h3') {
    return <h3 key={block.text}>{block.text}</h3>;
  }

  if (block.type === 'ul') {
    return (
      <ul key={block.items.join ('|')}>
        {block.items.map (item => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    );
  }

  return <p key={block.text}>{block.text}</p>;
};

function PrivacyPolicy () {
  const {t} = useI18n ();
  const content = t.legal.privacy;

  return (
    <>
      <Head>
        <title>{content.seoTitle}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Navbar />
      <div className="legal__hero text-white" style={{background: 'var(--primary)', padding: '5%'}}>
        <h2 className="text-center">{content.title}</h2>
      </div>
      <div className="bg-light long__text" style={{padding: '4%'}}>
        {content.blocks.map (renderBlock)}
      </div>

      <Footer />
    </>
  );
}

export default PrivacyPolicy;
