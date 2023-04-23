import { useEffect, useRef } from "react";
import { useTranslation } from "next-i18next";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

import { BannerWrapper, BannerContent, Title, Subtitle } from "./index.style";
import Button from "../../atoms/Button";
import Links from "../../molecules/Links";
import { newLine } from "../../../util";

export interface IBannerProps {}

export default function Banner(props: IBannerProps) {
  const { t } = useTranslation(["banner"]);
  const bannerRef = useRef(null);
  const bannerContentRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(bannerContentRef.current, {
        y: 50,
        scrollTrigger: {
          trigger: bannerRef.current,
          scrub: 1,
          start: "top top",
          // markers: {
          //   startColor: "purple",
          //   endColor: "fuchsia",
          //   fontSize: "3rem",
          // },
        },
      });
    });

    return () => {
      ctx.revert();
    };
  }, []);
  return (
    <BannerWrapper ref={bannerRef}>
      <BannerContent ref={bannerContentRef}>
        <Title>Xiao-xuan Pan</Title>
        <Subtitle>
          {newLine(t("subtitle"))}
          <br />
          {t("scroll")}
        </Subtitle>
        <Button label="Download resume" />
      </BannerContent>
      <Links />
    </BannerWrapper>
  );
}
