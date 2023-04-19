import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

import { BannerWrapper, BannerContent, Title, Subtitle } from "./index.style";
import Button from "../../atoms/Button";
import Links from "../../molecules/Links";

export interface IBannerProps {}

export default function Banner(props: IBannerProps) {
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
