import styled from "styled-components";
import { INaviProps } from ".";

export const NaviWrapper = styled.div<{ scroll: boolean }>`
  display: block;
  position: fixed;
  z-index: 10;
  width: 100vw;
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

  @media screen and (max-width: 800px) {
    padding: 10px 30px;
  }
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

export const MenuWrapper = styled.div<{ open: boolean }>`
  display: flex;
  flex-direction: row;
  transition: all 0.5s;

  @media screen and (max-width: 800px) {
    flex-direction: column;
    align-items: end;
    position: absolute;
    right: 12px;
    bottom: -5px;
    transform: ${(props) =>
      props.open ? "translate(0%, 100%)" : "translate(100%, 100%)"};
  }
`;

export const Menu = styled.div`
  display: block;
  margin: 10px 0 10px 13px;

  & > a {
    text-decoration: none;
  }

  @media screen and (max-width: 800px) {
    & div {
      ::before {
        box-shadow: none;
      }
    }
  }
`;

export const MenuIcon = styled.div<{ open: boolean }>`
  position: relative;
  display: none;
  width: 20px;
  height: 20px;

  @media screen and (max-width: 800px) {
    display: block;
  }

  & > div {
    width: ${(props) => (props.open ? "12px" : "20px")};
    height: 2px;
    margin: 5px 0;
    background-color: ${(props) => props.theme.gray};
    transition: all 0.5s ease-in-out;

    &.top {
      position: ${(props) => (props.open ? "absolute" : "relative")};
      top: 0;
      right: 0;
      transform: ${(props) => (props.open ? "rotate(45deg)" : "rotate(0)")};
    }

    &.middle {
      opacity: ${(props) => (props.open ? 0 : 1)};
    }

    &.bottom {
      position: ${(props) => (props.open ? "absolute" : "relative")};
      bottom: 0;
      right: 0;
      transform: ${(props) => (props.open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;
