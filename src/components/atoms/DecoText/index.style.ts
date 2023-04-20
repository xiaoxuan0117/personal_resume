import styled from "styled-components";

export const Deco = styled.div<{
  left?: string;
  top?: string;
  rotate?: number;
}>`
  display: flex;
  position: absolute;
  z-index: -1;
  top: ${(props) => (props.top ? props.top : "0")};
  left: ${(props) => (props.left ? props.left : "0")};
  transform: ${(props) => props.rotate && `rotateZ(${props.rotate}deg)`};
`;

export const DecoContent = styled.div`
  font-size: 64px;
  font-weight: 900;
  color: ${(props) => props.theme.lightGray};
  white-space: nowrap;
  margin-right: 24px;
`;
