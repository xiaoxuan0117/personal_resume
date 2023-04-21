import { useEffect, useRef } from "react";
import { useTranslation } from "next-i18next";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

import {
  ExperienceWrapper,
  ExperienceContent,
  Title,
  CompanyExp,
  CompanyDetail,
  SchoolExp,
  SchoolDetail,
} from "./index.style";
import Image from "next/image";
import Project from "../../molecules/Project";
import { newLine } from "../../../util";
import { companyData } from "../../../../public/data/experience/work";
import { schoolData } from "../../../../public/data/experience/school";

export interface IExperienceProps {}

export default function Experience(props: IExperienceProps) {
  const { t } = useTranslation(["experience"]);
  const { duration, name, summary, projects } = companyData;
  const companyContentRef = useRef(null);
  const schoolContentRef = useRef(null);

  const projectsElement = projects.map((project) => {
    const translateList = project.list?.map((item) => {
      return t(`${item}`);
    });
    return (
      <Project
        key={t(`${project.name}`)}
        name={t(`${project.name}`)}
        tags={project.tags}
        summary={newLine(t(`${project.summary}`))}
        list={translateList}
      />
    );
  });

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

      gsap.to(schoolContentRef.current, {
        scrollTrigger: {
          trigger: schoolContentRef.current,
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
    <ExperienceWrapper id="experience">
      <ExperienceContent>
        <Title>Experience.</Title>
        <CompanyExp>
          <CompanyDetail ref={companyContentRef}>
            <div className="duration">{t(`${duration}`)}</div>
            <div className="companyName">{t(`${name}`)}</div>
            <div className="companySummary">{newLine(t(`${summary}`))}</div>
          </CompanyDetail>
          {projectsElement}
        </CompanyExp>
        <SchoolExp>
          <SchoolDetail ref={schoolContentRef}>
            <div className="duration">{t(`${schoolData.duration}`)}</div>
            <div className="schoolName">{newLine(t(`${schoolData.name}`))}</div>
            {t(`${schoolData.extra}`)}
            <ul>
              {schoolData.extraDetail.map((item) => (
                <li key={item}>{t(`${item}`)}</li>
              ))}
            </ul>
          </SchoolDetail>
        </SchoolExp>
      </ExperienceContent>
    </ExperienceWrapper>
  );
}
