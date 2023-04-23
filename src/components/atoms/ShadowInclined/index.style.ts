import styled from "styled-components";

export const ShadowInclinedLine = styled.div<{ thick: boolean }>`
  position: absolute;
  top: ${(props) => (props.thick ? "600px" : "200px")};
  left: -50px;
  width: 110vw;
  height: ${(props) => (props.thick ? "100px" : "50px")};
  max-height: 100vh;
  transform: rotate(-10deg);
  background-color: ${(props) => props.theme.bgShadow};
  filter: blur(8px);

  @media screen and (max-width: 1023px) {
    display: none;
  }
`;
