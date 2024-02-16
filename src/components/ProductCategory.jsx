import React, { useEffect, useState } from 'react';
import arrow_view from "../assets/arrow_view.svg";
import { Link, useNavigate, useParams } from 'react-router-dom';
import { productsFetch } from '../features/productsSlice';
import { useDispatch, useSelector } from 'react-redux';
import {Helmet} from "react-helmet";
import config from '../config';
import axios from 'axios';
const ProductCategory = () => {
  const navigate = useNavigate();
  const { params } = useParams();
  const [products, setProducts] = useState([])

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);



  const words = params.split('-');
  const capitalizedParams = words.map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  console.log(capitalizedParams);

  useEffect(() => {
    const catdata =async () => {
      try {
        const result = await axios.get(`${config}/api/auth/show/products/${capitalizedParams}`)
        setProducts(result.data)
      } catch (error) {
        
      }
    }
    catdata()
  }, [capitalizedParams])
  

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
     <Helmet>
        <title>{capitalizedParams} - Organic Essentials Hub</title>
    </Helmet>
      <div className="bredcrum_org">
        <h1>{capitalizedParams}</h1>
      </div>
      <div className='container_sec'>
        <div className="products">
          {products.map((doc) => (
              <Link to={`/product/${doc.slug}`} key={doc._id} onClick={() => nextPage(doc)} className="pro_details">
                <div className="pro_img">
                  <img src={doc.image} alt={doc.name} />
                  <Link to={`/product/${doc.slug}`} >
                    <img src={arrow_view} alt="View Details" />
                  </Link>
                </div>
                <div className="p_det">
                  <span className="p_titl">
                    {doc.name}
                  </span>
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
              </Link>
            ))}
        </div>
      </div>
    </>
  );
};

export default ProductCategory;