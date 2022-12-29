import type { BgCollor } from "@app/components";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "@store/config";

interface PlayerType {
  src?: string;
  color?: BgCollor;
  playing?: boolean;
  colorSet?: boolean;
}

const playerSlice = createSlice({
  name: "player",
  // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
  initialState: {} as PlayerType,
  reducers: {
    setPlayer: (state, action: PayloadAction<PlayerType>) => {
      const newState = Object.assign(state, action.payload);
      return newState;
    }
  }
});

export const { setPlayer } = playerSlice.actions;
export default playerSlice.reducer;

export const selectPlayer = (state: RootState): PlayerType => state.player;
