import React, { useState } from "react";

//styles
import styled from "styled-components";
import { Button } from "../util/GlobalStyles";
//redux
import { useDispatch, useSelector } from "react-redux";
import {
  setPositionSearchTerm,
  setLocationSearchTerm,
  setFullTimeSearchTerm,
} from "../features/searchSlice";
import { searchedJobs, getSearchedJobs } from "../features/jobsSlice";

const SearchBar = () => {
  const [mobileFilter, setMobileFitler] = useState(false);
  const dispatch = useDispatch();
  const { position, location, fullTime } = useSelector((state) => state.search);
  const searchedJobResults = useSelector(getSearchedJobs);

  const positionSearchOnChange = (e) => {
    dispatch(setPositionSearchTerm(e.target.value));
  };

  const locationSearchOnChange = (e) => {
    dispatch(setLocationSearchTerm(e.target.value));
  };

  const fullTimeOnChange = (e) => {
    let isChecked = e.target.checked ? true : false;
    dispatch(setFullTimeSearchTerm(isChecked));
  };

  const handleSearchClick = (e) => {
    e.preventDefault();
    dispatch(searchedJobs(searchedJobResults));
    setMobileFitler(false);
  };

  const toggleMobileFilter = () => {
    setMobileFitler(!mobileFilter);
  };

  return (
    <SearchBarStyled>
      <div className="job-filter">
        <svg
          className="magnifier-desktop"
          width="24"
          height="24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17.112 15.059h-1.088l-.377-.377a8.814 8.814 0 002.15-5.784A8.898 8.898 0 008.898 0 8.898 8.898 0 000 8.898a8.898 8.898 0 008.898 8.899c2.211 0 4.23-.808 5.784-2.143l.377.377v1.081l6.845 6.832 2.04-2.04-6.832-6.845zm-8.214 0A6.16 6.16 0 118.9 2.737a6.16 6.16 0 010 12.322z"
            fill="#5964E0"
            fillRule="nonzero"
          />
        </svg>
        <input
          type="text"
          placeholder="Filter by title, companies, expertise&hellip;"
          onChange={positionSearchOnChange}
          value={position}
        />
      </div>
      <svg
        onClick={toggleMobileFilter}
        className="filter-icon"
        width="20"
        height="20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M19.108 0H.86a.86.86 0 00-.764.455.833.833 0 00.068.884l6.685 9.202.007.01c.242.32.374.708.375 1.107v7.502a.825.825 0 00.248.594.865.865 0 00.942.18l3.756-1.4c.337-.1.56-.41.56-.784v-6.092c0-.399.132-.787.375-1.108l.007-.009 6.685-9.202c.19-.26.217-.6.068-.884A.86.86 0 0019.108 0z"
          fill="#6E8098"
          fillRule="nonzero"
        />
      </svg>
      <SearchMobileButton onClick={handleSearchClick}>
        <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M17.112 15.059h-1.088l-.377-.377a8.814 8.814 0 002.15-5.784A8.898 8.898 0 008.898 0 8.898 8.898 0 000 8.898a8.898 8.898 0 008.898 8.899c2.211 0 4.23-.808 5.784-2.143l.377.377v1.081l6.845 6.832 2.04-2.04-6.832-6.845zm-8.214 0A6.16 6.16 0 118.9 2.737a6.16 6.16 0 010 12.322z"
            fill="#FFFFFF"
            fillRule="nonzero"
          />
        </svg>
      </SearchMobileButton>

      <FullTimeFilter toggle={mobileFilter}>
        <div className="border"></div>
        <div className="location-filter ">
          <svg width="17" height="24" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M14.358 2.451A8.3 8.3 0 008.448 0a8.3 8.3 0 00-5.911 2.451c-2.922 2.925-3.285 8.427-.786 11.76l6.697 9.683 6.687-9.669c2.508-3.347 2.145-8.85-.777-11.774zm-5.833 8.894a3.057 3.057 0 01-3.051-3.054 3.057 3.057 0 013.05-3.055 3.057 3.057 0 013.052 3.055 3.057 3.057 0 01-3.051 3.054z"
              fill="#5964E0"
              fillRule="nonzero"
            />
          </svg>
          <input
            type="text"
            placeholder="Filter by location&hellip;"
            onChange={locationSearchOnChange}
            value={location}
          />
        </div>
        <div className="border"></div>

        <label className="checkbox-container" htmlFor="fulltime">
          Full Time <span className="only">Only</span>
          <input
            onChange={fullTimeOnChange}
            className="checkbox"
            type="checkbox"
            id="fulltime"
            name="fulltime"
            value={fullTime}
            checked={fullTime}
          />
          <span className="checkmark"></span>
        </label>
        <SearchButton onClick={handleSearchClick} type="submit">
          Search
        </SearchButton>
      </FullTimeFilter>
      <Overlay toggle={mobileFilter} onClick={toggleMobileFilter}></Overlay>
    </SearchBarStyled>
  );
};

