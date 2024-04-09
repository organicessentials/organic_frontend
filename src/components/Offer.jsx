import React from "react";
import shop_n from "../assets/shop_now.svg";
import OFFER from "../assets/offer_t.png";
import check from "../assets/check_d.png";


const Offer = () => {
  
  return (
    <div className="offer_sec">
      <div className="container_sec">
        <div className="offer_1">
        <h2 className="offer_head">Free Shipping on orders above $35</h2>
        <div className="offer_text-">
        <span><img src={check} />Unlock 5% off with code <b>WEVALUEYOU!</b></span>
        <span><img src={check} />Choose from convenient payment options: PayPal, Credit/Debit cards, Sezzle, and E-check.</span>
        <span><img src={check} />Free Shipping on orders above $35</span>
        <span><img src={check} />Shop now and embark on your journey to optimal health and vitality! <b>Offer valid till 8th April'24.</b></span>
        </div>
       <div className="images_off">
        <a href="#products"> <img src={shop_n} /></a>
        <img src={OFFER} />
       </div>
        </div>  
        <div className="offer_2">
          
          </div>         
      </div>

    
    </div>
    
  );
};

export default Offer;
