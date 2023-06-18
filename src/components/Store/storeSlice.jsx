import { createSlice } from "@reduxjs/toolkit";



export const StoreSlice = createSlice({
  name: "storecart",
  initialState: {
    
   cartItems: [],
  },
  reducers: {
    addToCart(state, action) {
       const quent={...action.payload,quantity:1}
     let presentData = state.cartItems.find((ele) => ele.id === action.payload.id)
      if (presentData) {
        presentData;
       
        [...state.cartItems]
      } else {
        state.cartItems.push(quent)
      }

    },
    removeCart: (state, action) => {
      
      let index = state.cartItems.findIndex(
        (item) => item.id === item.id
    )
      state.cartItems.splice(index, 1)
    },
    incriment:(state,action)=>{
     const data=state.cartItems.find(cartItems=>cartItems.id===action.payload.id)
       if(data) {
         if(data.quantity<10){
            data.quantity++;
         }
        
       }  
    },
     decriment:(state,action)=>{
     const data=state.cartItems.find(cartItems=>cartItems.id===action.payload.id)
       if(data) {
         if(data.quantity>1){
            data.quantity--;
         }
       }  
    },
    
  
  }
});

export const { addToCart,removeCart,incriment,decriment } = StoreSlice.actions
export default StoreSlice.reducer;