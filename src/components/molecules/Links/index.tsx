import * as React from "react";
import { LinksWrapper, DecoLine } from "./index.style";
import Image from "next/image";

export interface ILinksProps {}

export default function Links(props: ILinksProps) {
  return (
    <LinksWrapper>
      <a href="mailto: xiaoxuanpan0117@gmail.com" target="_blank">
        <Image
          priority
          src="/images/emailIcon.svg"
          width={30}
          height={30}
          alt=""
        />
      </a>
      <a href="https://github.com/Xiaoxuan0117" target="_blank">
        <Image
          priority
          src="/images/githubIcon.png"
          width={30}
          height={30}
          alt=""
        />
      </a>
      <a
        href="https://www.linkedin.com/in/xiao-xuan-pan-2b464922a/"
        target="_blank"
      >
        <Image
          priority
          src="/images/linkedInIcon.svg"
          width={30}
          height={30}
          alt=""
        />
      </a>
      <DecoLine />
    </LinksWrapper>
  );
}
