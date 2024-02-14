import React, { useEffect, useState } from "react";
import shop_n from "../assets/shop_now.svg";
import OFFER from "../assets/OFFER.svg";
import relaxed from "../assets/relaxed.jpg";
import brainhealth from "../assets/brain-health.jpg";
import natural from "../assets/natural.jpg";
import beautiful from "../assets/beautiful.jpg";
import config from "../config";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Blogs_de = () => {
  const [post, setPost] = useState([]);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);

  const getPost = async () => {
    try {
      const result = await axios.get(`${config}/api/auth/show/post`);
      setPost(result.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPost();
  }, []);

  return (
    <div className="blog_secs">
      <div className="bredcrum_org">
        <h1>Blogs</h1>
      </div>
      <div className="container_sec">
        <div className="blogs_list">
          {post.map((doc) => (
            <div key={doc._id} className="blog_details">
              <Link to={`/blogs/${doc.slug}`}>
                <div className="blog_img">
                  <span className="blog_date">
                    {new Date(doc.createdAt).toLocaleDateString("en-US", {
                      day: "numeric",
                      month: "short",
                    })}
                  </span>

                  <img src={doc.image} />
                </div>
                <div className="blogs_ti">
                  <h4>{doc.name}</h4>
                  <button className="btn_read">
                    Read More
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M23.928 11.832c-0.048-0.12-0.12-0.216-0.168-0.264l-7.776-8.16c-0.12-0.144-0.288-0.216-0.48-0.24-0.168 0-0.36 0.048-0.48 0.168-0.288 0.24-0.312 0.672-0.048 0.984l6.648 6.984h-20.904c-0.384 0-0.696 0.312-0.696 0.696s0.312 0.672 0.696 0.672h20.904l-6.624 7.008c-0.12 0.144-0.192 0.312-0.168 0.48 0 0.192 0.096 0.36 0.216 0.48 0.12 0.144 0.312 0.216 0.48 0.216 0.144 0 0.312-0.048 0.48-0.192l7.776-8.16c0 0 0.168-0.264 0.168-0.336 0.024-0.12 0.024-0.216-0.024-0.336z"></path>
                    </svg>
                  </button>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs_de;
