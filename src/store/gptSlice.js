import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name:"gpt",
    initialState:{
        showGptSearch: false
    },
    reducers:{
        toggleGptSearchValue:(state, action) => {
            state.showGptSearch = !state.showGptSearch;

        }
    }
});

export const {toggleGptSearchValue} = gptSlice.actions;

export default gptSlice.reducer;

