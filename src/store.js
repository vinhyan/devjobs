import { configureStore } from "@reduxjs/toolkit";
import jobsSlice from "./features/jobsSlice";

export default configureStore({
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false,
    }),
  reducer: {
    jobListing: jobsSlice,
  },
});
