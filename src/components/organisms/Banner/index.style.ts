import styled from "styled-components";

export const BannerWrapper = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
`;

export const BannerContent = styled.div`
  position: relative;
  top: 40%;
  left: 25%;
`;

export const Title = styled.div`
  position: relative;
  font-size: 48px;
  font-weight: 900;
  letter-spacing: 0.1em;
  margin-bottom: 10px;

  ::selection {
    background-color: #e1e2db;
  }
`;

export const Subtitle = styled.div`
  position: relative;
  font-size: 12px;
  font-weight: 400;
  line-height: 20px;
  margin-bottom: 15px;

  ::selection {
    background-color: #e1e2db;
  }
`;
