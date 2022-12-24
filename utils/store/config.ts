import { configureStore } from "@reduxjs/toolkit";
import adminUserReducer from "@store/slices/adminUserSlice";
import podcastListReducer from "@store/slices/podcastListSlice";
import adminPageReducer from "@store/slices/adminPageSlice";
import playerReducer from "@store/slices/playerSlice";

export const store = configureStore({
  reducer: {
    adminUser: adminUserReducer,
    podcasts: podcastListReducer,
    adminPage: adminPageReducer,
    player: playerReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
