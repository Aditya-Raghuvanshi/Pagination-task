import { configureStore } from "@reduxjs/toolkit";
import sizeSlice from "./sizeSlice";

const store = configureStore({
    reducer:{
        size:sizeSlice,
    }
});

export default store