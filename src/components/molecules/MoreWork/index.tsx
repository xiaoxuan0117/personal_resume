import { useEffect, useRef } from "react";
import { useTranslation } from "next-i18next";
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
  link: string;
}

export default function MoreWork(props: IMoreWorkProps) {
  const { t } = useTranslation(["works"]);
  const { title, tags, description, image, link } = props;

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
          <Image src={image} fill alt={title} />
        </Left>
        <Right>
          <a href={link} target="_blank">
            <div className="title">{t(`${title}`)}</div>
            <div className="moreWorkTags">
              {tags.map((item) => (
                <div key={item} className="tag">
                  #{item}
                </div>
              ))}
            </div>
            <div className="dsc">{t(`${description}`)}</div>
          </a>
        </Right>
      </MoreWorkContent>
    </MoreWorkWrapper>
  );
}
