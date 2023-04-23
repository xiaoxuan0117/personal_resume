import styled from "styled-components";

export const AboutWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 76px;

  & ::selection {
    background-color: #e1e2db;
  }

  @media screen and (max-width: 1023px) {
    height: 80vh;
    padding-top: 0px;
  }
`;
