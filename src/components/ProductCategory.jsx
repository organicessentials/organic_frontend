import React, { useEffect, useState } from 'react';
import arrow_view from "../assets/arrow_view.svg";
import { Link, useNavigate, useParams } from 'react-router-dom';
import { productsFetch } from '../features/productsSlice';
import { useDispatch, useSelector } from 'react-redux';
import {Helmet} from "react-helmet";
import config from '../config';
import axios from 'axios';
import gifLoader from "../assets/preloader.png"
import SideBar from './SideBar';
const ProductCategory = () => {
  const navigate = useNavigate();
  const { params } = useParams();
  const [products, setProducts] = useState([])
  const [sortingOption, setSortingOption] = useState("");
  const [loading,setLoading] = useState(true)
  console.log(products);

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
        setLoading(false)
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

  // const handleSortChange = (event) => {
  //   const selectedOption = event.target.value;
  //   setSortingOption(selectedOption);
  // };

  if (loading) {
    return (
      <div className="loading_layout">
      <img src={gifLoader} className="preloader" alt="logo" />
      </div>
    );
  }

  return (
    <>
     <Helmet>
        <title>{capitalizedParams} - Organic Essentials Hub</title>
    </Helmet>
      <div>
      
      <div>
      {/* <div>
        <select name="" id="" onChange={handleSortChange} value={sortingOption}>
          <option value="">Default Sort</option>
          <option value="popularity">Sort By Popularity</option>
          <option value="rating">Sort By Average Rating</option>
          <option value="latest">Sort By Latest</option>
          <option value="lowToHigh">Sort By Price : low to high</option>
          <option value="highToLow">Sort By Price : high to low</option>
        </select>
      </div> */}
      <div className="bredcrum_org">
        <h1>{capitalizedParams}</h1>
      </div>
      <div className='container_sec'>
        <div className='cat_pro'>
        <div className='sidebar_cats'>
        { <SideBar/> }
        </div>
        <div className="products">
          {products
          .map((doc) => (
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
                  <h4>
                      {formatter.format(doc.firstVariantPrice)} –
                      {formatter.format(doc.lastVariantPrice)}
                    </h4>
                  </span>
                </div>
              </Link>
            ))}
        </div>
        </div>
      </div>
      </div>
      </div>
    </>
  );
};

export default ProductCategory;
