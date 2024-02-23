import React, { useEffect, useState } from "react";
import config from "../config";
import axios from "axios";
import { Link } from "react-router-dom";
import arrow_view from "../assets/arrow_view.svg";

const RelatedProducts = ({ category }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get(
          `${config}/api/auth/show/products/${category}`
        );
        
        setProducts(result.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [category]);

  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  });

  // Generate random indexes for up to 4 products
  const randomIndexes = Array.from({ length: Math.min(4, products.length) }, () => Math.floor(Math.random() * products.length));

  return (
    <div className="container_sec">
      <h1 className="related_prod">Related Products</h1>
      <div className="products">
        {randomIndexes.map((randomIndex, i) => {
          const doc = products[randomIndex];
          
          return (
            <a
              href={`/product/${doc.slug}`}
              key={doc._id}
              className="pro_details"
            >
              <div className="pro_img">
                <img src={doc.image} alt={doc.name} />
                <a href={`/product/${doc.slug}`}>
                  <img src={arrow_view} alt="View Details" />
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
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default RelatedProducts;
