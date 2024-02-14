import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import axios from "axios";
import config from "../../config";
import Navbar from "../affiliate/Navbar";
import moment from "moment";
import { CopyToClipboard } from "react-copy-to-clipboard";
// import AffiliateUser from "../components/AffiliateUser";
import { useNavigate } from "react-router-dom";
import Toast from "../Toast";
import { decodeToken } from "react-jwt";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy, faPenToSquare } from "@fortawesome/free-solid-svg-icons";


const AffiliateUrl = () => {
  const { user:item } = useSelector((state) => state.user);
  let user = decodeToken(item)
  const navigate = useNavigate();
  const [show, setShow] = useState(true);
  const [pageUrl, setPageUrl] = useState("");
  const [params, setParams] = useState("");
  const [data, setData] = useState([]);
  const [showButton, setShowButton] = useState(false);
  const [updateId, setUpdateId] = useState("");

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);

  const getData = () => {
    axios
      .get(`${config}/api/auth/show-custom-link/${user?.id}`)
      .then((response) => {
        setData(response.data); // Access the data property of the response.
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    getData();
  }, [user?.id]);


  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (!pageUrl) {
      Toast({ title: "Field is required", type: "error" });
      return; // Add return to exit the function if pageUrl is not provided
    }
  
    try {
      const result = await axios.post(`${config}/api/auth/create-custom-link`, {
        domain: pageUrl,
        params: params,
        affiliateId: user?.affiliateId,
        userId: user.id,
      });
  

      Toast({ title: "Link Added" ,type:"success"});
      console.log(result.data.message);
  
      setPageUrl("");
      setParams("");
      getData();
    } catch (error) {
      if (error.response) {
        // The request was made and the server responded with a status code
        Toast({ title: error.response.data.error, type: "error"});
        console.log(error.response.data.error);
      } else if (error.request) {
        // The request was made but no response was received
        Toast({ title: "No response from the server", type: "error" });
        console.error(error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        Toast({ title: "An unexpected error occurred", type: "error" });
        console.error("Error", error.message);
      }
    }
  };
  
  

  const edit = (doc) => {
    setUpdateId(doc);
    let url = doc.pageUrl;
    if (url.includes("campaign")) {
      const lastPart = url
        .replace(/[\?&]wpam_id=\d+/, "")
        .replace(/.*campaign=/, "")
        .split("?")
        .pop();
      setParams(lastPart);
      setShow(false);
      const urlWithoutCampaign = url.split("?")[0];
      setPageUrl(urlWithoutCampaign);
      setShowButton(true);
    } else {
      const modifiedUrl = url.replace(/[\?&]wpam_id=\d+/, "");
      setPageUrl(modifiedUrl);
      setShow(true);
      setShowButton(true);
    }
  };

  const updateUrl = async (e) => {
    e.preventDefault();
  
    try {
      Toast({ title: "Link Updated" });
  
      const response = await axios.put(`${config}/api/auth/update-custom-link`, {
        domain: updateId.pageUrl,
        pageUrl: pageUrl,
        params: params,
        id: updateId._id,
      });
  
      setPageUrl("");
      setParams("");
      getData();
      setShow(true);
  
      console.log(response);
    } catch (error) {
      console.log(error);
      // You can handle the error here, e.g., show an error message or log it.
    }
  };
  

  return (
    <>
     
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
      >
        <Navbar />
       
        <div className="container_sec">
          <section className="affiliates_dash">
            <div className="affiliate_urls">
              <h4>Affiliate URLs</h4>
              <span className="big_si">
                Your affiliate ID is: <b>{user?.affiliateId}</b>
              </span>
              <span className="big_si">
                Your referral URL is: <b>{user?.affiliateUrl}</b>
              </span>
              <div className="affili_form">
                <h4>Custom Link Generator</h4>
                <span>
                  Enter any URL from this website in the form below to generate
                  a custom link.
                </span>
                <form  className="aff_genarte_form">
                  <div class="affi_form">
                    <span>Page URL </span>
                    <input
                      value={pageUrl}
                      onChange={(e) => setPageUrl(e.target.value)}
                      type="text"
                    />
                  </div>
                  {show ? (
                    <div class="affi_form">
                      <span
                        onClick={() => setShow(!show)}
                        style={{ color: "#2e5147", cursor: "pointer" }}
                      >
                        Add a campaign (optional)
                      </span>
                    </div>
                  ) : (
                    <div class="affi_form">
                      <span>Campaign Name (optional) </span>
                      <input
                        value={params}
                        onChange={(e) => setParams(e.target.value)}
                        type="text"
                      />
                    </div>
                  )}
                  <div class="feilds_s">
                    {!showButton ? (
                      <button onClick={handleSubmit} className="submit_button-aff">
                        Submit
                      </button>
                    ) : (
                      <button
                        onClick={updateUrl}
                        
                        className="submit_button-aff"
                      >
                        Update
                      </button>
                    )}
                  </div>
                </form>
              </div>
              <div>
                <table class="aff-table-responsive">
                  <tr>
                    <th>Custom Link</th>
                    <th></th>
                    <th>Date Created</th>
                  </tr>
                  {data?.linkGenerator?.map((doc) => (
                    <tr>
                      <td>{doc.pageUrl}</td>
                      <CopyToClipboard text={doc.pageUrl}>
                        <td className="edit_copy">
                          <>
                         
                          <span><FontAwesomeIcon icon={faCopy} /></span>
                            <span onClick={() => edit(doc)}><FontAwesomeIcon icon={faPenToSquare} /></span>
                          </>
                        </td>
                      </CopyToClipboard>
                      <td>{moment(doc.createAt).format("L")}</td>
                    </tr>
                  ))}
                </table>
              </div>
            </div>
          </section>
        </div>
        {/* <AffiliateUser /> */}
      </motion.div>
    </>
  );
};

export default AffiliateUrl;
