import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  roles: [],
  loading: false,
};

const roleSlice = createSlice({
  name: "role",
  initialState,
  reducers: {
    setRoles(state, action) {
      state.roles = action.payload;
    },
    clearRoles(state) {
      state.roles = [];
    },
  },
});

export const { setRoles, clearRoles } = roleSlice.actions;

// 🔴 YE LINE MANDATORY HAI
export default roleSlice.reducer;
