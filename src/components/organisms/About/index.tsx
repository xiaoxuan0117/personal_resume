import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

import { AboutWrapper } from "./index.style";
import Image from "next/image";
import AboutContent from "../../molecules/AboutContent";
import DecoText from "../../atoms/DecoText";

export interface IAboutProps {}

export default function About(props: IAboutProps) {
  const aboutRef = useRef(null);
  const contentRef = useRef(null);
  const decoRef = useRef(null);

  useEffect(() => {
    console.log("contentRef.current", contentRef.current, decoRef.current);
    const ctx = gsap.context(() => {
      gsap.to(contentRef.current, {
        y: 50,
        scrollTrigger: {
          trigger: aboutRef.current,
          scrub: 1,
          start: "top bottom",
          // markers: {
          //   startColor: "purple",
          //   endColor: "fuchsia",
          //   fontSize: "3rem",
          // },
        },
      });

      gsap.to(decoRef.current, {
        x: -200,
        scrollTrigger: {
          trigger: aboutRef.current,
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
    <AboutWrapper ref={aboutRef}>
      <AboutContent contentRef={contentRef} />
      <DecoText
        decoRef={decoRef}
        text="About"
        quantity={6}
        from="right"
        top="20%"
      />
    </AboutWrapper>
  );
}
