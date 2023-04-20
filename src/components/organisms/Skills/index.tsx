import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

import { SkillsWrapper, SkillsContent, Title } from "./index.style";
import Button from "../../atoms/Button";
import Links from "../../molecules/Links";
import DecoText from "../../atoms/DecoText";
import Skill from "../../molecules/Skill";

export interface ISkillsProps {}

export default function Skills(props: ISkillsProps) {
  const skillsRef = useRef(null);
  const decoRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(decoRef.current, {
        y: -100,
        scrollTrigger: {
          trigger: skillsRef.current,
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
    <SkillsWrapper id="skills" ref={skillsRef}>
      <DecoText
        decoRef={decoRef}
        text="Skills"
        quantity={3}
        left="-23%"
        top="70%"
        rotate={-90}
      />
      <SkillsContent>
        <Title>Skills.</Title>
        <Skill
          title="Web Developement"
          skillGroup={[
            "HTML",
            "CSS",
            "JavaScript",
            "TypeScript",
            "React",
            "NodeJS",
            "React-router",
            "Redux",
            "Redux-middleware",
            "axios",
            "Storybook",
            "Jest",
            "Express",
            "Webpack",
          ]}
        />
        <Skill title="UI Design" skillGroup={["Figma", "Adobe XD"]} />
      </SkillsContent>
    </SkillsWrapper>
  );
}
