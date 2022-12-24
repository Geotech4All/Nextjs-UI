import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "@store/config";

interface AdminPageProps {
  sideOpen: boolean;
  currentRoute: number;
}

const initialState: AdminPageProps = {
  sideOpen: false,
  currentRoute: 1
};

const adminPageSlice = createSlice({
  name: "AdminPage",
  initialState,
  reducers: {
    setOpen: (state, action: PayloadAction<boolean>) => {
      const newState = { ...state, sideOpen: action.payload };
      return newState;
    },
    setCurrRoute: (state, action: PayloadAction<number>) => {
      const newState = { ...state, currentRoute: action.payload };
      return newState;
    }
  }
});

export const { setOpen, setCurrRoute } = adminPageSlice.actions;
export default adminPageSlice.reducer;

export const selectAdminPage = (state: RootState): AdminPageProps => state.adminPage;
