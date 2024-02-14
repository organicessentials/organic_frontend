import React from "react";
import get from "../assets/get2.svg";


const Banner = () => {
  return (
    <>
      <div className="banner">
        <div className="banner_title">
          <h2>Green Living & Holistic Well Being</h2>
          <a href="#products" className="get_btn">  <img color="" src={get} alt="" /></a>
        </div>
        
      </div>
      <div className="marquee-container">
      <div className="marquee-content">
        <span>Best Ashwagandha Starts @ USD 7</span>
        <span class="line_h">|</span>
        <span>Organic Bacopa Monnieri Extract Starts @ USD 5</span>
        <span class="line_h">|</span>
        <span>Organic Rhodiola Starts @ USD 11</span>
        <span class="line_h">|</span>

        <span>Best Ashwagandha Starts @ USD 7</span>
        <span class="line_h">|</span>
        <span>Organic Bacopa Monnieri Extract Starts @ USD 5</span>
        <span class="line_h">|</span>
        <span>Organic Rhodiola Starts @ USD 11</span>
        <span class="line_h">|</span>
        <span>Best Ashwagandha Starts @ USD 7</span>
        <span class="line_h">|</span>
        <span>Organic Bacopa Monnieri Extract Starts @ USD 5</span>
        <span class="line_h">|</span>
        <span>Organic Rhodiola Starts @ USD 11</span>
      </div>
    </div>
    </>
  );
};

export default Banner;