const SearchBarStyled = styled.form`
  display: flex;
  align-items: center;
  gap: 32px;
  padding: 0 16px;
  border-radius: 6px;
  background: #ffffff;
  height: 80px;

  input {
    border: none;
    height: 24px;
    font-size: 16px;

    &:focus {
      outline: none;
    }
  }

  .job-filter {
    padding-left: 16px;
    width: 35%;
    display: flex;
    align-items: flex-start;
    gap: 16px;

    input {
      width: 80%;
    }
  }

  .border {
    width: 1px;
    height: 80px;
    background: #6e8098;
    mix-blend-mode: normal;
    opacity: 0.2;
  }

  .filter-icon {
    display: none;
  }

  @media (max-width: 1355px) {
    gap: 24px;
  }

  @media (max-width: 730px) {
    gap: 24px;

    .magnifier-desktop {
      display: none;
    }

    .job-filter {
      padding-left: 8px;

      width: 100%;
      input {
        width: 80%;
      }
    }

    .filter-icon {
      display: block;
      min-width: 20px;
    }
  }
`;

const SearchMobileButton = styled(Button)`
  min-width: 48px;
  height: 48px;
  display: none;

  @media (max-width: 730px) {
    display: block;
  }
`;

const FullTimeFilter = styled.div`
  color: #19202d;
  display: flex;
  align-items: center;
  width: 65%;
  justify-content: space-between;
  gap: 32px;

  .location-filter {
    display: flex;
    align-items: flex-start;
    gap: 16px;
    width: 40%;
    flex: 1;

    input {
      width: 75%;
    }
  }

  .checkbox-container {
    width: 25%;
    display: block;
    position: relative;
    padding-left: 40px;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    white-space: nowrap;
  }

  /* Hide the browser's default checkbox */
  .checkbox-container .checkbox {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }

  /* Create a custom checkbox */
  .checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 24px;
    width: 24px;
    background: #19202d;
    mix-blend-mode: normal;
    opacity: 0.1;
    border-radius: 3px;
  }

  /* On mouse-over, add a grey background color */
  .checkbox-container:hover .checkbox ~ .checkmark {
    background: #5964e0;
    mix-blend-mode: normal;
    opacity: 0.25;
  }

  /* When the checkbox is checked, add a blue background */
  .checkbox-container .checkbox:checked ~ .checkmark {
    background-color: #5964e0;
    opacity: 1;
    background-image: url("/./assets/desktop/icon-check.svg");
    background-repeat: no-repeat;
    background-position: center;
  }

  @media (max-width: 768px) {
    gap: 20px;

    .checkbox-container {
      .only {
        display: none;
      }
    }
  }

  // POP UP MODAL FOR FILTER

  @media (max-width: 730px) {
    /* display: none; */
    width: calc(100% - 48px);
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%)
      ${(prop) => (prop.toggle ? "scale(1)" : "scale(0)")};
    z-index: 20;
    background: #ffffff;
    flex-direction: column;
    align-items: flex-start;
    border-radius: 6px;
    background: #ffffff;
    gap: 0;
    z-index: 50;

    .border {
      width: 100%;
      height: 1px;
    }

    .location-filter {
      margin: 24px;
      width: calc(100% - 48px);

      input {
        width: 80%;
      }
    }

    .checkbox-container {
      width: calc(100% - 48px);
      margin: 24px;
    }
  }
`;

const SearchButton = styled(Button)`
  width: 123px;
  @media (max-width: 768px) {
    width: 80px;
  }

  @media (max-width: 730px) {
    width: calc(100% - 48px);
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 24px;
  }
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 30;

  ${(prop) => {
    if (prop.toggle) {
      return `
      opacity: 1;
      pointer-events: all;
      `;
    } else {
      return `
        opacity: 0;
        pointer-events: none;
      `;
    }
  }}
`;

export default SearchBar;
