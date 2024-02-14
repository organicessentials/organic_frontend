import React from "react";

import explore from "../assets/explore.svg";
import doller from "../assets/doller-1.svg";
import sec from "../assets/2.svg";
import thi from "../assets/3.svg";
import forth from "../assets/4.svg";
import fiv from "../assets/5.svg";
import six from "../assets/6.svg";
import sev from "../assets/7.svg";
import eig from "../assets/8.svg";

const Services = () => {
  return (
    <div className="home_view">
      <div className="container_sec">
        <h2 className="main_heading">We Are Your Dedicated Partners In The Act Of Wellness</h2>
        <div className="server_main">    
           <div className="head_ser">

              <h2 className="sec_2_title">
              Nourish.. <br />
                <span className="color_g">balance..</span> <br />
                revitalize.
              </h2>
             <a href="#products" className="explor"><img src={explore} /></a>
      
      </div>
      <div className="server-sec">
      <div className="services">
        <div className="server-deta">
          <img src={doller} />
          <span>E-Check, Sezzle, Stripe, Paypal</span>
        </div>
        <div className="server-deta">
          <img src={sec} />
          <span>Free Refunds*. No Questions Asked</span>
        </div>
        <div className="server-deta">
          <img src={thi} />
          <span>Best Price <br />Guarantee</span>
        </div>
        <div className="server-deta">
          <img src={forth} />
          <span>Experts <br/>Approved</span>
        </div>
      </div>
      <div className="services">
        <div className="server-deta">
          <img src={fiv} />
          <span>Round-The-Clock Support In Your Assistance</span>
        </div>
        <div className="server-deta">
          <img src={six} />
          <span>Express Shipping Worldwide</span>
        </div>
        <div className="server-deta">
          <img src={sev} />
          <span>Attractive Deals And Discounts</span>
        </div>
        <div className="server-deta">
          <img src={eig} />
          <span>Guaranteed Safety And Reliability</span>
        </div>
      </div>      </div>
      </div>

    
    </div>
    </div>
  );
};

export default Services;
