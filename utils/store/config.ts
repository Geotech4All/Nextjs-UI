import { configureStore } from "@reduxjs/toolkit";
import adminUserReducer from "@store/slices/adminUserSlice";
import podcastListReducer from "@store/slices/podcastListSlice";

export const store = configureStore({
  reducer: {
    adminUser: adminUserReducer,
    podcasts: podcastListReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
