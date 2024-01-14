import { createSlice } from "@reduxjs/toolkit";

const initialState={
    isLoading:false,
}

export const createUser= createSlice({
    name:"CRUD",
    initialState
})