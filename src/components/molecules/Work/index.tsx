import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

import { Swiper, SwiperSlide } from "swiper/react";

import {
  WorkWrapper,
  WorkContent,
  Preview,
  ImageBox,
  Detail,
} from "./index.style";
import Image from "next/image";
import Button from "../../atoms/Button";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Autoplay, EffectFade, Pagination } from "swiper";

export interface IWorkProps {
  title: string;
  tags: string[];
  description: string;
  images: string[];
  links: string[];
  github: string[];
  index: number;
}

export default function Work(props: IWorkProps) {
  const { title, tags, description, images, links, github, index } = props;

  const workRef = useRef(null);
  const detailRef = useRef(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(detailRef.current, {
        yPercent: -20,
        duration: 0.5,
        scrollTrigger: {
          trigger: detailRef.current,
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
    <WorkWrapper ref={workRef}>
      <WorkContent index={index}>
        <Preview index={index}>
          {images.length === 1 ? (
            <a href={links[0]} className="workUrl" target="_blank">
              <ImageBox>
                <Image src={images[0]} fill alt={title} />
                <div>Direct to the site</div>
              </ImageBox>
            </a>
          ) : (
            <Swiper
              spaceBetween={30}
              effect={"fade"}
              pagination={{
                clickable: true,
              }}
              modules={[Autoplay, EffectFade, Pagination]}
              className="mySwiper"
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
            >
              {images.map((item, index) => (
                <SwiperSlide key={item}>
                  <a href={links[index]} className="workUrl" target="_blank">
                    <ImageBox>
                      <Image src={images[index]} fill alt={title} />
                      <div>Direct to the site</div>
                    </ImageBox>
                  </a>
                </SwiperSlide>
              ))}
            </Swiper>
          )}
        </Preview>
        <Detail index={index} ref={detailRef}>
          <div className="title">{title}</div>
          <div className="worksTags">
            {tags.map((item) => (
              <div key={item} className="tag">
                #{item}
              </div>
            ))}
          </div>
          <div className="dsc">{description}</div>
          <div className="button">
            <a href={github[0]} className="repo" target="_blank">
              <Button label="Learn More" />
            </a>
          </div>
        </Detail>
      </WorkContent>
    </WorkWrapper>
  );
}
