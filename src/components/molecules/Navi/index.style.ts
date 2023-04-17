import styled from "styled-components";
import { INaviProps } from ".";

export const NaviWrapper = styled.div<{ scroll: boolean }>`
  display: block;
  position: fixed;
  z-index: 10;
  width: 100%;
  height: max-content;
  transition: all 0.5s;
  background-color: ${(props) => props.scroll && props.theme.primary};
  box-shadow: ${(props) =>
    props.scroll && `0 4px 4px 0 ${props.theme.darkShadow}`};
`;

export const NaviContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px 45px;
`;

export const Title = styled.a`
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 0.05em;
  line-height: 30px;
  color: ${(props) => props.theme.gray};
  text-decoration: none;

  ::selection {
    background-color: #e1e2db;
  }
`;

export const MenuWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Menu = styled.div`
  display: block;
  margin: 10px 0 10px 13px;
`;
