import { configureStore } from "@reduxjs/toolkit";
import jobsSlice from "./features/jobsSlice";
import searchSlice from "./features/searchSlice";

export default configureStore({
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false,
    }),
  reducer: {
    jobListing: jobsSlice,
    search: searchSlice,
  },
});
