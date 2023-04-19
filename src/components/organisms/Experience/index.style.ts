import styled from "styled-components";

export const ExperienceWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ExperienceContent = styled.div`
  position: relative;
  text-align: start;
  width: 70%;
`;

export const Title = styled.div`
  position: relative;
  font-size: 48px;
  font-weight: 700;
  letter-spacing: 0.05em;
  margin-bottom: 44px;
`;

export const CompanyExp = styled.div`
  position: relative;
  border-left: 1px solid ${(props) => props.theme.gray};
  overflow-x: hidden;
`;

export const CompanyDetail = styled.div`
  position: relative;
  margin-left: 16px;
  padding-bottom: 62px;

  & > .duration,
  .companyName {
    font-size: 16px;
    font-weight: 700;
    margin-bottom: 16px;
    letter-spacing: 0.05em;
  }

  & > .companySummary {
    font-size: 14px;
    font-weight: 400;
    letter-spacing: 0.05em;
    line-height: 20px;
    margin-left: 49px;
  }
`;

export const ProjectWapper = styled.div`
  position: relative;
  margin-bottom: 100px;

  & > img {
    position: relative;
    left: -20px;
    margin-bottom: 40px;
  }
`;

export const ProjectDetail = styled.div`
  position: relative;
  margin-left: 16px;

  & > .projectName {
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 5px;
    letter-spacing: 0.1em;
  }

  & > .projectTags {
    display: flex;
    margin-bottom: 19px;

    & .tag {
      margin-right: 10px;
    }
  }

  & > .projectSummary {
    font-size: 14px;
    font-weight: 400;
    letter-spacing: 0.05em;
    line-height: 20px;
  }

  & > ul li {
    font-size: 14px;
    font-weight: 400;
    letter-spacing: 0.05em;
    line-height: 20px;
  }
`;
