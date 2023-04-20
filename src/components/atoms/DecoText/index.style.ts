import styled from "styled-components";

export const Deco = styled.div<{ from: string }>`
  display: flex;
  position: absolute;
  z-index: -1;
  top: 20%;
  left: ${(props) => (props.from === "right" ? "40%" : "-40%")};
`;

export const DecoContent = styled.div`
  font-size: 64px;
  font-weight: 900;
  color: ${(props) => props.theme.lightGray};
  margin-right: 24px;
`;
