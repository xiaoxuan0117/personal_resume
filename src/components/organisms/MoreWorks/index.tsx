import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

import { MoreWorksWrapper, MoreWorksContent, Title } from "./index.style";
import Button from "../../atoms/Button";
import Links from "../../molecules/Links";
import DecoText from "../../atoms/DecoText";
import Work from "../../molecules/Work";
import MoreWork from "../../molecules/MoreWork";

export interface IMoreWorksProps {}

export default function MoreWorks(props: IMoreWorksProps) {
  const moreWorkDetailZero = {
    title: "Python X AI",
    tags: ["Python", "AI"],
    description:
      "實習期間有獨立完成網站維護的經驗，其中包含有電商、品牌官網和點數管理系統等類型的網站，過程中也累積了與PM 、後端溝通的能力",
    image: "/images/aiIcon.svg",
    github: "https://github.com/Xiaoxuan0117",
  };
  const decoRef = useRef(null);
  const moreWorksRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(decoRef.current, {
        x: -200,
        scrollTrigger: {
          trigger: moreWorksRef.current,
          scrub: 1,
          start: "top bottom",
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
    <MoreWorksWrapper ref={moreWorksRef}>
      <MoreWorksContent>
        <DecoText
          decoRef={decoRef}
          text="More Works"
          quantity={8}
          from="right"
        />
        <MoreWork {...moreWorkDetailZero} />
        <MoreWork {...moreWorkDetailZero} />
        <MoreWork {...moreWorkDetailZero} />
        <MoreWork {...moreWorkDetailZero} />
      </MoreWorksContent>
    </MoreWorksWrapper>
  );
}
