import { useEffect, useRef } from "react";
import { useTranslation } from "next-i18next";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

import { SkillWrapper, SkillContent, Left, Right } from "./index.style";

export interface ISkillProps {
  title: string;
  skillGroup: string[];
  skillList?: string[];
}

export default function Skill(props: ISkillProps) {
  const { t } = useTranslation(["skills"]);
  const { title, skillGroup, skillList } = props;
  const skillRef = useRef(null);
  const skillGroupRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(skillGroupRef.current, {
        x: -50,
        scrollTrigger: {
          trigger: skillRef.current,
          scrub: 1,
          start: "top bottom",
          end: "top center",
          once: true,
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
    <SkillWrapper ref={skillRef}>
      <SkillContent>
        <Left>{title}</Left>
        <Right ref={skillGroupRef}>
          {skillGroup.map((item) => (
            <div key={item} className="skillItem">
              {item},&nbsp;
            </div>
          ))}
          <ul>
            {skillList?.map((item) => (
              <li key={item}>{t(`${item}`)}</li>
            ))}
          </ul>
        </Right>
      </SkillContent>
    </SkillWrapper>
  );
}
