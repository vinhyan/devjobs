import { createSlice } from "@reduxjs/toolkit";
import jobListingData from "../data/data.json";
import { searchTermSelect } from "./searchSlice";

export const loadJobs = {
  type: "jobs/loadJobs",
  payload: jobListingData,
};

export const clearFilteredJobs = {
  type: "jobs/clearFilteredJobs",
};

const jobsSlice = createSlice({
  name: "jobs",
  initialState: {
    jobs: [],
    selectedJob: {},
    searchedJobs: [],
  },
  reducers: {
    loadJobs: (state, action) => {
      state.jobs = action.payload;
    },
    selectedJob: (state, action) => {
      state.selectedJob = action.payload;
    },
    searchedJobs: (state, action) => {
      state.searchedJobs = action.payload;
    },
    clearFilteredJobs: (state) => {
      state.selectedJob = {};
      state.searchedJobs = [];
    },
  },
});

export const { selectedJob, searchedJobs } = jobsSlice.actions;

export const jobsSelect = (state) => state.jobListing.jobs;
export const selectedJobSelect = (state) => state.jobListing.selectedJob;
export const searchedJobsSelect = (state) => state.jobListing.searchedJobs;

export const getSearchedJobs = (state) => {
  const jobs = jobsSelect(state);
  const { position, location, fullTime } = searchTermSelect(state);

  return jobs.filter((job) => {
    const positionAndLocation =
      job.position.toLowerCase().includes(position.toLowerCase()) &&
      job.location.toLowerCase().includes(location.toLowerCase());
    return fullTime
      ? job.contract === "Full Time" && positionAndLocation
      : positionAndLocation;
  });
};

//need to get searchedjobs from the state!!

export default jobsSlice.reducer;
