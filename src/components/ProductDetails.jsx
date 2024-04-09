import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { addToCart, decrementCart, incrementCart } from "../features/cartSlice";
import special from "../assets/special.svg";
import best from "../assets/best.svg";
import tested from "../assets/tested.svg";
import shipping from "../assets/shipping.svg";
import DeliveryDateEstimate from "./DeliveryDateEstimate";
import tmr from "../assets/tmr-logo.png";
import Tab from "./Tab";
import star_tech from "../assets/star_tech.svg";
import star_half from "../assets/star_half.svg";
import trust from "../assets/judge.svg";
import star_half_trust from "../assets/star_half_trust.svg";
import star_trust from "../assets/star_trust-2.svg";
import paymentgetway from "../assets/paymentgetway.png";
import Toast from "./Toast";
import axios from "axios";
import config from "../config";
import { Helmet } from "react-helmet";
import gifLoader from "../assets/preloader.png";
import RelatedProducts from "./RelatedProducts";

const ProductDetails = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();
  const [preLoader, setPreLoader] = useState(true);
  const [activeIndex, setActiveIndex] = useState(null);
  const [product, setProduct] = useState("");
  const [visibleTop, setVisibleTop] = useState(true);
  const [num, setNum] = useState(0);
  const cart = useSelector((state) => state.cart);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);

  const getData = async () => {
    try {
      const result = await axios.get(
        `${config}/api/auth/show/product/${params?.id}`
      );
      setProduct(result.data);
      setPreLoader(false);
    } catch (error) {
      if (error.response && error.response.status === 404) {
        navigate('/404'); // Redirect to your custom 404 page
      } else {
        console.log(error);
        // Handle other errors if needed
      }
    }
  };
  

  useEffect(() => {
    getData();
  }, [params?.id]);


  const addProduct = () => {
    let newItem = {
      name: product.name,
      price: num.price ? num.price : product.variants[0].price,
      id: product._id,
      image: product.image,
      category:product?.category[0].name
    };
    dispatch(addToCart(newItem));
    Toast({ title: "Add Cart", type: "success" });
  };

  const increment = () => {
    dispatch(incrementCart(product));
  };

  const decrement = () => {
    dispatch(decrementCart(product));
  };

  const buyProduct = () => {
    let newItem = {
      name: product.name,
      price: num.price ? num.price : product.variants[0].price,
      id: product._id,
      image: product.image,
      category:product?.category[0].name
    };
    dispatch(addToCart(newItem));
    navigate("/cart");
  };

  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  });

  const handelChange = (doc, index) => {
    setActiveIndex(index === activeIndex ? null : index);
    console.log(doc);
    setVisibleTop(true);
    setNum(doc);
  };

  if (preLoader) {
    return (
      <div className="loading_layout">
        <img src={gifLoader} className="preloader" alt="logo" />
      </div>
    );
  }

  return (
    <>
      <div>
      <Helmet>
  <title>{product.seoTitle ? product.seoTitle : product.name}</title>
  <meta name="description" content={product.seoDescription} />
  {product.slug && <link rel="canonical" href={`https://organicessentialshub.com/product/${product.slug}`} />}

</Helmet>

        <div className="bred_crum">
          <div className="container_sec">
            <span className="span_bead">
              <Link to="/">Home</Link>
              <span>/</span>
              <Link to={`/product-category/${product?.category[0].name}`}>
                {product?.category[0].name}
              </Link>
              <span>/</span>
              {product?.name}
            </span>
          </div>
        </div>
        <section className="details_page">
          <div className="container_sec">
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 align-cen">
                <div className="product_imag">
                  <img
                    style={{ width: "100%" }}
                    src={product?.image}
                    alt="product_img"
                  />
                </div>
                <span class="etheme-advanced-headline">
                  Ready to dispatch in <span class="">24 business hours.</span>
                </span>
                <div className="img_pay">
                  <img src={paymentgetway} />
                </div>
                <div className="offer-detailspro">
                  <div className="offer_pro1">
                    <span>
                      * Free express shipping on all orders above cart value of
                      USD 35.
                    </span>
                  </div>
                  <div className="offer_pro1">
                    <span>
                      * Product is fulfilled by Organic Essentials Hub's 100%
                      Money Back Guarantee
                    </span>
                  </div>
                  <div className="offer_pro1">
                    <span>* 5% Returning Discounts.</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <div class="badge_section">
                  <div class="badhe_bg">
                    <img class="badges" src={special} /> <span>Special!</span>
                  </div>

                  <div class="badhe_bg badge2">
                    <img class="badges" src={best} /> <span>Best seller</span>
                  </div>
                  <div class="badhe_bg badge2">
                    <img class="badges" src={tested} />{" "}
                  </div>
                </div>
                <h3 className="product_title ">{product?.name}</h3>
                <h4 className="pro_price">
                  {product?.variants && product.variants[0] && (
                    <h4>
                      {formatter.format(product.variants[0]?.price)} –
                      {formatter.format(
                        product.variants[product.variants.length - 1]?.price
                      )}
                    </h4>
                  )}
                </h4>
                <div
                  dangerouslySetInnerHTML={{
                    __html: product?.shortDescription,
                  }}
                ></div>

                <div>
                  <div className="veri-details">
                    <p c>{product?.name}</p>
                    <div className="pro_ver">
                      {product?.variants?.map((doc, i) => (
                        <span
                          onClick={() => handelChange(doc, i)}
                          className={
                            i === activeIndex ? "choose active" : "choose"
                          }
                        >
                          {doc.attributeValue}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <br />

                    <div className="clear_button">
                      <a onClick={() => setVisibleTop(false)}>CLEAR</a>
                    </div>

                    {visibleTop ? (
                      <div>
                        <div className="show" style={{ fontSize: "16px" }}>
                          {product?.variants &&
                          product.variants[0]?.description ? (
                            <div
                              dangerouslySetInnerHTML={{
                                __html: num
                                  ? num.description
                                  : product.variants[0]?.description,
                              }}
                            />
                          ) : (
                            <p></p>
                          )}
                        </div>

                        <p className="pro_price">
                          {product?.variants && product.variants[num]?.price
                            ? formatter.format(product.variants[num].price)
                            : formatter.format(num.price)}
                        </p>
                      </div>
                    ) : null}
                  </div>
                  <div className="cart_sec">
                    <div className="sec_verii">
                      <button onClick={decrement} className="increment_button">
                        <svg
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          width=".7em"
                          height=".7em"
                          viewBox="0 0 24 24"
                        >
                          <path d="M23.52 11.4h-23.040c-0.264 0-0.48 0.216-0.48 0.48v0.24c0 0.264 0.216 0.48 0.48 0.48h23.040c0.264 0 0.48-0.216 0.48-0.48v-0.24c0-0.264-0.216-0.48-0.48-0.48z"></path>
                        </svg>
                      </button>
                      <input
                        value={cart.itemOne.itemCount}
                        className="input_quantity"
                        type="text"
                      />
                      <button onClick={increment} className="increment_button">
                        <svg
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          width=".7em"
                          height=".7em"
                          viewBox="0 0 24 24"
                        >
                          <path d="M23.52 11.4h-10.92v-10.92c0-0.264-0.216-0.48-0.48-0.48h-0.24c-0.264 0-0.48 0.216-0.48 0.48v10.92h-10.92c-0.264 0-0.48 0.216-0.48 0.48v0.24c0 0.264 0.216 0.48 0.48 0.48h10.92v10.92c0 0.264 0.216 0.48 0.48 0.48h0.24c0.264 0 0.48-0.216 0.48-0.48v-10.92h10.92c0.264 0 0.48-0.216 0.48-0.48v-0.24c0-0.264-0.216-0.48-0.48-0.48z"></path>
                        </svg>
                      </button>
                    </div>
                    <div className="addt-btn">
                      <button onClick={addProduct} className="add_cart">
                        Add to cart
                      </button>
                    </div>
                  </div>
                  <div class="text-center et-or-wrapper">
                    <div>
                      <span>or</span>
                    </div>
                  </div>
                  <div className="by_btn">
                    <button onClick={buyProduct} className="add_btn">
                      Buy Now
                    </button>
                  </div>
                  <div className="shi_de">
                    <span>
                      <img src={shipping} /> Free Shipping Over $35
                    </span>
                    <hr />
                    <DeliveryDateEstimate />
                  </div>

                  <div className="tmr_reting2">
                    <div className="reting_widget">
                      <div className="logo_widg">
                        <a href="https://techmorereview.com/companies/organicessentialshub/">
                          {" "}
                          <img src={tmr} />
                        </a>
                      </div>
                      <div className="reting_star">
                        <img src={star_tech} />
                        <img src={star_tech} />
                        <img src={star_tech} />
                        <img src={star_tech} />
                        <img src={star_half} />
                      </div>
                      <a href="https://techmorereview.com/companies/organicessentialshub/">
                        <span className="trust_score">
                          Trustscore <b>4.5</b> | <b>510</b> Reviews
                        </span>
                      </a>
                    </div>
                    <div className="reting_widget">
                      <div className="logo_widg jd_logo_pro">
                        <a href="https://reviews.organicessentialshub.com">
                          <img src={trust} />
                        </a>
                      </div>
                      <div className="reting_star">
                        <img src={star_trust} />
                        <img src={star_trust} />
                        <img src={star_trust} />
                        <img src={star_trust} />
                        <img src={star_half_trust} />
                      </div>
                      <a href="https://reviews.organicessentialshub.com">
                        <span className="trust_score">
                          Trustscore <b>4.47</b> | <b>582</b> Reviews
                        </span>
                      </a>
                    </div>
                    {/* <div className="reting_widget trust_wg">
                      <div className="logo_widg">
                      <a href="https://www.trustpilot.com/review/organicessentialshub.com"><img src={trust} /></a>
                      </div>
                      <div className="reting_star">
                        <img src={star_trust} />
                        <img src={star_trust} />
                        <img src={star_trust} />
                        <img src={star_trust} />
                        <img src={star_half_trust} />
                      </div>
                      <a href="https://www.trustpilot.com/review/organicessentialshub.com"><span className="trust_score">Trustscore <b>3.7</b> | <b>2</b> Reviews</span></a>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Tab description={product?.description} id={product?._id} />
        </section>
      </div>
      <div>
        <RelatedProducts category={product?.category[0].name}/>
        </div>
    </>
  );
};

export default ProductDetails;
