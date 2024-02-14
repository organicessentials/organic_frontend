import { createSlice } from '@reduxjs/toolkit';
import Cookies from 'js-cookie';

const initialState = {
  coupon: Cookies.get('coupon') ? JSON.parse(Cookies.get('coupon')) : null,
};

export const couponSlice = createSlice({
  name: 'coupon',
  initialState,
  reducers: {
    applyCoupon: (state, action) => {
      state.coupon = action.payload;
      Cookies.set('coupon', JSON.stringify(action.payload));
    },
    removeCoupon: (state) => {
      state.coupon = null;
      Cookies.remove('coupon');
    },
  },
});

export const { applyCoupon, removeCoupon } = couponSlice.actions;

export default couponSlice.reducer;
