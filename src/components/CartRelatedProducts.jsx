import React, { useEffect, useState } from 'react';
import config from '../config';
import axios from 'axios';
import arrow_view from '../assets/arrow_view.svg';
import { Link } from 'react-router-dom';

const CartRelatedProducts = ({ category }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get(`${config}/api/auth/show/products/${category}`);
        setProducts(result.data.slice(0, 2));
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setError('An error occurred while fetching data.');
        setLoading(false);
      }
    };

    fetchData();
  }, [category]);

  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
  });

  if (loading) {
    return <div>Loading...</div>; // You might want to use a spinner or loading animation here.
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className='cart_related_products'>
      <div className="products">
        {products.map((doc) => (
          <Link to={`/product/${doc.slug}`} key={doc._id} className="pro_details">
            <div className="pro_img">
              <img src={doc.image} alt={doc.name} />
              <Link to={`/product/${doc.slug}`} className="view-link">
                <img src={arrow_view} alt="View" />
              </Link>
            </div>
            <div className="p_det">
              <span className="p_titl">{doc.name}</span>
              <span className="p_price">
                <h4>
                  {formatter.format(doc.firstVariantPrice)} – {formatter.format(doc.lastVariantPrice)}
                </h4>
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CartRelatedProducts;
