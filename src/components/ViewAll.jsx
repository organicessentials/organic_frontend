import React, { useEffect } from "react";
import brain from "../assets/brain.webp";
import immunity from "../assets/immunity.webp";
import anitioxident from "../assets/anitioxident.png";
import skincare from "../assets/skincare.webp";
import digest from "../assets/digest.webp";

import { Link } from "react-router-dom";

const ViewAll = () => {

  return (
    <div  id="products" className="home_view">
      <div className="container_sec">
      <div className="head_sec">

<h2 className="sec_2_title">
  Go Green. <br />
  <span className="color_g">Go Organic.</span> <br />
  Go Indian.
</h2>
      <div className="btn_view">
        <Link to="/categories" className="view_all_button"> <span class="arrow">&rarr;</span> View All</Link>
      </div>
      </div>
      <div className="cats">
        <div className="cat_img1">
        <Link to="/product-category/Brain%20Health"><img src={brain} /></Link>
        </div>
        <div  className="cat_img">
        <div className="img_ca"> <Link to="/product-category/Immunity"> <img src={immunity} /></Link></div>
          <div className="img_ca"><Link to="/product-category/Antioxidant"><img src={anitioxident} /></Link></div>
        </div>
        <div  className="cat_img">
          <div className="img_ca"><Link to="/product-category/Skin%20Care"><img src={skincare} /></Link></div>
          <div className="img_ca"><Link to="/product-category/Digestive%20Health"><img src={digest} /></Link></div>
        </div>      </div>
    </div>
    </div>
  );
};

export default ViewAll;
