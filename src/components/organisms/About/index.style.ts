import styled from "styled-components";

export const AboutWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const DecoAbout = styled.div`
  display: flex;
  position: absolute;
  z-index: -1;
  top: 20%;
  left: 40%;
`;

export const DecoAboutText = styled.div`
  font-size: 64px;
  font-weight: 900;
  color: ${(props) => props.theme.lightGray};
  margin-right: 24px;
`;
