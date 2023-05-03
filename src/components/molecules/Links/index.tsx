import { useEffect, useState } from "react";
import { LinksWrapper, DecoLine } from "./index.style";
import Image from "next/image";
import Link from "next/link";

export interface ILinksProps {}

export default function Links(props: ILinksProps) {
  const [lng, setLng] = useState<string>("en");

  useEffect(() => {
    const currentLng = window.location.pathname;
    if (currentLng) {
      const newLng = currentLng === "/zh-TW" ? "en" : "zh-TW";
      setLng(newLng);
    }
  }, []);
  return (
    <LinksWrapper>
      <Link
        locale={lng}
        href={{ pathname: `/${lng}` }}
        onClick={() => {
          const newLng = lng === "en" ? "zh-TW" : "en";
          setLng(newLng);
        }}
      >
        <Image
          priority
          src="/images/i18nIcon.svg"
          width={30}
          height={30}
          alt=""
        />
      </Link>
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
