import Head from 'next/head';
import React from 'react';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';
function index () {
  return (
    <>
      <Head>
        <title>Terms and Conditions - PlaneByte</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Navbar />
      <div className="legal__hero text-white" style={{background:'var(--primary)',padding:'5%'}}>
        <h2 className="text-center">Terms and Conditions</h2>
      </div>
      <div className="bg-light long__text" style={{padding:'5%'}}>
        <h3>Your Consent To Our Privacy Policy</h3>
        <p>
          By agreeing to these terms and conditions, you agree to the terms of our Privacy Policy. Before using this website, please carefully review our Privacy Policy. All Personal Information provided to us as a result of your use of this website will be handled in accordance with our Privacy Policy. If you do not agree, please exit this website.
        </p>

        <h3>Ownership Of This Website And Its Content</h3>
        <p>
        The information provided on this website is free of charge and for informational purposes only. It does not create a business or professional services relationship between you and PlaneByte.
        </p>
        <p>
        This website, including all of the software and code comprising or used to operate this website, and all of the photographs, graphic images, audio, video, html code, buttons, and text and other materials available on this website, (collectively “Content”) are protected under applicable intellectual property and other proprietary laws of the India and other countries. All Content and intellectual property rights therein are the property of PlaneByte or the material is included with the permission of the rights owner and is protected pursuant to applicable copyright and trademark laws.
        </p>

        <p>
        Nothing contained in this site shall be construed as conferring by implication, estoppel, or otherwise, any license or right to any copyright, patent, trademark or other proprietary interest of PlaneByte or any third party. Except as otherwise provided herein, none of this Content may be used, copied, reproduced, distributed, republished, downloaded, modified, displayed, posted or transmitted in any form or by any means, including, but not limited to, electronic, mechanical, photocopying, recording, or otherwise, without our express prior written permission.
        </p>

        <p>
        PlaneByte grants you permission to the extent necessary to lawfully access and use this website and to display, download, or print portions of this website on a temporary basis and for your personal, noncommercial use only, provided that you (i) do not modify the Content; (ii) you retain any and all copyright and other proprietary notices contained in the Content; and (iii) you do not copy or post the Content on any network computer or broadcast the Content in any media.
        </p>

        <h3>
        Disclaimer Of Warranties
        </h3>
        <p>
        Although PlaneByte attempts to provide accurate Content on the website, it makes no representation, endorsement or warranty that such Content is accurate or suitable for any particular purpose
        </p>
        <p>
        The website and its Content are provided on an "as is" basis. Use of the website and its Content is at the user's sole risk. The website and  Content are provided without any representations, endorsements, or warranties of any kind whatsoever, either expressed or implied, including, but not limited to, any warranties of title or accuracy and any implied warranties of merchantability, fitness for a particular purpose or non‑infringement, with the sole exception of warranties (if any) which cannot be expressly excluded under applicable law. As noted below, PlaneByte also makes no representations, endorsements or warranties, either express or implied, with respect to any website operated by a third party.
        </p>

        <h3>Links To Other Sites</h3>
        <p>PlaneByte may establish links between this website and one or more websites operated by third parties. The existence of any such links shall not constitute an endorsement, representation or warranty by PlaneByte of such websites, the contents of the websites, the products or services of the websites or the operators of the websites. PlaneByte does not investigate, monitor or check such websites for accuracy, completeness or conformance with applicable laws and regulations. If you decide to leave this website and access these other websites, all rules, policies (including privacy policies) and operating procedures of such websites will apply to you while on such websites.</p>
      
      </div>

      <Footer />
    </>
  );
}

export default index;
