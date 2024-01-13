import { createSlice } from "@reduxjs/toolkit";
import cartItems from "../../cartItems";

const initialState = {
  cartItems: cartItems,
  amount: cartItems.length,
  total: 0,
  isLoading: true,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    clearCart: (state) => {
      state.cartItems = [];
      state.amount=0;
    },
    removeItem:(state,action)=>{
        const itemId= action.payload;
        state.cartItems= state.cartItems.filter((item)=>item.id !==itemId);
        state.amount= state.amount-1;
    },
    increase:(state,{payload})=>{
        const cartItem=state.cartItems.find((item)=>item.id===payload.id)
        cartItem.amount= cartItem.amount+1;
        state.amount=state.amount+1;
    },
    decrease:(state,{payload})=>{
        const cartItem=state.cartItems.find((item)=>item.id===payload.id)
        if(cartItem.amount>1){
        cartItem.amount= cartItem.amount-1;
        state.amount= state.amount-1;
        }
    }
  },
});

// console.log(cartSlice);
export const { clearCart,removeItem , increase, decrease} = cartSlice.actions;
export default cartSlice.reducer;
