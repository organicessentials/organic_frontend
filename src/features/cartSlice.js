import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
  itemOne:{
    id:null,
    itemCount:1
  }
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const existingIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
    
      if (existingIndex >= 0) {
        state.cartItems[existingIndex] = {
          ...state.cartItems[existingIndex],
          quantity: state.cartItems[existingIndex].quantity + (state.itemOne.itemCount ? state.itemOne.itemCount : 1),

        };
        state.itemOne.itemCount = 1
      } else {
        let tempProductItem = { ...action.payload, quantity: state.itemOne.itemCount }; 
        state.cartItems.push(tempProductItem);
      }
      state.itemOne.itemCount = 1
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    
    incrementCart(state, action) {
      
      const { itemCount, id } = state.itemOne;
      console.log(itemCount)
      if (id !== action.payload._id) {
        return {
          ...state,
          itemOne: {
            itemCount:state.itemOne.itemCount+1,
            id: action.payload._id,
          }
        };
      }
      return {
        ...state,
        itemOne: {
          ...state.itemOne,
          itemCount:itemCount+1,
        }
      };
    },
    decrementCart(state, action) {
      const { itemOne } = state;
    
      if (itemOne.itemCount > 1 && itemOne.id === action.payload._id) {
        return {
          ...state,
          itemOne: {
            ...itemOne,
            itemCount: itemOne.itemCount - 1,
          }
        };
      }
    
      return state; 
    },
    cartDecrementCart(state,action){
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );

      if (state.cartItems[itemIndex].quantity > 1) {
        state.cartItems[itemIndex].quantity -= 1;
      } else if (state.cartItems[itemIndex].quantity === 1) {
        const nextCartItems = state.cartItems.filter(
          (item) => item.id !== action.payload.id
        );

        state.cartItems = nextCartItems;
      }
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    
    removeFromCart(state, action) {
      state.cartItems.map((cartItem) => {
        if (cartItem.id === action.payload.id) {
          const nextCartItems = state.cartItems.filter(
            (item) => item.id !== cartItem.id
          );

          state.cartItems = nextCartItems;
        }
        localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
        return state;
      });
    },
    getTotals(state, action) {
      let { total, quantity } = state.cartItems.reduce(
        (cartTotal, cartItem) => {
          const { price, quantity } = cartItem;
          const itemTotal = price * quantity;

          cartTotal.total += itemTotal;
          cartTotal.quantity += quantity;

          return cartTotal;
        },
        {
          total: 0,
          quantity: 0,
        }
      );
      total = parseFloat(total.toFixed(2));
      state.cartTotalQuantity = quantity;
      state.cartTotalAmount = total;

    },
    clearCart(state, action) {
      state.cartItems = [];
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
  },
});

export const { addToCart, decrementCart, removeFromCart,cartDecrementCart, getTotals, clearCart,incrementCart} =
  cartSlice.actions;

export default cartSlice.reducer;
