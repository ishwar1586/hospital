import { configureStore } from "@reduxjs/toolkit";

import authReducer from "./Slice/auth.slice";
import roleReducer from "./Slice/role.slice";
import userReducer from "./Slice/user.slice";
import uiReducer from "./Slice/ui.slice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    role: roleReducer,
    user: userReducer,
    ui: uiReducer
  }
});
