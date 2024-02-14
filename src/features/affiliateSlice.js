import { createSlice } from '@reduxjs/toolkit';
import Cookies from 'js-cookie';

const initialState = {
    affiliateUser: Cookies.get('affiliateUser') ? JSON.parse(Cookies.get('affiliateUser')) : null,
    isLoggedIn: Cookies.get('isLoggedIn') === 'true',
};

export const affiliateSlice = createSlice({
  name: 'affiliateUser',
  initialState,
  reducers: {
    registerUser: (state, action) => {
      state.affiliateUser = action.payload;
      state.isLoggedIn = true;
      Cookies.set('affiliateUser', JSON.stringify(action.payload));
      Cookies.set('isLoggedIn', true);
    },
    loginUser: (state, action) => {
      state.affiliateUser = action.payload;
      state.isLoggedIn = true;
      Cookies.set('affiliateUser', JSON.stringify(action.payload));
      Cookies.set('isLoggedIn', true);
    },
    logout: (state) => {
      state.affiliateUser = null;
      state.isLoggedIn = false;
      Cookies.remove('affiliateUser');
      Cookies.remove('isLoggedIn');
    },
  },
});

export const { registerUser, loginUser, logout } = affiliateSlice.actions;

export default affiliateSlice.reducer;
