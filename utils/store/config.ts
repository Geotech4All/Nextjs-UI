import { configureStore } from "@reduxjs/toolkit";
import adminUserReducer from "@store/slices/adminUserSlice";

export const store = configureStore({
  reducer: {
    adminUser: adminUserReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
