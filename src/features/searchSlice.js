import { createSlice } from "@reduxjs/toolkit";

export const clearSearch = {
  type: "search/clearSearch",
};

const searchSlice = createSlice({
  name: "search",
  initialState: {
    position: "",
    location: "",
    fullTime: false,
  },
  reducers: {
    setPositionSearchTerm: (state, action) => {
      state.position = action.payload;
    },
    setLocationSearchTerm: (state, action) => {
      state.location = action.payload;
    },
    setFullTimeSearchTerm: (state, action) => {
      state.fullTime = action.payload;
    },
    clearSearch: (state) => {
      state.position = "";
      state.location = "";
      state.fullTime = false;
    },
  },
});

export const {
  setPositionSearchTerm,
  setLocationSearchTerm,
  setFullTimeSearchTerm,
} = searchSlice.actions;

export const searchTermSelect = (state) => state.search;

export default searchSlice.reducer;
