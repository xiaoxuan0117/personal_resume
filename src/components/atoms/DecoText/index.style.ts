import styled from "styled-components";

export const Deco = styled.div<{
  left?: string;
  top?: string;
  rotate?: number;
  type?: string;
}>`
  display: flex;
  position: absolute;
  z-index: -1;
  top: ${(props) => (props.top ? props.top : "0")};
  left: ${(props) => (props.left ? props.left : "0")};
  transform: ${(props) => props.rotate && `rotateZ(${props.rotate}deg)`};

  @media screen and (max-width: 960px) {
    left: ${(props) => props.type === "skills" && "-30%"};
  }

  @media screen and (max-width: 750px) {
    left: ${(props) => props.type === "skills" && "-35%"};
  }

  @media screen and (max-width: 700px) {
    display: ${(props) => props.type === "skills" && "none"};
  }
`;

export const DecoContent = styled.div`
  font-size: 64px;
  font-weight: 900;
  color: ${(props) => props.theme.lightGray};
  white-space: nowrap;
  margin-right: 24px;
`;
