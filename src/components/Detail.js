import React from "react";
//styles
import styled from "styled-components";
import { Button } from "../util/GlobalStyles";
//redux
import { useSelector } from "react-redux";
import { selectedJobSelect } from "../features/jobsSlice";
//util
import ScrollToTop from "../util/ScrollToTop";

const Detail = () => {
  const selectedJob = useSelector(selectedJobSelect);

  return Object.keys(selectedJob).length ? (
    <>
      <DetailStyled selectedJob={selectedJob}>
        <div className="banner">
          <div className="logo">
            <img src={`/${selectedJob.logo}`} alt="abc" />
          </div>
          <div className="company-info">
            <div>
              <h3>{selectedJob.company}</h3>
              <p>{selectedJob.website}</p>
            </div>
            <CompanyButton>Company Site</CompanyButton>
          </div>
        </div>
        <ContentStyled>
          <TopContainer>
            <div className="title">
              <span>{selectedJob.postedAt}</span> &#183;{" "}
              <span>{selectedJob.contract}</span>
              <h1>{selectedJob.position}</h1>
              <h4>{selectedJob.location}</h4>
            </div>
            <ApplyButton>Apply Now</ApplyButton>
          </TopContainer>
          <p className="intro">{selectedJob.description}</p>
          <div className="requirements">
            <h3>Requirements</h3>
            <p>{selectedJob.requirements.content}</p>
            <ul>
              {selectedJob.requirements.items.map((item) => (
                <li>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="requirements">
            <h3>What will you do</h3>
            <p>{selectedJob.role.content}</p>
            <ol>
              {selectedJob.role.items.map((item) => (
                <li>
                  <span>{item}</span>
                </li>
              ))}
            </ol>
          </div>
        </ContentStyled>
      </DetailStyled>
      <ActionCallStyled>
        <div className="wrap">
          <div className="title">
            <h1>{selectedJob.position}</h1>
            <p>{selectedJob.company}</p>
          </div>
          <Button>Apply Now</Button>
        </div>
      </ActionCallStyled>
      <ScrollToTop />
    </>
  ) : (
    ""
  );
};

const DetailStyled = styled.div`
  width: 730px;
  margin: 0 auto;

  .banner {
    position: relative;
    background: #ffffff;
    display: flex;
    border-radius: 6px;

    .logo {
      background: ${(prop) => prop.selectedJob.logoBackground};
      width: 140px;
      height: 140px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 6px 0px 0px 6px;

      img {
        width: 81px;
      }
    }

    .company-info {
      padding: 42px;
      flex: 1;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      gap: 15px;
    }
  }

  @media (max-width: 810px) {
    width: 100%;
  }

  @media (max-width: 480px) {
    .banner {
      margin-top: 15px;

      .logo {
        position: absolute;
        width: 50px;
        height: 50px;
        top: -25px;
        left: 50%;
        transform: translateX(-50%);
        border-radius: 15px;

        img {
          width: auto;
        }
      }

      .company-info {
        justify-content: center;
        padding: 49px 24px 32px 24px;

        div {
          text-align: center;
        }
      }
    }
  }
`;

const CompanyButton = styled(Button)`
  /* width: 147px; */
  background: rgba(89, 100, 224, 0.1);
  mix-blend-mode: normal;
  color: rgba(89, 100, 224, 1);
  padding: 16px 20px;
`;

const ContentStyled = styled.div`
  background: #ffffff;
  margin: 32px 0 80px 0;
  padding: 48px 43px 48px 48px;

  .intro {
    padding-top: 40px;
  }

  .requirements {
    padding-top: 48px;
    p {
      padding: 28px 0 24px 0;
    }
  }

  @media (max-width: 480px) {
    margin: 24px 0 64px 0;
    padding: 40px 24px;

    .intro {
      padding-top: 32px;
    }

    .requirements {
      padding-top: 40px;
      p {
        padding-bottom: 32px;
      }
    }
  }
`;

const ApplyButton = styled(Button)`
  @media (max-width: 480px) {
    width: 100%;
  }
`;

const TopContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 15px;

  .title {
    h1 {
      padding: 8px 0;
     
    }
  }

  @media (max-width: 480px) {
    gap: 50px;
  }
`;

const ActionCallStyled = styled.div`
  background: #ffffff;
  z-index: 1;
  position: absolute;
  width: 100%;
  left: 0;
  padding: 23px;

  .wrap {
    width: 730px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
  }

  @media (max-width: 810px) {
    padding: 23px 40px;
    .wrap {
      width: 100%;
    }
  }
`;
export default Detail;
