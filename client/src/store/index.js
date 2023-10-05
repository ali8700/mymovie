import { configureStore } from "@reduxjs/toolkit";
import accountSlice from './accountSlice'
import contactSlice from "./contactSlice";
export default configureStore({
    reducer:{
        account : accountSlice,
        contact:contactSlice
    }
})