import {createSlice} from '@reduxjs/toolkit';



const userSlice=createSlice({
    name:'user',
    initialState:[],
    reducers:{
        addUser(state,action){
            state.push(action.payload);
        },
        removeUser(state,action){
            state.splice(action.payload,1)
        },
        clearUsers(state,action){
            return [];
            // state.splice(action.payload);
        },
    },
});

export default userSlice.reducer;

export const {addUser,removeUser,clearUsers} = userSlice.actions;