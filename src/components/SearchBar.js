import React from "react";

//styles
import styled from "styled-components";
import { Button } from "../util/GlobalStyles";

const SearchBar = () => {
  return (
    <SearchBarStyled>
      <div className="job-filter filter-wrap">
        <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M17.112 15.059h-1.088l-.377-.377a8.814 8.814 0 002.15-5.784A8.898 8.898 0 008.898 0 8.898 8.898 0 000 8.898a8.898 8.898 0 008.898 8.899c2.211 0 4.23-.808 5.784-2.143l.377.377v1.081l6.845 6.832 2.04-2.04-6.832-6.845zm-8.214 0A6.16 6.16 0 118.9 2.737a6.16 6.16 0 010 12.322z"
            fill="#5964E0"
            fillRule="nonzero"
          />
        </svg>
        <input
          type="text"
          placeholder="Filter by title, companies, expertise&hellip;"
        />
      </div>
      <div className="border"></div>
      <div className="location-filter filter-wrap ">
        <svg width="17" height="24" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M14.358 2.451A8.3 8.3 0 008.448 0a8.3 8.3 0 00-5.911 2.451c-2.922 2.925-3.285 8.427-.786 11.76l6.697 9.683 6.687-9.669c2.508-3.347 2.145-8.85-.777-11.774zm-5.833 8.894a3.057 3.057 0 01-3.051-3.054 3.057 3.057 0 013.05-3.055 3.057 3.057 0 013.052 3.055 3.057 3.057 0 01-3.051 3.054z"
            fill="#5964E0"
            fillRule="nonzero"
          />
        </svg>
        <input type="text" placeholder="Filter by location&hellip;" />
      </div>
      <div className="border"></div>
      <div className="fulltime-filter">
        <label className="checkbox-container" htmlFor="fulltime">
          Full Time Only
          <input
            className="checkbox"
            type="checkbox"
            id="fulltime"
            name="fulltime"
            value="Fulltime"
          />
          <span className="checkmark"></span>
        </label>
      </div>
      <Button type="submit">Search</Button>
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

  .job-filter {
    padding-left: 16px;
    flex: 2;

    input {
      flex: 1;
    }
  }

  .location-filter {
    flex: 1;
    input {
      flex: 1;
    }
  }

  .fulltime-filter {
    flex: 1;
    color: #19202d;

    .checkbox-container {
      display: block;
      position: relative;
      padding-left: 40px;
      cursor: pointer;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
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
  }

  .filter-wrap {
    display: flex;
    align-items: flex-start;
    gap: 16px;

    input {
      border: none;
      height: 24px;
      font-size: 16px;

      &:focus {
        outline: none;
      }
    }
  }

  .border {
    width: 1px;
    height: 80px;
    background: #6e8098;
    mix-blend-mode: normal;
    opacity: 0.2;
  }
`;

export default SearchBar;
