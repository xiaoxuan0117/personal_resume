import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

import { WorksWrapper, WorksContent, Title } from "./index.style";
import Button from "../../atoms/Button";
import Links from "../../molecules/Links";
import DecoText from "../../atoms/DecoText";
import Work from "../../molecules/Work";
import MoreWorks from "../MoreWorks";

export interface IWorksProps {}

export default function Works(props: IWorksProps) {
  const workDetailZero = {
    title: "GitHub issues 管理系統",
    tags: ["React", "Next.js", "TypeScript", "GraphQL", "Apollo"],
    description:
      "實習期間有獨立完成網站維護的經驗，其中包含有電商、品牌官網和點數管理系統等類型的網站，過程中也累積了與 PM 、後端溝通的能力實習期間有獨立完成網站維護的經驗，其中包含有電商、品牌官網和點數管理系統等類型的網站，過程中也累積了與 PM 、後端溝通的能力",
    images: ["/images/work_issues.png"],
    links: ["https://taskapp-vife.onrender.com/"],
    github: ["https://github.com/Xiaoxuan0117"],
    index: 0,
  };
  const workDetailOne = {
    title: "GitHub issues 管理系統",
    tags: ["React", "Next.js", "TypeScript", "GraphQL", "Apollo"],
    description:
      "實習期間有獨立完成網站維護的經驗，其中包含有電商、品牌官網和點數管理系統等類型的網站，過程中也累積了與 PM 、後端溝通的能力...",
    images: ["/images/work_issues.png", "/images/work_issues_landing.png"],
    links: [
      "https://taskapp-vife.onrender.com/",
      "https://taskapp-vife.onrender.com/",
    ],
    github: [
      "https://github.com/Xiaoxuan0117",
      "https://github.com/Xiaoxuan0117",
    ],
    index: 1,
  };
  const worksRef = useRef(null);
  const worksContentRef = useRef(null);
  const decoRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(worksContentRef.current, {
        y: 50,
        scrollTrigger: {
          trigger: worksRef.current,
          scrub: 1,
          start: "top top",
          // markers: {
          //   startColor: "purple",
          //   endColor: "fuchsia",
          //   fontSize: "3rem",
          // },
        },
      });

      gsap.to(decoRef.current, {
        x: 100,
        scrollTrigger: {
          trigger: worksRef.current,
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
    <WorksWrapper ref={worksRef}>
      <WorksContent>
        <Title>Works.</Title>
        <DecoText decoRef={decoRef} text="Works" quantity={8} from="left" />
        <Work {...workDetailZero} />
        <Work {...workDetailOne} />
        <MoreWorks />
      </WorksContent>
    </WorksWrapper>
  );
}
