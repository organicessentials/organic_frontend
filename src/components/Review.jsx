import React from "react";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import star from "../assets/star1.svg";
const Review = () => {
  const settings = {
    dots:false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint:600,
        settings: {
          arrows: false,
          slidesToShow:1,
        },
      },
      {
        breakpoint:320,
        settings: {
          arrows: false,
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
                <div className="ctmrw_item_inner">
                  
                  <div className="crmrw_review">
                    <div className="rating-wrapper">
                      <img className="star_orh" src={star} />
                    </div>
                  </div>

                  <div className="crmrw_content">
                    <div className="crmrw_text">
                    <span>Ordered organic medicines from OrganicEssentialsHub and was impressed with the speedy delivery. The website is easy to navigate, and the products are top-notch. Will definitely order again!</span>
                    </div>
                  </div>
                  <h3 className="crmrw_name">Savannah Fox</h3>

                </div>
              </div>

              <div className="ctmrw_item">
                <div className="ctmrw_item_inner">
                  
                  <div className="crmrw_review">
                    <div className="rating-wrapper">
                      <img className="star_orh" src={star} />
                    </div>
                  </div>

                  <div className="crmrw_content">
                    <div className="crmrw_text">
                    Exceptional service! The organic medicines I ordered arrived promptly, and the quality exceeded my expectations. User-friendly website and excellent customer support. Thumbs up!
                    </div>
                  </div>
                  <h3 className="crmrw_name">Judith Mckinney</h3>

                </div>
              </div>

              

              
            </Slider>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Review;
