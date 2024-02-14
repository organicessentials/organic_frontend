import React from "react";
import shop_n from "../assets/shop_now.svg";
import OFFER from "../assets/OFFER.svg";

const Offer = () => {
  
  return (
    <div className="offer_sec">
      <div className="container_sec">
        <div className="offer_1">
        <h2 className="offer_head">Free Shipping on orders above $35</h2>
        <span>Embrace Nature And Start Your Organic Journey As You Take One Step Towards A Life That Is Chemical Free. We have a 5% Return Discount.</span>
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
