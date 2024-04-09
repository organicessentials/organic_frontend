import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet";
import config from "../config";
import Alert from "./Alert";
import ReCAPTCHA from "react-google-recaptcha";
import { useNavigate } from "react-router-dom";
const Contact = () => {

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);

  const [data, setData] = useState({
    name:"",
    email: "",
    orderId: "",
    subject: "",
    message: "",
    attachments: null,
  });
  const [message, setMessage] = useState("");
  const navigate = useNavigate()
  const [isCaptchaVerified, setIsCaptchaVerified] = useState(false);
  const captchaRef = useRef(null);
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setData({ ...data, attachments: selectedFile });
  };

  const submit = async () => {
    if (!isCaptchaVerified) {
      setMessage({text:"Please solve Captcha correctly",severity:"error"});
      window.scroll({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
      return;
    }
    const formData = new FormData();
    formData.append("email", data.email);
    formData.append("orderId", data.orderId);
    formData.append("subject", data.subject);
    formData.append("message", data.message);
    if (data.attachments) {
      formData.append("attachments", data.attachments);
    }
    try {
      const res = await axios.post(`${config}/api/auth/contact`, formData);
      if (res.status === 200) {
        setMessage({
          text: "Your ticket has been submitted successfully. Hold tight..someone will respond to you shortly, Please check spam folders also!",
          severity: "success",
        });
        setData({
          name:"",
          email: "",
          orderId: "",
          subject: "",
          message: "",
          attachments: null,
        });
        navigate("/thank-you_/")
      }
    } catch (error) {
      console.error("Error submitting form:", error);
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
        <title>Contact Us - Organic Essentials Hub</title>
        <meta name="description" content="" />
        <link rel="canonical" href={`https://organicessentialshub.com/contact-us/`} />
      </Helmet>
      <div className="bredcrum_org">
        <h1>Contact Us</h1>
      </div>
      <div className="contact_form">
        <div className="container_sec">
          <div className="form_intro">
            <span className="titl_con">
              Have A Question? <br />
              <span class="color_g">Drop Us A Line!</span>
            </span>
          </div>
          <div className="form_grou">
            {message ? (
            <Alert text={message.text} severity={message.severity} />
          ) : null}
            </div>
          <div className="form_groups">
            <div className="form_group">
              <input
                value={data.name}
                onChange={(e) => setData({ ...data, name: e.target.value })}
                type="text"
                placeholder="Name"
              />
            </div>
            <div className="form_group">
              <input
                value={data.email}
                onChange={(e) => setData({ ...data, email: e.target.value })}
                type="text"
                placeholder="Email ID"
              />
            </div>
          </div>
          <div className="form_groups">
            <div className="form_group">
              <input
                value={data.orderId}
                onChange={(e) => setData({ ...data, orderId: e.target.value })}
                type="text"
                placeholder="Order ID"
              />
            </div>
            <div className="form_group">
              <input
                value={data.subject}
                onChange={(e) => setData({ ...data, subject: e.target.value })}
                type="tel"
                placeholder="Subject"
              />
            </div>
          </div>
          <div className="form_message">
            <textarea
              value={data.message}
              onChange={(e) => setData({ ...data, message: e.target.value })}
              placeholder="Message"
              rows="14"
            ></textarea>
          </div>
          <div style={{ marginBottom: "12px" }}>
            Please enter the details of your request. Please expect a reply in
            just few business hours.
          </div>
          <div className="form_upload">
            <input onChange={(e) => handleFileChange(e)} type="file" />
          </div>
          <div>Upload only jpeg, jpg, png files. Max upload size 5mb.</div>

          <ReCAPTCHA sitekey={key}
           ref={captchaRef}
            onChange={handleCaptchaVerify}
           />
          <div className="form_submit">
            <button onClick={submit} className="btn_btn" type="submit">
              SUBMIT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
