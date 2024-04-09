import React from "react";
import box from "../assets/box.svg";
import countries from "../assets/countries.png";
import mony from "../assets/100_mony.svg";
import oeh_box from "../assets/oeh_box.png";
import {Helmet} from "react-helmet";


import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


const Shipping = () => {
  return (
    <>
     <Helmet>
        <title>Shipping &amp; Payment - Organic Essentials Hub</title>
        <meta name="description" content="" />
        <link rel="canonical" href={`https://organicessentialshub.com/shipping-payment/`} />

    </Helmet>
       <div className="bredcrum_org">
    <h1>Shipping & Payment</h1>
  </div>
  <div className="abot_sec">
    <div className="container_sec">
   <div className="shipi_detai">
      <div className="abot_c">
          <div className="orh_lo">
            <img src={box} />
          </div>
          <div className="conte_abt">
            <h4>Complimentary shipping for purchases over $35.</h4>
            <span>At Organic Essentials Hub, we are committed to delivering your organic products swiftly and securely to your doorstep. We offer shipping services through trusted carriers including India Post, USPS (United States Postal Service), EMS (Express Mail Service), and Emirates Post.</span>
          </div>
      </div>
      <div className="other_de">
        <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="16" viewBox="0 0 24 16" fill="none"><path d="M2 7.5L6.5 13L22.5 1.5" stroke="#7BAF42" stroke-width="3"></path></svg>5% Returning Discounts.</span>
        <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="16" viewBox="0 0 24 16" fill="none"><path d="M2 7.5L6.5 13L22.5 1.5" stroke="#7BAF42" stroke-width="3"></path></svg>By Default Enjoy <b>Express Shipping (8-20 days)</b></span>
        <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="16" viewBox="0 0 24 16" fill="none"><path d="M2 7.5L6.5 13L22.5 1.5" stroke="#7BAF42" stroke-width="3"></path></svg>Free Express shipping over $35</span>
      </div>
      </div>
      <span className="norm_text">Kindly be aware that despite our offer of Free Airmail/Express shipping, we regret to inform you that we are unable to provide refunds or reshipments for orders destined to Austria, Algeria, Armenia, Belgium, Bosnia and Herzegovina, Brazil, Canada, China, Croatia, Czech Republic, Denmark, Germany, Hungary, Israel, Iceland, India, Indonesia, Italy, Japan, Jordan, Mexico, Netherlands, New Zealand, Pakistan, Peru, Poland, Russia, Norway, Saudi Arabia, Serbia, Sweden, South Africa, Taiwan, United Arab Emirates, or any other EU countries.</span>
      <div className="cuyntry_d">
        <div className="textship">
          <span>For deliveries to the USA, the UK, and Australia, it typically ranges between 8 to 21 business days. For other global destinations, the delivery period extends from 14 to 30 days. Please note that shipping times may vary based on your location, local customs procedures, and any unforeseen circumstances beyond our control. Rest assured, we work diligently to ensure your order reaches you in a timely manner.</span>
        </div>
        <div className="shipn_img">
          <img src={countries} />
        </div>
      </div>
      <div className="monay_back">
      <h2 class="title_mon">Your Order Is Fulfilled By <span class="color_g">Our 100% Money Back Guarantee Policy</span></h2>
          <div className="detail_di"> 
          <div class="conte_te">
							<p>At Organic Essentials Hub, your satisfaction is our priority. We stand behind the quality of our organic products and want you to shop with confidence. That’s why every purchase made on our platform is protected by our 100% Money Back Guarantee Policy within 30 working days.</p><h3>Our Promise to You</h3><p>We are committed to delivering premium-quality organic essentials that meet and exceed your expectations. However, if for any reason you’re not entirely satisfied with your purchase, we’ve got you covered.</p><h3>Quick Resolution</h3><p>Our goal is to ensure your satisfaction, and by streamlining this process, we aim to resolve any issues with the utmost efficiency. Your trust in us is paramount, and we are committed to upholding it through our responsive and supportive customer service.Feel free to reach out with any concerns. Your satisfaction remains our top priority.</p><h3>How It Works</h3><p>We understand that unforeseen circumstances can occur, and our aim is to make the return and refund process as seamless as possible for you. Rest assured, our team is dedicated to swiftly addressing any concerns you may have regarding your order.</p><ol><li><p><strong>Get in Touch</strong>: Contact our dedicated customer support team within a prompt two days of receiving your order. Your satisfaction matters, and we’re here to assist swiftly.</p></li><li><p><strong>Provide Supporting Images</strong>: Share relevant images that support your claim. These images help us understand any damage, breakage, or non-delivery issues.</p></li><li><p><strong>Efficient Refund Processing</strong>: Upon receiving the images, our team will promptly verify the reported issue, whether it’s damage, breakage, or non-receipt of the product. Once verified, your refund will be processed without delay.</p></li></ol><h3>Shop with Confidence</h3><p>With our 100% Money Back Guarantee Policy, you can shop confidently, knowing that your satisfaction is our priority. We’re committed to delivering an exceptional shopping experience, ensuring that every purchase from Organic Essentials Hub exceeds your expectations.Your trust in our products and services is invaluable to us. Thank you for choosing Organic Essentials Hub for your organic needs.</p>						</div>
              <div className="contnet_img">

                <img src={mony} />
              </div>
          </div>
      </div>

       <div className="accor">
        <div className="accordion">
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className="accor-titl">How To Track The Order?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="acco_content">
          <span>Upon finalizing your order, the item will be shipped within 24 hours. You can conveniently access the tracking details in your dashboard. Kindly monitor your dashboard for updates, as we refrain from sending emails to prevent cluttering your inbox. Easily track all your shipments through platforms such as 17 Track or ParcelsApp, including those dispatched via carriers like India Post, USPS, etc.</span>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className="accor-titl">Tracking Number Doesn’t Exist?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="acco_content">
          <span>Tracking information might not immediately reflect in the system until the shipment departs from its country of origin. As a result, you might occasionally see statuses like "Tracking details not found" or "Pre-Shipment."</span>
          <span>Please allow a window of 5 to 7 business days after receiving your tracking number to begin tracking your shipment. The process involves various steps, from packaging to leaving the warehouse and reaching the dispatch center, before the tracking number becomes active.</span>
          <span>The necessity of a signature upon delivery may vary depending on the courier's policies. This means some packages may require a signature while others might not.</span>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel3a-header"
        >
          <Typography className="accor-titl">Payment Methods:</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="acco_content">
            <h3>Accepted Payment Methods</h3>
          <span>We accept a variety of secure payment methods to make your shopping experience convenient:</span>
          <ul>
            <li>Credit/Debit Cards: We accept major credit and debit cards</li>
            <li>PayPal: You can use your PayPal account for a swift and secure transaction.</li>
            <li>Sezzle: Buy Now Pay Later.</li>
            <li>Echecks: You can pay using Echecks to complete your order.</li>
          </ul>
          <h3>Payment Security</h3>
          <span>Your payment security is our priority. We utilise industry-standard encryption protocols to safeguard your sensitive information during transactions. Rest assured, your payment details are safe and protected.</span>
          <h3>Order Processing</h3>
          <span>Once your order is placed and payment is confirmed, our team works diligently to process and dispatch your items promptly. You will receive a confirmation email with tracking details once your order is on its way.</span>
          <span>For any queries regarding shipping, payment, or order details, please don’t hesitate to reach out to our customer service team at support@organicessentialshub.com. We are here to assist you every step of the way.</span>
          <span>Thank you for choosing Organic Essentials Hub for your organic product needs! 👩🏻‍🦰</span>
          </Typography>
        </AccordionDetails>
      </Accordion>
      </div>  
      <div className="acor_img">
        <img src={oeh_box} />

      </div>
    </div>
    </div>
  </div>

  
    </>
  );
};

export default Shipping;
