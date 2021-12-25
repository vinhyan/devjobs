import React from "react";

//styles
import styled from "styled-components";
//Router
import { Link } from "react-router-dom";
//redux
import { clearSearch } from "../features/searchSlice";
import { useDispatch, useSelector } from "react-redux";
import { clearFilteredJobs } from "../features/jobsSlice";
import { toggleDarkMode, darkModeSelect } from "../features/darkModeSlice";

const Nav = () => {
  const dispatch = useDispatch();
  const darkMode = useSelector(darkModeSelect);

  const handleClick = () => {
    dispatch(clearSearch);
    dispatch(clearFilteredJobs);
  };

  const handleDarkModeChange = (e) => {
    let isDarkMode = e.target.checked ? true : false;
    dispatch(toggleDarkMode(isDarkMode));
  };

  return (
    <NavStyled>
      <div className="header">
        <LinkStyled to="/" onClick={handleClick}>
          <h1>devjobs</h1>
        </LinkStyled>
        <div className="darkmode">
          <svg width="20" height="19" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M10 15.635c.33 0 .612.295.612.639v1.89c0 .344-.282.638-.612.638s-.612-.294-.612-.638v-1.89c0-.344.282-.639.612-.639zm-4.488-1.783c.27.262.27.68 0 .941L4.03 16.231a.698.698 0 01-.97 0 .649.649 0 010-.941l1.482-1.438c.27-.261.7-.261.97 0zm9.946 0l1.483 1.438c.27.261.27.68 0 .941a.698.698 0 01-.97 0l-1.483-1.438a.649.649 0 010-.94c.242-.262.674-.262.97 0zM10 4.552c1.396 0 2.685.525 3.598 1.4.913.85 1.504 2.05 1.504 3.35 0 1.3-.59 2.5-1.504 3.35a5.314 5.314 0 01-3.598 1.4c-1.396 0-2.685-.525-3.598-1.4-.913-.85-1.504-2.05-1.504-3.35 0-1.3.564-2.5 1.504-3.35A5.314 5.314 0 0110 4.552zM2.607 8.906c.355 0 .658.274.658.594 0 .32-.303.594-.658.594H.658C.304 10.094 0 9.82 0 9.5c0-.32.304-.594.658-.594h1.95zm16.735 0c.354 0 .658.274.658.594 0 .32-.304.594-.658.594h-1.95c-.354 0-.657-.274-.657-.594 0-.32.303-.594.658-.594h1.949zM4.03 2.77l1.482 1.438c.27.261.27.68 0 .94-.242.262-.674.262-.97 0L3.059 3.71a.649.649 0 010-.941c.27-.261.701-.261.97 0zm12.91 0c.27.261.27.68 0 .941l-1.482 1.438a.698.698 0 01-.97 0 .649.649 0 010-.941l1.482-1.438c.27-.261.701-.261.97 0zM10 .198c.33 0 .612.294.612.638v1.89c0 .344-.282.639-.612.639s-.612-.295-.612-.639V.836c0-.344.282-.638.612-.638z"
              fill="#FFF"
              fillRule="nonzero"
            />
          </svg>
          <label className="switch">
            <input
              type="checkbox"
              onChange={handleDarkModeChange}
              value={darkMode}
              checked={darkMode}
            />
            <span className="slider"></span>
          </label>

          <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M6 0c1.516 0 2.925.566 3.978 1.523A3.979 3.979 0 008 1a4.014 4.014 0 00-2.821 1.179A3.927 3.927 0 004 5c0 1.095.463 2.105 1.179 2.821A3.927 3.927 0 008 9a4.034 4.034 0 003.974-3.548c.017.18.026.364.026.548a6.02 6.02 0 01-1.768 4.232A6.02 6.02 0 016 12a5.89 5.89 0 01-4.232-1.768A6.02 6.02 0 010 6a5.89 5.89 0 011.768-4.232A6.02 6.02 0 016 0z"
              fill="#FFF"
              fillRule="nonzero"
            />
          </svg>
        </div>
      </div>
    </NavStyled>
  );
};

const NavStyled = styled.div`
  .header {
    padding: 45px 0 40px 0;
    color: #ffffff;
    display: flex;
    justify-content: space-between;
    align-items: center;

    h1 {
      color: #ffffff;
    }
  }

  .darkmode {
    display: flex;
    align-items: center;
    gap: 16px;

    .switch {
      position: relative;
      display: inline-block;
      width: 48px;
      height: 24px;
    }

    .switch input {
      opacity: 0;
      width: 0;
      height: 0;
    }

    .slider {
      position: absolute;
      cursor: pointer;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: #ffffff;
      -webkit-transition: 0.4s;
      transition: 0.4s;
      border-radius: 34px;
    }

    .slider:before {
      position: absolute;
      content: "";
      height: 14px;
      width: 14px;
      left: 5px;
      bottom: 5px;
      background-color: #5964e0;
      -webkit-transition: 0.4s;
      transition: 0.4s;
      border-radius: 50%;
    }

    input:checked + .slider {
      background-color: #ffffff;
    }

    input:focus + .slider {
      box-shadow: 0 0 1px #ffffff;
    }

    input:checked + .slider:before {
      -webkit-transform: translateX(25px);
      -ms-transform: translateX(25px);
      transform: translateX(25px);
    }
  }

  @media (max-width: 375px) {
    .header {
      padding: 32px 0;
    }
  }
`;

const LinkStyled = styled(Link)`
  text-decoration: none;
`;

export default Nav;
