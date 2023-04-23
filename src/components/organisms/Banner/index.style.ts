import styled from "styled-components";

export const BannerWrapper = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;

  & ::selection {
    background-color: #e1e2db;
  }
`;

export const BannerContent = styled.div`
  position: relative;
  width: 100%;
  top: 40%;
  left: 25%;

  @media screen and (max-width: 800px) {
    position: absolute;
    top: 35%;
    left: 18%;
  }

  @media screen and (max-width: 600px) {
    position: absolute;
    width: 80%;
    top: 30%;
    left: 10%;
  }
`;

export const Title = styled.div`
  position: relative;
  font-size: 48px;
  font-weight: 900;
  letter-spacing: 0.1em;
  margin-bottom: 10px;
`;

export const Subtitle = styled.div`
  position: relative;
  font-size: 12px;
  font-weight: 400;
  line-height: 20px;
  margin-bottom: 15px;
`;
