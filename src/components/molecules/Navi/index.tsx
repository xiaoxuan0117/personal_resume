import { useEffect, useState } from "react";
import {
  NaviWrapper,
  NaviContent,
  Title,
  MenuWrapper,
  Menu,
} from "./index.style";
import Button from "../../atoms/Button";

export interface INaviProps {
  menu: string[];
}

export default function Navi(props: INaviProps) {
  const [scroll, setScroll] = useState(false);
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
        <MenuWrapper>
          {menu.map((item) => (
            <Menu key={item}>
              <Button label={item} />
            </Menu>
          ))}
        </MenuWrapper>
      </NaviContent>
    </NaviWrapper>
  );
}
