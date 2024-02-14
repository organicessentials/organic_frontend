import React, { useEffect } from "react";
import get from "../assets/get.svg";

import {Helmet} from "react-helmet";
const Guarantee = () => {

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
        <title>Guarantee - Organic Essentials Hub</title>
        <meta name="description" content="" />
    </Helmet>
       <div className="bredcrum_org">
    <h1>Guarantee</h1>
  </div>
  <div className="policy_page"> 
  <div className="container_sec">
      <h3 className="gar_ti">100% Money Back Guarantee.</h3>
     <p>If your order does not arrive or is damaged in transportation, we will mail you a replacement shipment or issue you a complete refund, as requested.</p>
     <p>Please allow 30 business days from the day your product was sent before contacting us. If you have not received your package after 30 days, or if you have received any information that your package has been placed on hold or returned to sender, please email us at support@organicessentialshub.com and we will take care of it.</p>
  </div>
  </div>
    </>
  );
};

export default Guarantee;
