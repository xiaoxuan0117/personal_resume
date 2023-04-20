import styled from "styled-components";

export const ExperienceWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 200px;
  padding-top: 76px;
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
  margin-bottom: 90px;
`;

export const CompanyDetail = styled.div`
  position: relative;
  margin-left: 16px;
  padding-bottom: 62px;
  top: 50px;
  transition: top 0.5s ease-in-out;

  &.active {
    top: 0px;
  }

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

export const SchoolExp = styled.div`
  position: relative;
  border-left: 1px solid ${(props) => props.theme.gray};
  overflow: hidden;
`;

export const SchoolDetail = styled.div`
  position: relative;
  margin-left: 16px;
  padding-top: 50px;
  transition: padding-top 0.5s ease-in-out;

  &.active {
    padding-top: 0;
  }

  & > .duration,
  .schoolName {
    font-size: 16px;
    font-weight: 700;
    margin-bottom: 16px;
    letter-spacing: 0.05em;
  }

  & > .schoolSummary {
    font-size: 14px;
    font-weight: 400;
    letter-spacing: 0.05em;
    line-height: 20px;
    margin-left: 49px;
  }

  & > ul li {
    font-size: 14px;
    font-weight: 400;
    letter-spacing: 0.05em;
    line-height: 20px;
  }
`;
