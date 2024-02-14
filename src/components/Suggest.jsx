import axios from "axios";
import React, { useRef, useState } from "react";
import config from "../config";
import {Helmet} from "react-helmet";
import Toast from "./Toast";
import ReCAPTCHA from "react-google-recaptcha";
import { useNavigate } from "react-router-dom";
const Suggest = () => {
 
  const [text, setText] = useState({
    name: "",
    email: "",
    subject: "",
    productDescription: "",
    productLink: "",
  });
  const [isCaptchaVerified, setIsCaptchaVerified] = useState(false);
  const captchaRef = useRef(null);
  const navigate = useNavigate()

  const submit = async (e) => {
    e.preventDefault();
    if (!isCaptchaVerified) {
      Toast({title:"Please solve Captcha correctly",type:"error"});
      window.scroll({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
      return;
    }
    try {
      const result = await axios.post(`${config}/api/auth/contact/organic`, text);
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
      Toast({ title: "Suggest Product Send Successfully", type: "success" });
      setText({
        name: "",
        email: "",
        subject: "",
        productDescription: "",
        productLink: "",
      });
      navigate("/thank-you_/")
    } catch (error) {
      console.log(error);
    }
  };


  //let key = "6LcYAOcoAAAAANJ33iaFV4o1B-h36tVQtFlnqnZt"

  //  live key
  let key = "6LdywEYpAAAAAJheBZaa9VjoivH3WF92fPDx07XK"
  
  const handleCaptchaVerify = (response) => {
    if (response) {
      setIsCaptchaVerified(true);
    }
  };

  return (
    <div>
        <Helmet>
        <title>Suggest A Product - Organic Essentials Hub</title>
        <meta name="description" content="" />
    </Helmet>
      <div>
        <div className="account_login">
          <h1>Suggest A Product</h1>
        </div>
        <form onSubmit={submit}>
          <div className="container_sec">
            <label htmlFor="">Name</label>
            <div className="form_groups">
              <input value={text.name} onChange={(e)=>setText({...text,name:e.target.value})} type="text" />
            </div>
            <label htmlFor="">Email</label>
            <div className="form_groups">
              <input value={text.email} onChange={(e)=>setText({...text,email:e.target.value})} type="text" />
            </div>
            <label htmlFor="">Subject</label>
            <div className="form_groups">
              <input value={text.subject} onChange={(e)=>setText({...text,subject:e.target.value})} type="text" />
            </div>
            <label htmlFor="">Product Description</label>
            <div className="form_groups">
              <textarea value={text.productDescription} onChange={(e)=>setText({...text,productDescription:e.target.value})} rows="6"></textarea>
            </div>
            <label htmlFor="">Reference Product Link</label>
            <div className="form_groups">
              <input value={text.productLink} onChange={(e)=>setText({...text,productLink:e.target.value})} type="text" />
            </div>
            <ReCAPTCHA sitekey={key}
           ref={captchaRef}
            onChange={handleCaptchaVerify}
           />
            <div className="form_submit">
              <button className="btn_btn_suggest" type="submit">
                SEND
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Suggest;
