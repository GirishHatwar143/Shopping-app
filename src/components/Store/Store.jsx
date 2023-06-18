import {configureStore} from "@reduxjs/toolkit";
import StoreSliceReducer from "./storeSlice";

const store=configureStore({
  reducer:{
    storecart:StoreSliceReducer
  }
})
export default store;