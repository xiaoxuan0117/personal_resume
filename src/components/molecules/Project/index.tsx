import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

import { ProjectWapper, ProjectDetail } from "./index.style";
import Image from "next/image";

export interface IProjectProps {}

export default function Project(props: IProjectProps) {
  const tags = ["React", "Redux", "Redux-observable", "classnames"];
  const flagRef = useRef(null);
  const projectRef = useRef(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(projectRef.current, {
        scrollTrigger: {
          trigger: projectRef.current,
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

      gsap.to(flagRef.current, {
        scrollTrigger: {
          trigger: flagRef.current,
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
  );
}
