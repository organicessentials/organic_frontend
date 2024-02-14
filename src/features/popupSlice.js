// popupSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  showPopup: false,
};

const popupSlice = createSlice({
  name: 'popup',
  initialState,
  reducers: {
    setShowPopup: (state, action) => {
      state.showPopup = action.payload;
    },
  },
});

export const { setShowPopup } = popupSlice.actions;
export default popupSlice.reducer;
