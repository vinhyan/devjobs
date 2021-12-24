import React, { useState, useEffect } from "react";
//redux
import { useDispatch, useSelector } from "react-redux";
import {
  loadJobs,
  jobsSelect,
  searchedJobsSelect,
} from "../features/jobsSlice";
//component
import SearchBar from "./SearchBar";
import Job from "./Job";
//style
import styled from "styled-components";
import { Button } from "../util/GlobalStyles";
//util
import ScrollToTop from "../util/ScrollToTop";

const JobList = () => {
  const [visibleItems, setVisibleItems] = useState(12);
  const dispatch = useDispatch();
  const jobs = useSelector(jobsSelect);
  const searchedJobs = useSelector(searchedJobsSelect);

  useEffect(() => {
    dispatch(loadJobs);
  }, [dispatch]);

  const handleLoadClick = (e) => {
    e.preventDefault();
    setVisibleItems((prev) => prev + 12);
  };

  return (
    <OuterContainer>
      <SearchBar />
      <JobListContainer>
        {searchedJobs.length ? (
          <JobListStyled>
            {searchedJobs.slice(0, visibleItems).map((job) => (
              <Job job={job} key={job.id} />
            ))}
          </JobListStyled>
        ) : (
          <>
            <JobListStyled>
              {jobs.slice(0, visibleItems).map((job) => (
                <Job job={job} key={job.id} />
              ))}
            </JobListStyled>
            <LoadMoreButton
              allLoaded={jobs.length < visibleItems ? true : false}
              onClick={handleLoadClick}
            >
              Load more
            </LoadMoreButton>
          </>
        )}
      </JobListContainer>
      <ScrollToTop />
    </OuterContainer>
  );
};
const OuterContainer = styled.div`
  padding-bottom: 104px;
`;
const JobListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const JobListStyled = styled.div`
  padding: 80px 0 56px 0;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 65px 30px;

  @media (max-width: 808px) {
    grid-template-columns: repeat(auto-fit, minmax(339px, 1fr));
    column-gap: 10px;
  }

  @media (max-width: 395px) {
    padding-top: 57px;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    column-gap: 10px;
  }
`;

const LoadMoreButton = styled(Button)`
  background: ${(props) => (props.allLoaded ? "#939bf4" : "#5964e0")};
  pointer-events: ${(props) => (props.allLoaded ? "none" : "auto")};
`;
export default JobList;
