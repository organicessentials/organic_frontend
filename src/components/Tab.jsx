import React, { useEffect, useRef, useState } from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { decodeToken } from "react-jwt";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import config from "../config";
import { Rating } from "@mui/material";
import { Input } from '@mui/base/Input';
import axios from "axios";
import moment from "moment/moment";

const DescriptionTabContent = (data) => {
    
  return (
    <div className="container_sec">
      <div dangerouslySetInnerHTML={{ __html: data.description }} />
    </div>
  );
};

const ReviewsTabContent = ({id}) => {

    const {user:item}  = useSelector((state)=>state.user)
     const user = decodeToken(item)
     console.log(user);
     const toast = useRef(null);
     const [valueM, setValueM] = useState(null);
     const [email,setEmail] = useState('')
     const [name,setName] = useState('')
     const dispatch = useDispatch()
     const [comment,setComment] = useState('')
     const [commentData,setCommentData] = useState([])
     const navigate = useNavigate()
    

    useEffect(() => {
        axios.get(`${config}/api/auth/show/comments/${id}`).then((result)=>{
          setCommentData(result.data);
        }).catch((error)=>{
          console.log(error);
        })
      }, [id])

    const submit = async () => {
        if (!user) {
          navigate('/login');
        } else {
          if (!name || !email || !comment || valueM === 0) {
            toast.current.show({
              severity: 'error',
              summary: 'Error',
              detail: 'Please fill in all required fields.',
              life: 3000,
            });
            return;
          }
    
          try {
            const result = await axios.post(`${config}/api/auth/create/comment`, {
              productId:id,
              userId: user.id,
              name: name,
              email: email,
              comment: comment,
              review: valueM,
            });
            if (result.status === 200) {
              setComment('');
              setName('');
              setEmail('');
              setValue(0);
              toast.current.show({
                severity: 'success',
                summary: 'Success',
                detail: result.data.message,
                life: 3000,
              });
            } else {
              toast.current.show({
                severity: 'error',
                summary: 'Error',
                detail: result.data.message,
                life: 3000,
              });
            }
          } catch (error) {
            console.error(error);
            // Handle error here
          }
        }
      }

  return (
    <>
      <div className="container_sec">
        <div className="reviws">
        <div className="col-lg-6 review_contain">
          {commentData?.length === 0 ? (
            <div>
              <span style={{ fontWeight: "600" }}>Reviews</span>
              <br />
              <span>There are no reviews yet.</span>
            </div>
          ) : null}
          {commentData
            .filter(
              (doc) => doc.userId === user?.id && doc.status === "approve"
            )
            .map((doc) => (
              <div key={doc._id} className="review_user">
                 <div className="user_details">
                  
                  <img
                    src="https://secure.gravatar.com/avatar/0800f3cbe8235ae790fe10dfd48dd377?s=60&d=mm&r=g"
                    alt=""
                  />
                   <span className="userName"> {doc.name} </span>
                  <span className="userDate">
                    {moment(doc.createAt).format("l")}
                  </span>
                </div>
                <div>
                 
                 
                  <Rating value={doc.review} cancel={false} />
                  <br />
                  <span className="userComment">{doc.comment}</span>
                </div>
              </div>
            ))}
        </div>
        <div className="col-lg-6 review_comment">
          <div className="with_check">
          <label htmlFor="">Your rating *</label>
          <Rating
        name="simple-controlled"
        value={valueM}
        onChange={(event, newValue) => {
          setValueM(newValue);
        }}
      />
         </div> 
         <div className="with_check">
          <label htmlFor="">Your review *</label>
          <br />
          <Input multiline 
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            style={{ width: "100%" }}
            rows={3}
            cols={30}
          />
          </div>
          <div className="row">
            <div className="col-lg-6 with_check">
              <label htmlFor="">Name *</label>
              <br />
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                style={{ width: "100%" }}
              />
            </div>
            <div className="col-lg-6 with_check">
              <label htmlFor="">Email *</label>
              <br />
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{ width: "100%" }}
              />
            </div>
          </div>
          <button
            onClick={submit}
            className="addres_s"
          >
            SUBMIT
          </button>
        </div>
        </div>
      </div>
    </>
  );
};

export default function Table({description,id}) {

    const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };



  const renderTabContent = (tabValue) => {
    switch (tabValue) {
      case 0:
        return <DescriptionTabContent description={description} />;
      case 1:
        return <ReviewsTabContent id={id} />;
      default:
        return null;
    }
  };

  return (
    <Box sx={{ width: "100%", bgcolor: "background.paper" }}>
      <Tabs value={value} onChange={handleChange} centered>
        <Tab label="Description" />
        {/* <Tab label="Reviews (0)" /> */}
      </Tabs>
      {renderTabContent(value)}
    </Box>
  );
}
