import * as React from "react";
import { AboutWrapper, DecoAbout, DecoAboutText } from "./index.style";
import Image from "next/image";
import AboutContent from "../../molecules/AboutContent";

export interface IAboutProps {}

export default function About(props: IAboutProps) {
  const content = Array(6).fill("About");
  return (
    <AboutWrapper>
      <AboutContent />
      <DecoAbout>
        {content.map((item, index) => (
          <DecoAboutText key={index}>{item}</DecoAboutText>
        ))}
      </DecoAbout>
    </AboutWrapper>
  );
}
