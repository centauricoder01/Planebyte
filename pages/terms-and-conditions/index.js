import React from 'react';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';
import SeoHead from '../../components/SeoHead';
import {useI18n} from '../../lib/i18n';

const renderBlock = block => {
  if (block.type === 'h3') {
    return <h3 key={block.text}>{block.text}</h3>;
  }

  return <p key={block.text}>{block.text}</p>;
};

function TermsAndConditions () {
  const {t} = useI18n ();
  const content = t.legal.terms;

  return (
    <>
      <SeoHead
        title={content.seoTitle}
        description={content.seoDescription}
        path="/terms-and-conditions"
      />
      <Navbar />
      <div className="legal__hero text-white" style={{background: 'var(--primary)', padding: '5%'}}>
        <h2 className="text-center">{content.title}</h2>
      </div>
      <div className="bg-light long__text" style={{padding: '5%'}}>
        {content.blocks.map (renderBlock)}
      </div>

      <Footer />
    </>
  );
}

export default TermsAndConditions;
