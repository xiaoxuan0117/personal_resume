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

export interface IAboutContentProps {
  contentRef: React.RefObject<HTMLDivElement>;
}

// export const getStaticProps: GetStaticProps = async (context) => {
//   const locale = context.locale!;

//   return {
//     props: {
//       ...(await serverSideTranslations(locale, ["about"])),
//     },
//   };
// };

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
          <div>{t("name")}</div>
        </Left>
        <Right>
          <Title>{t("title")}</Title>
          <Content>{t("description")}</Content>
        </Right>
      </AboutContentFlex>
    </AboutContentWrapper>
  );
}
