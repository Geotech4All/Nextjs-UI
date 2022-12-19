import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  PodcastType,
  PodcastTypeConnection,
  PodcastTypeEdge,
  Maybe
} from "@utils/graphql/codegen/graphql";
import { RootState } from "@store/config";

const initialState: PodcastTypeEdge[] = [];

const podcastListSlice = createSlice({
  name: "podcastList",
  initialState,
  reducers: {
    setPocastList: (state, action: PayloadAction<PodcastTypeConnection>) => {
      const newState = Object.assign(state, action.payload.edges);
      return newState;
    },
    prependPodcast: (state, action: PayloadAction<Maybe<PodcastType>>) => {
      const newEdge: PodcastTypeEdge = { cursor: "", node: action.payload };
      return [newEdge, ...state];
    }
  }
});

export const { setPocastList, prependPodcast } = podcastListSlice.actions;
export default podcastListSlice.reducer;
export const selectPodcasts = (state: RootState): PodcastTypeEdge[] => state.podcasts;
