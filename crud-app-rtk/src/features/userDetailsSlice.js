import { createSlice } from "@reduxjs/toolkit";

const initialState={
    loading:false,
    error:null,
    users:[],

}

export const userDetail= createSlice({
    name:"User details",
    initialState,
    reducer:{
        
    }
})

export default userDetail.reducer;