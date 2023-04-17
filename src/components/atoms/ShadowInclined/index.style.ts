import styled from "styled-components";

export const ShadowInclinedLine = styled.div<{ thick: boolean }>`
  position: absolute;
  top: ${(props) => (props.thick ? "80%" : "35%")};
  left: -50px;
  width: 110%;
  height: ${(props) => (props.thick ? "100px" : "50px")};
  transform: rotate(-10deg);
  background-color: ${(props) => props.theme.bgShadow};
  filter: blur(8px);
`;
