import * as React from "react";
import { BannerWrapper, BannerContent, Title, Subtitle } from "./index.style";
import Button from "../../atoms/Button";
import Links from "../../molecules/Links";

export interface IBannerProps {}

export default function Banner(props: IBannerProps) {
  return (
    <BannerWrapper>
      <BannerContent>
        <Title>Xiao-xuan Pan</Title>
        <Subtitle>
          歡迎來到我的個人網站，這裡記錄了我的工作經驗與相關作品的介紹
          <br />
          請往下滾動以了解更多資訊！
        </Subtitle>
        <Button label="Download resume" />
      </BannerContent>
      <Links />
    </BannerWrapper>
  );
}
