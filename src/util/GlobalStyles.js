import styled, { createGlobalStyle } from "styled-components";

export const lightModeSet = {
  body: {
    bgColor: "#F2F2F2",
    fontColor: "#6E8098",
  },
  card: {
    bgColor: "#FFFFFF",
    checkbox: "#19202d",
    fontColor: "#19202D",
    companyButtonText: "rgba(89, 100, 224, 1)",
    companyButton: "rgba(89, 100, 224, 0.1)",
    companyButtonHover: "rgba(89, 100, 224, 0.35)",
  },
};

export const darkModeSet = {
  body: {
    bgColor: "#121721",
    fontColor: "#FFFFFF",
  },
  card: {
    bgColor: "#19202D",
    checkbox: "rgba(255, 255, 255, 1)",
    fontColor: "#FFFFFF",
    companyButtonText: "#FFFFFF",
    companyButton: "rgba(255, 255, 255, 0.1)",
    companyButtonHover: "rgba(255, 255, 255, 0.35)",
  },
};

const GlobalStyles = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: 'Kumbh Sans', sans-serif;
    }

    body {
        position: relative;
        background-image: url("/assets/desktop/bg-pattern-header.svg");
        background-repeat: no-repeat;
        background-size: 100% 160px;
        padding: 0 165px;
        background-color: ${(prop) => prop.theme.body.bgColor};
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
        color: ${(prop) => prop.theme.card.fontColor};

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
            width: calc(100% - 41.14px);
            
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
    

    @media (max-width: 1355px) and (min-width: 768px)  {
        body {
            padding: 0 40px;
        }

    }

    @media (max-width: 768px) {
        body {
            padding: 0 24px;    
            background-image: url("/assets/tablet/bg-pattern-header.svg");
            background-size: auto;
        }
    }

    @media (max-width: 375px) {
        body {
            background-image: url("/assets/mobile/bg-pattern-header.svg");
        }
    }
`;

export const Button = styled.button`
  padding: 0 10px;
  max-width: 100%;
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
