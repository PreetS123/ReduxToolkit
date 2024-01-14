import { createSlice } from "@reduxjs/toolkit";


const initialState={
    isModalOpen:false,
}


const modalSlice=createSlice({
    name:"model",
    initialState,
    reducers:{
        openModel:(state,action)=>{
            state.isModalOpen=true;
        },
        closeModel:(state,action)=>{
            state.isModalOpen=false;
        },
    },
});

export const {openModel,closeModel}= modalSlice.actions;
export default modalSlice.reducer;

