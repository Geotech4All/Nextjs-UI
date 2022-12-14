import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PodcastTypeConnection, PodcastTypeEdge } from "@utils/graphql/codegen/graphql";
import { RootState } from "@store/config";

const initialState: PodcastTypeEdge[] = [];

const podcastListSlice = createSlice({
  name: "podcastList",
  initialState,
  reducers: {
    setPocastList: (state, action: PayloadAction<PodcastTypeConnection>) => {
      const newState = Object.assign(state, action.payload.edges);
      return newState;
    }
  }
});

export const { setPocastList } = podcastListSlice.actions;
export default podcastListSlice.reducer;
export const selectPodcasts = (state: RootState): PodcastTypeEdge[] => state.podcasts;
