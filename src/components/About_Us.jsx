import React, { useEffect } from "react";
import abut from "../assets/abut.svg";
import Newsletter from './Newsletter'
import natural from "../assets/natural.webp";
import logos_n from "../assets/logos_n.png";
import oeh from "../assets/oeh.svg";
import {Helmet} from "react-helmet";

const About_Us = () => {

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
        <title>About Us - Organic Essentials Hub</title>
        <meta name="description" content="At Organic Essentials Hub, we procure our products from highly approved industry-leading, certified manufacturers. Our Story Welcome to Organic Essentials Hub, a celebration of India's" />
         <link rel="canonical" href={`https://organicessentialshub.com/about-us/`} />

    </Helmet>
       <div className="bredcrum_org">
    <h1>About Us</h1>
  </div>
  <div className="abot_sec">
    <div className="container_sec">
      <img src={abut} className="about_img" />
      <div className="abot_c">
          <div className="orh_lo">
            <img src={oeh} />
          </div>
          <div className="conte_abt">
            <span>At Organic Essentials Hub, we procure our products from highly approved industry-leading, certified manufacturers.</span>
          </div>
      </div>
      <div class="abt_story">
							<h3>Our Story</h3>
              <p>Welcome to Organic Essentials Hub, a celebration of India’s rich heritage and the bounty of nature it offers. Our journey is deeply rooted in the ethos of Indian culture, where tradition meets sustainability.</p>
              <h3>Embracing Indian Heritage</h3>
              <p>At Organic Essentials Hub, we honor and embrace the treasures that India’s diverse landscapes offer. From the fertile soils of ancient farmlands to the lush forests abundant with medicinal herbs, our products are a testament to India’s rich heritage.</p>
              <h3>Indigenously Sourced Goodness</h3>
              <p>We take pride in sourcing our products indigenously, nurturing a direct connection with local farmers and artisans across the country. Through this close-knit relationship, we ensure that every offering carries the essence of authenticity and purity.</p>
              <h3>Certified and Verified</h3>
              <p>Our commitment to quality is unwavering. We meticulously curate our collection, partnering only with certified brands that share our dedication to organic practices and ethical sourcing. Each product undergoes stringent verification, assuring you of the highest standards.</p>
              <h3>Cultivating Sustainable Practices</h3>
              <p>We believe in fostering sustainability at every step. Our philosophy revolves around promoting eco-friendly methods, preserving indigenous farming techniques, and supporting local communities to thrive harmoniously with nature.</p>	
             </div>
             <div className="abt_jurny">
             <h2 class="jurny-head">Your Journey to Wellness<br /><span class="color_g">Heal Your Body and Mind</span></h2>
             <p>At Organic Essentials Hub, we invite you on a journey to holistic wellness, guided by time-honored traditions and trusted organic solutions. We aspire to be your trusted companion in embracing a lifestyle deeply rooted in natural goodness.</p>
             <p>Join us in celebrating India’s cultural heritage while embracing the purity of organically sourced products. Your well-being is our priority, and we are dedicated to bringing you the very best from our treasure trove of natural wonders.</p>
             <p>Thank you for being a part of our story.</p>
             </div>
    </div>
  </div>

  <div className="home_view">
      <div className="container_sec">
        <img className="reting_se" src={natural} />
       <div className="approve_sec">
        <div className="ap_content">
            <span>Consciously Crafted, Compassionately Curated & Sustainably Harvested 100% Plant-Based Products Manufactured In FDA-Registered, GMP-Certified Facilities And Delivered In Earth-Friendly Packaging.</span>
        </div>
        <div className="ap_img">
          <img src={logos_n} />
        </div>
       </div>
       </div>
       </div>
  <Newsletter/>
    </>
  );
};

export default About_Us;
