import { useEffect, useState } from "react";
import { isMobile } from "react-device-detect";
import {
  NaviWrapper,
  NaviContent,
  Title,
  MenuWrapper,
  Menu,
  MenuIcon,
} from "./index.style";
import Button from "../../atoms/Button";

export interface INaviProps {
  menu: string[];
}

export default function Navi(props: INaviProps) {
  const [scroll, setScroll] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const { menu } = props;

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 0) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    });
  });
  return (
    <NaviWrapper scroll={scroll}>
      <NaviContent>
        <Title href="/">Xiao-xuan resume</Title>
        <MenuWrapper
          open={openMenu}
          onMouseOver={
            !isMobile
              ? () => {
                  setOpenMenu(true);
                }
              : () => {}
          }
          onMouseLeave={() => {
            setOpenMenu(false);
          }}
        >
          {menu.map((item) => (
            <Menu key={item}>
              <a href={`#${item.toLocaleLowerCase()}`}>
                <Button label={item} />
              </a>
            </Menu>
          ))}
        </MenuWrapper>
        <MenuIcon
          onClick={() => {
            setOpenMenu(!openMenu);
          }}
          onMouseOver={
            !isMobile
              ? () => {
                  setOpenMenu(true);
                }
              : () => {}
          }
          onMouseLeave={() => {
            setOpenMenu(false);
          }}
          open={openMenu}
        >
          <div className="top"></div>
          <div className="middle"></div>
          <div className="bottom"></div>
        </MenuIcon>
      </NaviContent>
    </NaviWrapper>
  );
}
