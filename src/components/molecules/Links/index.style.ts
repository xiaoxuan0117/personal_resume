import styled from "styled-components";

export const LinksWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  bottom: 0;
  right: 36px;
  z-index: 10;

  & a {
    display: block;
    margin-bottom: 7px;
  }
`;

export const DecoLine = styled.div`
  position: relative;
  width: 1.5px;
  height: 65px;
  background-color: ${(props) => props.theme.gray};
`;
