import { configureStore } from "@reduxjs/toolkit";
import Cartslice from "./Slices/Cartslice";
import AuthSlice from "./Slices/AuthSlice";

const Store = configureStore({
    reducer:{
        cart:Cartslice,
        auth:AuthSlice,
    }
});

export default Store;