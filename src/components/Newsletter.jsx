import React from "react";

import shop_n from "../assets/shop_now.svg";
import OFFER from "../assets/OFFER.svg";
import relaxed from "../assets/relaxed.jpg";

const Newsletter = () => {
  return (
    <div className="newslettr_sec">
      <div className="container_sec"> 
      <div className="list1_new">s </div>
          <div className="ne_lett">
              <h2>Join Our Daily <br/>Newsletter</h2>
              <div className="form_g">
              <input size="40" placeholder="Email ID" ype="email" />
              </div>
              <div className="form_g">
              <button>Submit</button>
              </div>
          </div>
          <div className="list1_new">s </div>
      </div>

    
    </div>
    
  );
};

export default Newsletter;
