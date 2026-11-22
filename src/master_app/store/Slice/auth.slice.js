import { createSlice } from "@reduxjs/toolkit";
const savedToken=localStorage.getItem("hospital_token");
let savedUser=null; try{savedUser=JSON.parse(localStorage.getItem("hospital_user")||"null");}catch{}
const initialState={isAuthenticated:Boolean(savedToken),user:savedUser,token:savedToken};
const authSlice=createSlice({name:"auth",initialState,reducers:{loginSuccess(state,action){state.isAuthenticated=true;state.user=action.payload.user;state.token=action.payload.token;localStorage.setItem("hospital_token",action.payload.token);localStorage.setItem("hospital_user",JSON.stringify(action.payload.user));},logout(state){state.isAuthenticated=false;state.user=null;state.token=null;localStorage.removeItem("hospital_token");localStorage.removeItem("hospital_user");}}});
export const {loginSuccess,logout}=authSlice.actions; export default authSlice.reducer;
