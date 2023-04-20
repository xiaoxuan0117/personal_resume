import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

import { ProjectWapper, ProjectDetail } from "./index.style";
import Image from "next/image";

export interface IProjectProps {
  name: string;
  tags: string[];
  summary: string;
  list: string[];
}

export default function Project(props: IProjectProps) {
  const { name, tags, summary, list } = props;
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
        <div className="projectName">{name}</div>
        <div className="projectTags">
          {tags.map((item) => (
            <div key={item} className="tag">
              #{item}
            </div>
          ))}
        </div>
        <div className="projectSummary">{summary}</div>
        <ul>
          {list.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </ProjectDetail>
    </ProjectWapper>
  );
}
