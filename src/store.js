import { configureStore } from "@reduxjs/toolkit";
import jobsSlice from "./features/jobsSlice";
import searchSlice from "./features/searchSlice";
import darkModeSlice from "./features/darkModeSlice";

export default configureStore({
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false,
    }),
  reducer: {
    jobListing: jobsSlice,
    search: searchSlice,
    darkMode: darkModeSlice,
  },
});
