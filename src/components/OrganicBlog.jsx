import React, { useEffect, useState } from "react";
import brainhealth from "../assets/brain-health.jpg";
import { useLocation, useParams } from "react-router-dom";
import axios from "axios";
import config from "../config";
import { Helmet } from "react-helmet";

const OrganicBlog = () => {

  const params = useParams()
  const [post, setPost] = useState("");
  

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);

  useEffect(() => {
    const getPost = async () => {
      try {
        const result = await axios.get(
          `${config}/api/auth/singal/post/${params.slug}`
        );
        setPost(result.data);
      } catch (error) {
        console.log(error);
      }
    };
    getPost();
  }, [params.slug]);

  return (
    <>
    <Helmet>
        <title>{post.seoTitle?post.seoTitle:post.name}</title>
        <meta name="description" content={post.seoDescription} />
    </Helmet>
      <div className="bredcrum_org">
        <h1>{post.name}</h1>
      </div>

      <div className="blog_details_o">
        <div className="container_sec">
          <img style={{ width: "100%" }} src={post.image} />
          <div
            class="content-article entry-content"
            dangerouslySetInnerHTML={{ __html: post.content }}
          ></div>
        </div>
      </div>
    </>
  );
};

export default OrganicBlog;
