import styled from "styled-components";

export const ShadowVerticalLine = styled.div`
  position: absolute;
  top: 0;
  left: 10%;
  width: 50px;
  height: 750px;
  background-color: ${(props) => props.theme.bgShadow};
  filter: blur(8px);

  @media screen and (max-width: 1023px) {
    display: none;
  }
`;
