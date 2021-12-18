import styled, { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: 'Kumbh Sans', sans-serif;
    }

    body {
        position: relative;
        background: no-repeat url("/./assets/desktop/bg-pattern-header.svg");
        padding: 0 165px 0 165px;
        background-color: #F2F2F2;
        color: #6E8098;

    }

    h1 {
        font-size: 28px;
        line-height: 34px;
        color: #19202D;

    }

    h2 {
        font-size: 24px;
        line-height: 29px;

    }

    h3 {
        font-size: 20px;
        line-height: 24px;
        color: #19202D;

    }

    h4 {
        font-size: 14px;
        line-height: 18px;
        color: #5964E0;


    }

    p {
        font-size: 16px;
        line-height: 26px;
        color: #6E8098;

    }

    ol, ul {
        display: flex;
        flex-direction: column;
        gap: 8px;
        line-height: 26px; 
        
        li {
            margin-left: 16.14px;

            &::marker {
                color: #5964E0;
                font-weight: bold;
                padding-left: 25px;

            }
            span {
                position: relative;
                left: 25px;
            }
        }
    }

 

   
`;

export const Button = styled.button`
  width: 123px;
  height: 48px;
  background: #5964e0;
  border-radius: 5px;
  color: #ffffff;
  border: none;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background: #939bf4;
  }
`;



export default GlobalStyles;
