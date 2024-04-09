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
import {Helmet} from "react-helmet";


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
     <Helmet>
        <title>OrganicEssentialsHub: Indian Organics At Your Doorstep!</title>
        <meta name="description" content="We offer you the best organic and essential products at the OEH for a holistic living. Find the organic route to better health here." />
        <link rel="canonical" href={`https://organicessentialshub.com/`} />
      </Helmet>
      {popup===false?
        <>
       
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
