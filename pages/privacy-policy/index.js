import Head from 'next/head';
import React from 'react';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';
function index () {
  return (
    <>
      <Head>
        <title>Privacy Policy - PlaneByte</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Navbar />
      <div className="legal__hero text-white" style={{background:'var(--primary)',padding:'5%'}}>
        <h2 className="text-center">Privacy Policy</h2>
      </div>
      <div className="bg-light long__text" style={{padding:'4%'}}>
        <p>
        PlaneByte, hereinafter referred as 'PlaneByte', 'we', 'us' or 'our', is committed to respect your privacy and choices. The statement highlights our privacy practices regarding Personal Information that we collect and store about you through this website, https://www.planebyte.com/ (the “Site”) and also for those Personal Information that you provide us while participating in our events and campaigns.
        </p>

        <ul>
            <li>
                This Website is provided by PlaneByte (hereinafter referred to as "PlaneByte") and shall be used for informational purposes only. By using the Website or downloading Materials from the Website, You hereby agree to abide by the terms and conditions set forth in this Terms of Use. In the event of You not agreeing to these terms and conditions, You are requested not to use the Website or download Materials from the Website.

            </li>
            <li>
            This Website, including all Materials present (excluding any applicable third party materials), is the property of PlaneByte and is copyrighted and protected by worldwide copyright laws and treaty provisions. You hereby agree to comply with all copyright laws worldwide in Your use of this Website and to prevent any unauthorized copying of the Materials. PlaneByte does not grant any express or implied rights under any patents, trademarks, copyrights or trade secret information.
            </li>
            <li>
            PlaneByte has business relationships with thousands of customers, suppliers, enterprises, and others. For convenience and simplicity, words like joint venture, partnership, and partner are used to indicate business relationships involving common activities and interests, and those words may not indicate precise legal relationships.
            </li>
        </ul>
        <br />
        <p>
        At PlaneByte we care about your privacy. We do not sell or rent your personal information to third parties. We do not disclose it to others except as required to provide you with the services of the planebyte.com website ("Site").
        </p>

        <p>
        Information that you provide us in the process of the login/sign up will remain private and secure - including your contact information. Information that you choose to publish on the site (photos, videos, text, music, reviews, deliveries) - is no longer private, just like any information you publish online. We publish only review data like name, country, feedback which is provided by user to rate for quality and improvement purpose.
        </p>

        <p>
        Technical information that is gathered by our systems, or third party systems, automatically may be used for Site operation optimization, analytics, content promotion and enhancement of user experience. We may use your information to contact you - to provide notices related to your activities, or offer you promotions and general updates, but we will not let any other person
        </p>

        <h3>Disclaimer: </h3>
        <p>
        The website may contain inaccuracies and typographical and clerical errors. PlaneByte expressly disclaims any obligation(s) to update this website or any of the materials on this website. PlaneByte does not warrant the accuracy or completeness of the materials or the reliability of any advice, opinion, statement or other information displayed or distributed through the Website. You acknowledge that any reliance on any such opinion, advice, statement, memorandum, or information shall be at your sole risk. PlaneByte reserves the right, in its sole discretion, to correct any errors or omissions in any portion of the Website. PlaneByte may make any other changes to the Website, the materials and the products, programs, services or prices (if any) described in the Website at any time without notice. This Website is for informational purposes only and should not be construed as technical advice of any manner.
        </p>
     
      </div>

      <Footer />
    </>
  );
}

export default index;
