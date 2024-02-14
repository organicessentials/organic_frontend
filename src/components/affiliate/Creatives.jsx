import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../affiliate/Navbar";
import { useState } from "react";
import axios from "axios";
import config from "../../config";
import moment from "moment";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Tooltip from '@mui/material/Tooltip';
import { decodeToken } from "react-jwt";
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';



const Creatives = () => {
  const [visible, setVisible] = useState(false);
  const [data, setData] = useState([]);
  const [text, setText] = useState(false);
  const [option,setOption] = useState("")

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);

  const getData = () => {
    axios
      .get(`${config}/api/auth/show-creatives-list`)
      .then((response) => {
        setData(response.data.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  
  useEffect(() => {
    getData();
  }, []);

  const showOption = (res) => {
    setVisible(true)
    setOption(res)
  }

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
              <h4>Creatives</h4>

              <table class="aff-table-responsive">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Type</th>
                    <th>Last Updated</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {data
                  .filter((doc)=>doc.status==="Active")
                  .map((doc) => (
                    <tr>
                      <td>
                        <div class="creative-preview">
                          <img src={doc.image} width={150} />
                          <span className="creat_tit">{doc.name}</span>
                        </div>
                      </td>
                      <td>Image(2560 × 1435)</td>
                      <td class="visit-date">
                        {moment(doc.createAt).format("L")}
                      </td>
                      <td>
                        <Link onClick={()=>showOption(doc)}>
                          View Details
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </div>
        <Dialog
        open={visible}
        onClose={() => setVisible(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Use Google's location service?"}
        </DialogTitle>
        <DialogContent>
        <p>ID: 1 • Image • Last Updated on {moment(option.createAt).format("L")}</p>
          <p>{option.description}</p>
          <span className="txt_pre">Preview</span>
          <div className="image_cre">
            <img
              src={option.image}
              alt=""
            />
          </div>
          <div className="files_op">
            <div>
              <span>{option.type} File</span>
              <p>2560 × 1435 • 157.73 KB</p>
            </div>
            <button>Download Image</button>
          </div>
          <div className="htm_co">
            <span>HTML Code</span>
            <p>Copy and paste the following</p>
            <CopyToClipboard
              onCopy={() => setText(true)}
              text={`<a href="${option.url}"><img src="${option.image}" alt="${option.altText}" width="2560" height="1435"/></a>`}
            >
              <div>
                <textarea
                  cols={85}
                  rows={4}
                  value={`<a href="${option.url}"><img src="${option.image}" alt="${option.altText}" /></a>`}
                  type="text"
                />
                <br />
                <button className="btn_copy" onClick={() => setText(true)}>Copy Code</button>
                {text ? <button className="copid">Code Copied</button> : null}
              </div>
            </CopyToClipboard>
          </div>
        </DialogContent>
      </Dialog>
      </motion.div>
    </>
  );
};

export default Creatives;
