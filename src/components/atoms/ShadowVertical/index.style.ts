import styled from "styled-components";

export const ShadowVerticalLine = styled.div`
  position: absolute;
  top: 0;
  left: 10%;
  width: 50px;
  height: 100%;
  background-color: ${(props) => props.theme.bgShadow};
  filter: blur(8px);
`;
