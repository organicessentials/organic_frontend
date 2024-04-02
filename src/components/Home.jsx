import React, { useEffect, useState } from 'react';
import Banner from './Banner';
import ViewAll from './ViewAll';
import Services from './Services';
import Offer from './Offer';
import Products from './Products';
import Rating from './Rating';
import Blogs from './Blogs';
import Newsletter from './Newsletter';
import Popup from './Popup';
import { setShowPopup } from '../features/popupSlice';
import { useDispatch, useSelector } from 'react-redux';
import Video from './Video';

const Home = () => {

  const popup = useSelector((state)=>state.popup.showPopup)
  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => {
      dispatch(setShowPopup(true));
    }, 10000);
  }, [dispatch]);


  

  return (
    <>
      {popup===true?
        <>
        <Popup/>
        <Banner />
      <ViewAll />
      <Services />
      <Offer />
      <Products />
      <Rating />
      <Blogs />
      <Newsletter /></>
      :<><Banner />
      <ViewAll />
      <Services />
      <Offer />
      <Products />
      <Rating />
      <Blogs />
      
      <Newsletter /></>}
    </>
  );
};

export default Home;
