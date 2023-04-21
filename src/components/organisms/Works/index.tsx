import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

import { WorksWrapper, WorksContent, Title } from "./index.style";
import DecoText from "../../atoms/DecoText";
import Work from "../../molecules/Work";
import MoreWorks from "../MoreWorks";
import { works } from "../../../../public/data/works";

export interface IWorksProps {}

export default function Works(props: IWorksProps) {
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
    <WorksWrapper id="works" ref={worksRef}>
      <WorksContent>
        <Title>Works.</Title>
        <DecoText decoRef={decoRef} text="Works" quantity={8} left="-40%" />
        {works.map((work, index) => (
          <Work key={work.id} {...work} index={index} />
        ))}
        <MoreWorks />
      </WorksContent>
    </WorksWrapper>
  );
}
