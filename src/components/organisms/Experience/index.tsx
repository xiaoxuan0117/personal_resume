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
  SchoolExp,
  SchoolDetail,
} from "./index.style";
import Image from "next/image";
import Project from "../../molecules/Project";

export interface IExperienceProps {}

export default function Experience(props: IExperienceProps) {
  const companyContentRef = useRef(null);
  const schoolContentRef = useRef(null);

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
          // once: true,
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
          <Project
            name="相機品牌電商優化"
            tags={["React", "Redux", "Redux-observable", "classnames"]}
            summary="實習期間有獨立完成網站維護的經驗，其中包含有電商、品牌官網和點數管理系統等類型的網站，過程中也累積了與
          PM 、後端溝通的能力。"
            list={[
              "實習期間有獨立完成網站維護的",
              "實習期間有獨立完成網站維護的經",
              "實習期間有獨立完成網站維護的經驗",
            ]}
          />
          <Project
            name="相機品牌官網維護"
            tags={["JavaScript", "JQuery", "SFTP"]}
            summary="實習期間有獨立完成網站維護的經驗，其中包含有電商、品牌官網和點數管理系統等類型的網站，過程中也累積了與
          PM 、後端溝通的能力。"
            list={[
              "實習期間有獨立完成網站維護的",
              "實習期間有獨立完成網站維護的經",
              "實習期間有獨立完成網站維護的經驗",
            ]}
          />
          <Project
            name="汽車品牌點數系統"
            tags={["React", "i18next"]}
            summary="實習期間有獨立完成網站維護的經驗，其中包含有電商、品牌官網和點數管理系統等類型的網站，過程中也累積了與
          PM 、後端溝通的能力。"
            list={[
              "實習期間有獨立完成網站維護的",
              "實習期間有獨立完成網站維護的經",
              "實習期間有獨立完成網站維護的經驗",
            ]}
          />
          <Project
            name="航空公司商城維護"
            tags={["JavaScript", "JQuery", "sass"]}
            summary="實習期間有獨立完成網站維護的經驗，其中包含有電商、品牌官網和點數管理系統等類型的網站，過程中也累積了與
          PM 、後端溝通的能力。"
            list={[
              "實習期間有獨立完成網站維護的",
              "實習期間有獨立完成網站維護的經",
              "實習期間有獨立完成網站維護的經驗",
            ]}
          />
        </CompanyExp>
        <SchoolExp>
          <SchoolDetail ref={schoolContentRef}>
            <div className="duration">2018/9-2022/6</div>
            <div className="schoolName">
              畢業於成功大學 <br />
              主修地科系 / 雙主修工業與資訊管理系
            </div>
            校園活動經驗
            <ul>
              <li>成大流行歌唱社美宣與行政</li>
              <li>成大地球科學系活動與體幹</li>
            </ul>
          </SchoolDetail>
        </SchoolExp>
      </ExperienceContent>
    </ExperienceWrapper>
  );
}
