import React, { useEffect } from "react";
import get from "../assets/get.svg";
import {Helmet} from "react-helmet";
const Privacy = () => {

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
        <title>Privacy & Policy - Organic Essentials Hub</title>
        <meta name="description" content="" />
        <link rel="canonical" href={`https://organicessentialshub.com/privacy-policy/`} />

    </Helmet>
       <div className="bredcrum_org">
    <h1>Privacy & Policy</h1>
  </div>
  <div className="policy_page"> 
  <div className="container_sec">
      <h3>Privacy Policy</h3>
      <p>By registering on our site and entering your personal data you accept this privacy agreement and permit us to collect and store such data. We warrant that we use your private data for delivery of your orders.</p>
      <p>Before submitting an order through our website you confirm that you are 18 years old or above; you are fully responsible for this Site using, including all financial charges; you promise to provide true and up to date information about yourself.</p>
      <h3>Security Policy</h3>
      <p>We understand how important your sensitive data is, and use the different secure servers to protect all your personal information.
The checkout process uses industry-standard SSL encryption that ensures the privacy and security of all your information</p>
<h3>Shipping Policy </h3>
	<p>We provide fast, reliable and discreet delivery service to any country specified by our customers. The orders will be shipped within 24-48 business hours.</p><p>EMS delivery (Express with Online Tracking)</p><p>For those who desire faster service we can offer EMS delivery. It normally takes 5-10 days from the date that the order is sent out, and it is sent by Express Mail Service. The dead line for this method is 30 days. Tracking code will be provided for all orders as soon as they will be dispatched</p><p>Standard (Registered AirMail delivery)</p><p>Delivery normally takes 8-21 working days from the date that the order is sent out. The dead line for this method is 30 days. The orders are sent discreetly as described before, and left in your mailbox. The packages sent by this postal service can NOT be tracked.</p><p>All weekend orders will be processed on Monday. You will be automatically notified via E-mail when your order is approved and shipped.</p><p>Please leave us 1 business day for processing before your order is dispatched.</p>
  <h3>Quality Guarantee</h3>
  <p>We guarantee the highest quality of ALL products you purchase as they come in its original manufactures packaging. The products are approved by multiple agencies. We only source quality products. It is our guarantee to provide 100% top notch quality products.</p>
  <h3>Delivery Guarantee</h3>
  <p>We guarantee to reship your order completely free of charge if your order arrives damaged or something is missing, just contact us so that we may reship. It’s just one of the ways that we guarantee full, efficient service.</p>
  <h3>Order Status Guarantee</h3>
  <p>We guarantee that our customers can manage their account and check the order status online in real time. We are in touch for 7 days a week, 24 hours a day by e-mail, We are here to answer all your questions, and guarantee you will receive a response shortly.</p>
  <h3>Order Cancellation</h3>
  <p>You can cancel your order within 2 hours of ordering or it has not been dispatched yet. Please e-mail us and one of our representatives will get in touch with you shortly.</p>
  <h3>Refund And Return Policy</h3>
  <p>Make sure that you insert a valid shipping address in the order form, as any mistake may cause non-delivery of ordered products. We recommend you to double check the notes before submitting the order. If you noticed that the address was specified incorrectly, contact us as soon as possible to correct the mistake. If you didn’t receive your order due to incorrect shipping address you provided, no refunds would be given.</p>
  <p>In case of not satisfying with the effect of our product, we will give you the return address where you can send the parcel during 30 days. After we get the parcel, the refund procedure starts.</p>
  </div>
  </div>
    </>
  );
};

export default Privacy;
