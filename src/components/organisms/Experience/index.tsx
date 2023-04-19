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
  ProjectWapper,
  ProjectDetail,
} from "./index.style";
import Image from "next/image";

export interface IExperienceProps {}

export default function Experience(props: IExperienceProps) {
  const companyContentRef = useRef(null);
  const projectRef = useRef(null);
  const flagRef = useRef(null);
  const tags = ["React", "Redux", "Redux-observable", "classnames"];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(companyContentRef.current, {
        scrollTrigger: {
          trigger: companyContentRef.current,
          start: "top bottom",
          end: "bottom top",
          toggleClass: "active",
          once: true,
          markers: {
            startColor: "red",
            endColor: "green",
            fontSize: "3rem",
          },
        },
      });
    });

    gsap.to(projectRef.current, {
      scrollTrigger: {
        trigger: projectRef.current,
        start: "top bottom",
        end: "bottom top",
        toggleClass: "active",
        once: true,
        markers: {
          startColor: "red",
          endColor: "green",
          fontSize: "3rem",
        },
      },
    });

    gsap.to(flagRef.current, {
      scrollTrigger: {
        trigger: flagRef.current,
        start: "top bottom",
        end: "bottom top",
        toggleClass: "active",
        once: true,
        markers: {
          startColor: "red",
          endColor: "green",
          fontSize: "3rem",
        },
      },
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
          <ProjectWapper ref={projectRef}>
            <Image
              priority
              src="/images/flag.svg"
              width={19}
              height={12}
              alt="flag"
              ref={flagRef}
            />
            <ProjectDetail>
              <div className="projectName">相機品牌電商優化</div>
              <div className="projectTags">
                {tags.map((item) => (
                  <div key={item} className="tag">
                    #{item}
                  </div>
                ))}
              </div>
              <div className="projectSummary">
                實習期間有獨立完成網站維護的經驗，其中包含有電商、品牌官網和點數管理系統等類型的網站，過程中也累積了與
                PM 、後端溝通的能力。
              </div>
              <ul>
                <li>
                  實習期間有獨立完成網站維護的經驗，其中包含有電商、品牌官網和點數管理系統等類型的網站，過程中也累積了與
                  PM 、後端溝通的能力。
                </li>
                <li>實習期間有獨立完成網站維護的經驗</li>
                <li>實習期間有獨立完成網站維護的經驗</li>
              </ul>
            </ProjectDetail>
          </ProjectWapper>
          <ProjectWapper>
            <Image
              priority
              src="/images/flag.svg"
              width={19}
              height={12}
              alt="flag"
            />
            <ProjectDetail>
              <div className="projectName">相機品牌電商優化</div>
              <div className="projectTags">
                {tags.map((item) => (
                  <div key={item} className="tag">
                    #{item}
                  </div>
                ))}
              </div>
              <div className="projectSummary">
                實習期間有獨立完成網站維護的經驗，其中包含有電商、品牌官網和點數管理系統等類型的網站，過程中也累積了與
                PM 、後端溝通的能力。
              </div>
              <ul>
                <li>
                  實習期間有獨立完成網站維護的經驗，其中包含有電商、品牌官網和點數管理系統等類型的網站，過程中也累積了與
                  PM 、後端溝通的能力。
                </li>
                <li>實習期間有獨立完成網站維護的經驗</li>
                <li>實習期間有獨立完成網站維護的經驗</li>
              </ul>
            </ProjectDetail>
          </ProjectWapper>
        </CompanyExp>
      </ExperienceContent>
    </ExperienceWrapper>
  );
}
