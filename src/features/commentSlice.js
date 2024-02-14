import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import config from "../config";

const initialState = {
    comment : []
}

export const commentSlice = createSlice({
    name: "comment",
    initialState,
    reducers:{
        createComment(state,action){
            axios.post(`${config}/api/auth/create/comment`,action.payload).then((res)=>{
                console.log(res);
                state.comment = action.payload
            }).catch((err)=>{
                console.log(err);
            })
        }
    }
})

export const {createComment} = commentSlice.actions

export default commentSlice.reducer