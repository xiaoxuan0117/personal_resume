import styled from "styled-components";

export const Deco = styled.div<{ from: string; top?: string }>`
  display: flex;
  position: absolute;
  z-index: -1;
  top: ${(props) => (props.top ? props.top : "0")};
  left: ${(props) => (props.from === "right" ? "40%" : "-40%")};
`;

export const DecoContent = styled.div`
  font-size: 64px;
  font-weight: 900;
  color: ${(props) => props.theme.lightGray};
  white-space: nowrap;
  margin-right: 24px;
`;
