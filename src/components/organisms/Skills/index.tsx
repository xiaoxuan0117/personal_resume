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
  const skillsContentRef = useRef(null);
  const decoRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(skillsContentRef.current, {
        y: 50,
        scrollTrigger: {
          trigger: skillsRef.current,
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
        y: -200,
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
    <SkillsWrapper ref={skillsRef}>
      <DecoText
        decoRef={decoRef}
        text="Skills"
        quantity={4}
        left="-32%"
        top="50%"
        rotate={-90}
      />
      <SkillsContent ref={skillsContentRef}>
        <Title>Skills</Title>
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
