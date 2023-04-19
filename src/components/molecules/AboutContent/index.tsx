import * as React from "react";
import {
  AboutContentWrapper,
  AboutContentFlex,
  Left,
  Right,
  Title,
  Content,
} from "./index.style";
import Image from "next/image";

export interface IAboutContentProps {
  contentRef: React.RefObject<HTMLDivElement>;
}

export default function AboutContent(props: IAboutContentProps) {
  return (
    <AboutContentWrapper ref={props.contentRef}>
      <AboutContentFlex>
        <Left>
          <Image
            priority
            src="/images/me.svg"
            width={128}
            height={128}
            alt="me"
          />
          <div>潘小璇</div>
        </Left>
        <Right>
          <Title>關於我</Title>
          <Content>
            我約有一年的前端開發經驗，目前在新芽網路公司擔任前端實習生，從小型的個人專案到大型的商業案件都有接觸過。我了解如何透過前端工具
            HTML、CSS、JavaScript、TypeScript 和 React
            製作完整的網頁，也具備有基本的伺服器建立和操作資料庫等後端知識，並且能夠串接
            API 連結前後端的資料。另外我在工作上也累積了許多與
            PM、後端開發者一起溝通解決問題的經驗。
          </Content>
        </Right>
      </AboutContentFlex>
    </AboutContentWrapper>
  );
}
