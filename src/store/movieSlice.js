import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name:"movies",
    initialState: {
        nowPlayingMovies: null,
        trailer : null,
    },
    reducers:{
        addNowPlayingMovies: (state, action) => {
            state.nowPlayingMovies = action.payload;
        },
        addTrailerVideos: (state, action) => {
            state.trailer = action.payload;
        }
    }
});

export const {addNowPlayingMovies, addTrailerVideos} = movieSlice.actions;

export default movieSlice.reducer;