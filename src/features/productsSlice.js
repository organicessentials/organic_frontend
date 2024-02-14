// productsSlice.js

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import config from "../config";

const initialState = {
  items: [],
  status: null,
  loading: false, 
  currentPage: 1,
};

export const productsFetch = createAsyncThunk(
  "products/productsFetch",
  async (currentPage, { getState }) => {
    try {
      const response = await axios.get(`${config}/api/auth/get?page=${currentPage}`);
      return response.data;
    } catch (error) {
      console.log(error);
      throw error; 
    }
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(productsFetch.pending, (state) => {
        state.status = "pending";
        state.loading = true;
      })
      .addCase(productsFetch.fulfilled, (state, action) => {
        state.items = action.payload;
        state.status = "success";
        state.loading = false;
        state.currentPage += 1;
      })
      .addCase(productsFetch.rejected, (state) => {
        state.status = "rejected";
        state.loading = false;
      });
  },
});

export default productsSlice.reducer;
