import * as React from "react";
import {
  WorkWrapper,
  WorkContent,
  Preview,
  ImageBox,
  Detail,
} from "./index.style";
import Image from "next/image";
import Button from "../../atoms/Button";

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
  return (
    <WorkWrapper>
      <WorkContent index={index}>
        <Preview index={index}>
          <a href={links[0]} className="workUrl" target="_blank">
            <ImageBox>
              <Image src={images[0]} fill alt={title} />
              <div>Direct to the site</div>
            </ImageBox>
          </a>
        </Preview>
        <Detail index={index}>
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
