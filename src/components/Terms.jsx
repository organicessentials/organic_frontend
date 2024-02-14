import React, { useEffect } from "react";
import get from "../assets/get.svg";
import {Helmet} from "react-helmet";
const Terms = () => {

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);


  return (
    <>
      <Helmet>
        <title>Terms & Conditions​ - Organic Essentials Hub</title>
        <meta name="description" content="" />
    </Helmet>
       <div className="bredcrum_org">
    <h1>Terms & Conditions​</h1>
  </div>
  <div className="policy_page"> 
  <div className="container_sec">
      <h3>General</h3>
      <p>Please read and review the following terms and conditions carefully before using organicessentialshub.com. By using organicessentialshub.com, you agree to this Terms and Conditions. If you do not agree, please exit and disregard the information contained herein.</p>
      <p>We reserves the right to change this Terms and Conditions, in whole or in part, at any time without prior notice to you. Accordingly, you should always review this page prior to using organicessentialshub.com and or services in order to ensure that you understand the terms under which you are permitted access.</p>
      <h3>Using Of Our Website</h3>
      <p>In using organicessentialshub.com, you are prohibited from modifying, distributing, transmitting, reproducing, publishing, licensing, transferring, or selling any information, products or services obtained or viewed on organicessentialshub.com. However, you may display, download, or print hard copies of any material contained on organicessentialshub.com for your own personal, non-commercial use as long as you do not modify the content or delete any copyright, trademark, or other proprietary notice. Any other use of the information contained on organicessentialshub.com is prohibited without our express written consent.</p>
<h3>Using Of Information </h3>
	<p>The information provided at organicessentialshub.com is not intended to be used to diagnose any medical condition or disease. Always consult your doctor directly concerning any health problem, medical condition or disease, and before taking any new medication or changing the dosage of medications you are currently taking. Always carefully read the information provided with your medications.</p>
  <p>We reserves the right to correct any inaccuracies or typographical errors in the information posted on organicessentialshub.com, and shall have no liability for such errors. Information may be changed or updated without notice and prices and availability of goods and services are subject to change without notice.</p>

  <h3>Intellectual Property</h3>
  <p>We own the copyright in all the material that appears on the site. You have the right to store, download, and use the material on the site for your own personal use and research. You agree not to republish, redistribute or otherwise make this material available to any other party or make the same available on any website, on-line service or bulletin board of Your own or of any other party or make the same available in hard copy or on any other media without Our express prior written consent.</p>
  <h3>Availability Of Our Website</h3>
  <p>The material on organicessentialshub.com is intended solely for individuals enquiring about its products or services. If you are not accessing organicessentialshub.com for such purposes, you may not use organicessentialshub.com. We are generally available to users 24 hours per day, 7 days per week, 365 days per year.</p>
   </div>
  </div>
    </>
  );
};

export default Terms;
