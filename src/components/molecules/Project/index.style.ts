import styled from "styled-components";

export const ProjectWapper = styled.div`
  position: relative;
  margin-top: 90px;
  padding-top: 50px;
  transition: padding-top 0.5s ease-in-out;

  &.active {
    padding-top: 0px;
  }

  & > img {
    position: relative;
    left: -20px;
    margin-bottom: 40px;
    transition: left 0.5s ease-in-out;

    &.active {
      left: 0px;
    }
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
