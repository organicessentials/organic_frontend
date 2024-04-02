import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import star from "../assets/star1.svg";
import Review_item1 from "../assets/review_che.jpeg";
import Review_item2 from "../assets/review_item.jpeg";

const Video = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    arrows: true,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          arrows: true,
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 320,
        settings: {
          arrows: true,
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="review">
      <div className="customer_review">
        <div className="page-width">
          <div className="ctmrw_inner">
            <Slider {...settings}>
              <div className="ctmrw_item">
                <div className="vid_frmae">
                  <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/zmCQG_8riUI?si=P8v3MvJsPRwq7oQL"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                  ></iframe>
                </div>
                <div className="vid_contain">
                  <h2>Effective Stress Relief</h2>
                  <span>
                    Rhodiola Rosea Extract 500 has become an essential part of
                    my daily routine. I've noticed a significant reduction in
                    stress and an improvement in my overall mood. The capsules
                    are easy to swallow, and I appreciate the natural
                    ingredients. I highly recommend this product to anyone
                    looking for a reliable stress-relief supplement.
                  </span>
                </div>
              </div>
              <div className="ctmrw_item">
                <div className="vid_frmae">
                  <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/2fTosLHjqtI?si=xrXLDWjW9iE3jzLG"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                  ></iframe>
                </div>
                <div className="vid_contain">
                  <h2>Great Stress Buster</h2>
                  <span>
                    Ashwagandha KSM-66 500mg has been a game-changer for me. It
                    has significantly helped in reducing stress and promoting a
                    sense of calmness. I've noticed improved sleep quality and
                    enhanced focus during the day. The 500mg dosage is perfect,
                    and I highly recommend it for anyone dealing with stress and
                    anxiety.
                  </span>
                </div>
              </div>
              <div className="ctmrw_item">
                <div className="ctmrw_item_inner">
                  <div className="ctmrw_item_inner_img">
                    <img
                      style={{ height: "315px", width: "auto" }}
                      src={Review_item1}
                      alt=""
                    />
                  </div>
                  <div className="vid_contain">
                    <h2>Quality Organic Products</h2>
                    <span>
                      I've been a regular customer of OrganicEssentialsHub, and
                      I'm consistently impressed with the quality of their
                      organic products. The range is diverse, and the items are
                      sourced with utmost care. The delivery is prompt, and the
                      packaging reflects a commitment to sustainability. I
                      highly recommend this hub for those seeking premium
                      organic essentials
                    </span>
                  </div>
                </div>
              </div>
             
              <div className="ctmrw_item">
                <div className="ctmrw_item_inner">
                  <div className="ctmrw_item_inner_img">
                    <img
                      style={{ height: "315px", width: "auto" }}
                      src={Review_item2}
                      alt=""
                    />
                  </div>
                  <div className="vid_contain">
                    <h2>Excellent Customer Service</h2>
                    <span>
                      I recently had a positive experience with
                      OrganicEssentialsHub's customer service. They were
                      responsive to my inquiries and provided helpful guidance
                      on product selection. The online shopping experience is
                      user-friendly, and the products exceeded my expectations.
                      A reliable hub for those passionate about organic living.
                    </span>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Video;
