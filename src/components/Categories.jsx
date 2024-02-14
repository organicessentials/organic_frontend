import React, { useEffect } from "react";
import cardio from "../assets/cardio.svg";
import cardic from "../assets/cardic.svg";
import brain from "../assets/brain.svg";
import ani from "../assets/ani.svg";
import cough from "../assets/cough.svg";
import dib from "../assets/dib.svg";
import diet from "../assets/diet.svg";
import women from "../assets/women.svg";
import tea from "../assets/tea.svg";
import suge from "../assets/suge.svg";
import stre from "../assets/stre.svg";
import skin from "../assets/skin.svg";
import penis from "../assets/penis.svg";
import pain from "../assets/pain.svg";
import oral from "../assets/oral.svg";
import meta from "../assets/meta.svg";
import meno from "../assets/meno.svg";
import mens from "../assets/mens.svg";
import liver from "../assets/liver.svg";
import joint from "../assets/joint.svg";
import immu from "../assets/immu.svg";
import heart from "../assets/heart.svg";
import heair from "../assets/heair.svg";
import digest from "../assets/digest.svg";
import { Link } from "react-router-dom";

const Categories = () => {

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);


  return (
    <>
       <div className="bredcrum_org">
    <h1>Categories</h1>
  </div>
  <div className="cat_sec">
    <div className="container_sec">
      <div className="category_sec">
            <div className="cats_pro">
              <Link to="/product-category/Antioxidant">
              <img src={ani} />
              <span>Antioxidant</span>
              </Link>
            </div>
            <div className="cats_pro">
            <Link to="/product-category/Brain%20Health">
              <img src={brain} />
              <span>Brain Health</span>
              </Link>
            </div>
            <div className="cats_pro">
            <Link to="/product-category/Cardiac%20Support">
              <img src={cardic} />
              <span>Cardiac Support</span>
              </Link>
            </div>
            <div className="cats_pro">
            <Link to="/product-category/Cardiovascular%20Support">
              <img src={cardio} />
              <span>Cardiovascular Support</span>
              </Link>
              
            </div>
            <div className="cats_pro">
            <Link to="/product-category/Cough">
              <img src={cough} />
              <span>Cough & Cold</span>
              </Link>
            </div>
            
            <div className="cats_pro">
            <Link to="/product-category/Cardiac%20Support">
              <img src={dib} />
              <span>Diabetes</span>
              </Link>
            </div>
            <div className="cats_pro">
            <Link to="/product-category/Dietary%20Support">
              <img src={diet} />
              <span>Dietary Support</span>
              </Link>
            </div>
            <div className="cats_pro">
            <Link to="/product-category/Digestive%20Health">
              <img src={digest} />
              <span>Digestive Health</span>
              </Link>
            </div>
            <div className="cats_pro">
            <Link to="/product-category/Hair%20Care">
              <img src={heair} />
              <span>Hair Care</span>
              </Link>
            </div>
            <div className="cats_pro">
            <Link to="/product-category/Heart%20Health">
              <img src={heart} />
              <span>Heart Health</span>
              </Link>
            </div>
            
  
            <div className="cats_pro">
            <Link to="/product-category/Immunity">
              <img src={immu} />
              <span>Immunity</span>
              </Link>
            </div>
            <div className="cats_pro">
            <Link to="/product-category/Joint%20Health">
              <img src={joint} />
              <span>Joint Health</span>
              </Link>
            </div>
            <div className="cats_pro">
            <Link to="/product-category/Liver%20Health">
              <img src={liver} />
              <span>Liver Health</span>
              </Link>
            </div>
            <div className="cats_pro">
            <Link to="/product-category/Men’s%20Health">
              <img src={mens} />
              <span>Men's Health</span>
              </Link>
            </div>
            <div className="cats_pro">
            <Link to="/product-category/Menopause%20Support">
              <img src={meno} />
              <span>Menopause Support</span>
              </Link>
            </div>
            
            <div className="cats_pro">
            <Link to="/product-category/Metabolic%20Wellness">
              <img src={meta} />
              <span>Metabolic Wellness</span>
              </Link>
            </div>
            <div className="cats_pro">
            <Link to="/product-category/Oral%20Health">
              <img src={oral} />
              <span>Oral Health</span>
              </Link>
            </div>
            <div className="cats_pro">
            <Link to="/product-category/Pain">
              <img src={pain} />
              <span>Pain</span>
              </Link>
            </div>
            <div className="cats_pro">
            <Link to="/product-category/Penis%20Enlargement">
              <img src={penis} />
              <span>Penis Enlargement</span>
              </Link>
            </div>
            <div className="cats_pro">
            <Link to="/product-category/Skin%20Care">
              <img src={skin} />
              <span>Skin & Acne Care</span>
              </Link>
            </div>
            
            <div className="cats_pro">
            <Link to="/product-category/Stress">
              <img src={stre} />
              <span>Stress</span>
              </Link>
            </div>
            <div className="cats_pro">
            <Link to="/product-category/Sugar%20Metabolism">
              <img src={suge} />
              <span>Sugar Metabolism</span>
              </Link>
            </div>
            <div className="cats_pro">
            <Link to="/product-category/Teas">
              <img src={tea} />
              <span>Teas</span>
              </Link>
            </div>
            <div className="cats_pro">
            <Link to="/product-category/Women’s%20Health">
              <img src={women} />
              <span>Womens Health</span>
              </Link>
            </div>
            <div className="cats_pro">
             
            </div>
            
      </div>
   
    </div>
  </div>

    </>
  );
};

export default Categories;
