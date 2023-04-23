import * as React from "react";
import { useTranslation } from "next-i18next";

import {
  AboutContentWrapper,
  AboutContentFlex,
  Left,
  Right,
  Title,
  Content,
} from "./index.style";
import Image from "next/image";
import { newLine } from "../../../util";

export interface IAboutContentProps {
  contentRef: React.RefObject<HTMLDivElement>;
}

export default function AboutContent(props: IAboutContentProps) {
  const { t } = useTranslation(["about"]);
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
          <div>
            <span>{t("name")}</span>
          </div>
        </Left>
        <Right>
          <Title>{t("title")}</Title>
          <Content>{newLine(t("description"))}</Content>
        </Right>
      </AboutContentFlex>
    </AboutContentWrapper>
  );
}
