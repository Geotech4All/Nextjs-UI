/* eslint-disable @typescript-eslint/consistent-type-assertions */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserNode, Maybe } from "@utils/graphql/codegen/graphql";
import { RootState } from "@store/config";

const adminUser = createSlice({
  name: "adminUser",
  initialState: {} as UserNode,
  reducers: {
    setAdminUser: (state, action: PayloadAction<Maybe<UserNode>>) => {
      const { payload } = action;
      const newState = Object.assign(state, payload);
      return newState;
    }
  }
});

export const { setAdminUser } = adminUser.actions;
export default adminUser.reducer;

export const selectAdminUser = (state: RootState): UserNode => state.adminUser;
