import React, { useEffect, useState } from "react";
import config from "../config";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const SideBar = () => {

    const [category, setCategory] = useState([]);
    const [search, setSearch] = useState("");
    const navigate = useNavigate()

  const getCategory = async () => {
    try {
      const result = await axios.get(`${config}/api/auth/show/category`);
      setCategory(result.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCategory();
  }, []);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    navigate(`/shop?name=${search}`);
  };

  return (
    <>
      <div className="col-md-3 col-md-pull-9 sidebar-enabled sidebar sidebar-left">
        {/* <div
          id="etheme-search-3"
          className="sidebar-widget etheme_widget_search"
        >
          <h4 className="widget-title">
            <span>Search</span>
          </h4>
          <form
            role="search"
            method="get"
            className="woocommerce-product-search etheme-custom-search"
            action=""
            onSubmit={handleSearchSubmit}
          >
            <label
              className="screen-reader-text"
              htmlFor="woocommerce-product-search-field-0"
            >
              Search for:
            </label>
            <input
             onChange={(e)=>setSearch(e.target.value)}
              type="search"
              className="search-field"
              placeholder="Search products"
              defaultValue=""
              name="s"
            />
            <button type="submit" value="" />
            <input type="hidden" name="et_search" defaultValue="true" />
            <input type="hidden" name="post_type" defaultValue="product" />
          </form>
        </div> */}
        {/* //sidebar-widget */}
        <div
          id="woocommerce_product_categories-4"
          className="sidebar-widget woocommerce widget_product_categories"
        >
          <h4 className="widget-title">
            <span>Product categories</span>
          </h4>
          <ul className="product-categories with-accordion">
            {category.map((doc)=>(
                <li className="cat-item cat-item-28">
              <Link to={`/product-category/${doc.slug}`}>
               {doc.name}
              </Link>
              {/* <span className="count">(15)</span> */}
            </li>
            ))}
            
          </ul>
        </div>
      </div>
    </>
  );
};

export default SideBar;
