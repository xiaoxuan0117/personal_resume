import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

import {
  ExperienceWrapper,
  ExperienceContent,
  Title,
  CompanyExp,
  CompanyDetail,
} from "./index.style";
import Image from "next/image";
import Project from "../../molecules/Project";

export interface IExperienceProps {}

export default function Experience(props: IExperienceProps) {
  const companyContentRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(companyContentRef.current, {
        scrollTrigger: {
          trigger: companyContentRef.current,
          start: "top bottom",
          end: "bottom top",
          toggleClass: "active",
          once: true,
          // markers: {
          //   startColor: "red",
          //   endColor: "green",
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
    <ExperienceWrapper>
      <ExperienceContent>
        <Title>Experience.</Title>
        <CompanyExp>
          <CompanyDetail ref={companyContentRef}>
            <div className="duration">2022/7-至今</div>
            <div className="companyName">新芽網路公司-前端開發實習生</div>
            <div className="companySummary">
              實習期間有獨立完成網站維護的經驗，其中包含有電商、品牌官網和點數管理系統等類型的網站，過程中也累積了與
              PM 、後端溝通的能力。
              <br />
              以下列在各個專案中完成的工作項目。
            </div>
          </CompanyDetail>
          <Project />
          <Project />
        </CompanyExp>
      </ExperienceContent>
    </ExperienceWrapper>
  );
}
