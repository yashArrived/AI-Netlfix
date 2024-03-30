import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    popularMovies: null,
    horrorMovies: null,
    upcomingMovies:null,
    trailerVideo: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
    addHorrorMovies : (state,action) => {
        state.horrorMovies = action.payload;
    },
    addUpcomingMovies: (state,action)=> {
      state.upcomingMovies = action.payload;
    },
    addTrailerVideo: (state, action) => {
      state.trailerVideo = action.payload;
    },
  },
});

export const { addNowPlayingMovies, addTrailerVideo, addPopularMovies,addHorrorMovies,addUpcomingMovies } =
  moviesSlice.actions;

export default moviesSlice.reducer;