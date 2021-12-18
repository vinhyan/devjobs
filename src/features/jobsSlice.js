import { createSlice } from "@reduxjs/toolkit";
import jobListingData from "../data/data.json";

export const loadJobs = {
  type: "jobs/loadJobs",
  payload: jobListingData,
};

// export const selectedJob = {
//   type: "jobs/selectedJob",
// };

const jobsSlice = createSlice({
  name: "jobs",
  initialState: {
    jobs: [],
    selectedJob: {},
  },
  reducers: {
    loadJobs: (state, action) => {
      state.jobs = action.payload;
    },
    selectedJob: (state, action) => {
      state.selectedJob = action.payload;
    },
  },
});

export const { selectedJob } = jobsSlice.actions;

export const jobsSelect = (state) => state.jobListing.jobs;
export const selectedJobSelect = (state) => state.jobListing.selectedJob;

export default jobsSlice.reducer;
