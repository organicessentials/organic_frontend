import React, { useEffect, useRef } from "react";
import arrow_view from "../assets/arrow_view.svg";
import { useNavigate } from "react-router-dom";
import {Helmet} from "react-helmet";
import { useDispatch, useSelector } from "react-redux";
import { productsFetch } from "../features/productsSlice";

const Deal = () => {

  const selectedSlugs = [
    "ashwagandha-ksm-66500mg",
    "gotu-kola-tablets",
    "rhodiola-rosea-extract-500",
    "l-tyrosine-500mg",
    "bacopa-brahmi-extract",
    "vitamin-b1",
    "panax-ginseng-extract",
    "mucuna-pruriens-extract",
    "vegetable-capsule",
    "lions-mane-mushroom",
    "caffeine-l-theanine-2-1",
    "l-theanine-200-mg",
    "berberine-daruharidra-450mg",
    "melatonin-3mg",
    "melatonin-10mg",
    "melatonin-5mg",
    "ultra-brain",
    "lions-mane-mushroom-extract-ashwagandha",
    "taurine-powde",
    "akarkara-powder-anacyclus-pyrethrum",
    "berberine-extract",
    "magnesium-glycinate-550mg",
    "alcar-l-carnitine",
    "l-taurine-1000mg",
    "grape-seed-extract-500mg",
    "alpha-lipoic-acid-300mg",
    "l-tryptophan-500mg",
    "l-tryptophan",
    "l-taurine-amino-acid",
    "brahmi-gotu-kola-powder",
    "gotu-kola-powder",
    "brahmi-750mg",
    "ashwagandha-organic-powders",
    "ashwagandha-natural-powder",
    "ashwagandha-powder",
    "ashwagandha-powder-100gm",
    "ashwagandha-750mg",
    "brahmi-syrup",
    "ashwagandha-600mg",
    "ashwagandha",
    "ashwagandha-ds",
    "choline-inositol",
    "vegetable-capsule",
    "mucuna-tab-600mg",
    "l-carnitine-1000mg",
    "l-carnitine-capsules",
    "acetyl-l-carnitine",
    "acetyl-l-carnitine-alcar",
    "ginseng-500mg",
    "panax-ginseng-extract",
    "korean-panax-ginseng-supplement",
    "rhodiola-500mg",
    "rhodiola-rosea-extract-500",
    "gotu-kola-tablets-600mg",
    "gotu-kola",
    "turmeric-tablets–600mg",
    "turmeric-tablets–600mg",
    "curcumin-250mg-capsules",
    "curcumin-with-bioperine-1310mg",
    "l-theanine-100mg",
    "brahmi-500mg",
    "brahmi-500mg",
    "brahmi",
    "brahmi-tablets",
    "ginkgo-biloba-120-mg-capsules",
    "ginkgo-biloba-60-mg-capsules",
    "ginkgo-biloba-supplement",
    "ginkgo-biloba-extract",
    "ashvagandha-general-wellness-tablets",
    "ashwagandha-gold-capsules",
    "acetyl-l-carnitine-tablets",
  ];

  const navigate = useNavigate();
    const dispatch = useDispatch();
    const currentPageRef = useRef(1);
    
    const { items: products, loading } = useSelector((state) => state.products);

    useEffect(() => {
        dispatch(productsFetch());
    }, [dispatch]);

    const handleScroll = () => {
        const scrollThreshold = document.documentElement.scrollHeight - window.innerHeight - 200;
        if (window.scrollY > scrollThreshold && !loading) {
            currentPageRef.current += 1;
            dispatch(productsFetch(currentPageRef.current));
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [handleScroll]);

    const formatter = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        minimumFractionDigits: 2,
    });

    const nextPage = (doc) => {
        navigate(`/product/${doc.slug}`, { state: doc });
    }

  return (
    <>
       <Helmet>
        <title>Deal - Organic Essentials Hub</title>
        <meta name="description" content="" />
    </Helmet>
       <div className="bredcrum_dal">
    
  </div>
 
  <div className="deal_details">
  <div className="container_sec">
      <h2>Deals For Today: </h2>
      <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="16" viewBox="0 0 24 16" fill="none"><path d="M2 7.5L6.5 13L22.5 1.5" stroke="#7BAF42" stroke-width="3"></path></svg>Free Shipping Over $35.</span>
      <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="16" viewBox="0 0 24 16" fill="none"><path d="M2 7.5L6.5 13L22.5 1.5" stroke="#7BAF42" stroke-width="3"></path></svg>5% Returning Discounts.</span>
       
        </div> 
  </div>
  <div className="bredcrum_org">
        <h1>Our Products</h1>
      </div>
  <div className="container_sec">
        <div className="products">
          {products
          .filter((doc) => selectedSlugs.includes(doc.slug))
          .map((doc) => (
            <div
              key={doc._id}
              onClick={() => nextPage(doc)}
              className="pro_details"
            >
              <div className="pro_img">
                <img src={doc.image} alt={doc.name} />
                <a href="#">
                  <img src={arrow_view} alt="View" />
                </a>
              </div>
              <div className="p_det">
                <span className="p_titl">{doc.name}</span>
                <span className="p_price">
                  {doc?.variants && doc.variants[0] && (
                    <h4>
                      {formatter.format(doc.variants[0]?.price)} –
                      {formatter.format(
                        doc.variants[doc.variants.length - 1]?.price
                      )}
                    </h4>
                  )}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Deal;
