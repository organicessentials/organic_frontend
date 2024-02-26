import React, { useEffect, useRef } from "react";
import arrow_view from "../assets/arrow_view.svg";
import { Link, useNavigate, useParams } from "react-router-dom";
import { productsFetch } from "../features/productsSlice";
import { useDispatch, useSelector } from "react-redux";

const Shop = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const nameParam = urlParams.get("name");
  console.log(nameParam);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const currentPageRef = useRef(1);

  const { items: products, loading } = useSelector((state) => state.products);

  console.log(products);

  useEffect(() => {
    dispatch(productsFetch());
  }, [dispatch]);

  const handleScroll = () => {
    const scrollThreshold =
      document.documentElement.scrollHeight - window.innerHeight - 200;
    if (window.scrollY > scrollThreshold && !loading) {
      currentPageRef.current += 1;
      dispatch(productsFetch(currentPageRef.current));
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  });

  const nextPage = (doc) => {
    navigate(`/product/${doc.slug}`, { state: doc });
  };

  return (
    <>
      <div className="bredcrum_org">
        <h1>Shop</h1>
      </div>
      <div className="products">
        {products
          .filter((product) =>
            nameParam
              ? product.name?.toLowerCase().includes(nameParam.toLowerCase())
              : true
          )
          .map((doc) => (
            <Link
              to={`/product/${doc.slug}`}
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
                <h4>
                      {formatter.format(doc.firstVariantPrice)} –
                      {formatter.format(doc.lastVariantPrice)}
                    </h4>
                </span>
              </div>
            </Link>
          ))}
        {loading && <p>Loading...</p>}
        {!loading && products.length === 0 && <p>No products available.</p>}
      </div>
    </>
  );
};

export default Shop;
