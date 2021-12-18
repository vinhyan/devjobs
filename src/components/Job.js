import React from "react";
//styles
import styled from "styled-components";
//redux
import { useDispatch } from "react-redux";
import { selectedJob } from "../features/jobsSlice";
//Router
import { Link } from "react-router-dom";

const Job = ({ job }) => {
  const dispatch = useDispatch();

  const handleJobClick = (job) => {
    dispatch(selectedJob(job));
  };

  return (
    <JobStyled onClick={() => handleJobClick(job)} job={job}>
      <LinkStyled to={`job/${job.id}`}>
        <div className="logo">
          <img src={job.logo} alt={job.company} />
        </div>
        <div className="container">
          <p className="top-detail">
            <span>{job.postedAt}</span> &#183; <span>{job.contract}</span>
          </p>
          <h3>{job.position}</h3>
          <p>{job.company}</p>
          <h4>{job.location}</h4>
        </div>
      </LinkStyled>
    </JobStyled>
  );
};

const LinkStyled = styled(Link)`
  text-decoration: none;
`;

const JobStyled = styled.div`
  cursor: pointer;
  /* margin: 80px 0; */
  position: relative;
  .logo {
    width: 50px;
    height: 50px;
    background-color: ${(prop) => prop.job.logoBackground};
    position: absolute;
    top: -25px;
    left: 32px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 15px;
  }

  .container {
    background-color: white;
    padding: 49px 32px 36px 32px;
    border-radius: 6px;

    .top-detail {
      display: flex;
      gap: 12px;
    }

    h3 {
      padding: 13px 0 17px 0;
    }

    h4 {
      padding-top: 44px;
    }
  }
`;
export default Job;
