import { createSlice } from "@reduxjs/toolkit";

const sizeSlice = createSlice({
    name:"size",
    initialState:{
        initSize:5,
        start:0,
    },
    reducers:{
        updateSize:(state,action)=>{
            state.initSize=action.payload;
        }
    }
})

export const {updateSize,updateStart} = sizeSlice.actions;

export default sizeSlice.reducer;