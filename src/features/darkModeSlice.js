import { createSlice } from "@reduxjs/toolkit";


const darkModeSlice = createSlice({
  name: "darkMode",
  initialState: false,
  reducers: {
    toggleDarkMode: (state, action) => {
      return state = action.payload;
    },
  },
});

export const { toggleDarkMode } = darkModeSlice.actions;
export const darkModeSelect = (state) => state.darkMode;

export default darkModeSlice.reducer;
