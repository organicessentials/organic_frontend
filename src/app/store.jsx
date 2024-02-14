import { configureStore } from '@reduxjs/toolkit'
import cartReducer from '../features/cartSlice';
import productsReducer from '../features/productsSlice';
import userSlice from '../features/userSlice';
import commentSlice from '../features/commentSlice';
import couponSlice from '../features/couponSlice';
import affiliateSlice from '../features/affiliateSlice';
import popupReducer from '../features/popupSlice';

export const store = configureStore({
  reducer: {
    products:productsReducer,
    cart: cartReducer,
    user:userSlice,
    comment:commentSlice,
    coupon:couponSlice,
    affiliateUser:affiliateSlice,
    popup: popupReducer,
  }
});
