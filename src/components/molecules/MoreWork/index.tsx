import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

import { MoreWorkWrapper, MoreWorkContent, Left, Right } from "./index.style";
import Image from "next/image";

export interface IMoreWorkProps {
  title: string;
  tags: string[];
  description: string;
  image: string;
  github: string;
}

export default function MoreWork(props: IMoreWorkProps) {
  const { title, tags, description, image, github } = props;

  const moreWorkRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(moreWorkRef.current, {
        yPercent: -40,
        duration: 0.5,
        scrollTrigger: {
          trigger: moreWorkRef.current,
          start: "top bottom",
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
    <MoreWorkWrapper ref={moreWorkRef}>
      <MoreWorkContent>
        <Left>
          <Image src={image} fill alt="ai" />
        </Left>
        <Right>
          <div className="title">
            <a href={github} target="_blank">
              {title}
            </a>
          </div>
          <div className="moreWorkTags">
            {tags.map((item) => (
              <div key={item} className="tag">
                #{item}
              </div>
            ))}
          </div>
          <div className="dsc">{description}</div>
        </Right>
      </MoreWorkContent>
    </MoreWorkWrapper>
  );
}
