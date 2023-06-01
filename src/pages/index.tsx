import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import styled, { ThemeProvider } from "styled-components";
import Button from "../components/atoms/Button";
import Navi from "../components/molecules/Navi";
import ShadowVertical from "../components/atoms/ShadowVertical";
import ShadowInclined from "../components/atoms/ShadowInclined";
import Banner from "../components/organisms/Banner";
import About from "../components/organisms/About";
import Experience from "../components/organisms/Experience";
import Works from "../components/organisms/Works";
import Skills from "../components/organisms/Skills";
import Contact from "../components/organisms/Contact";

const inter = Inter({ subsets: ["latin"] });

export const theme = {
  primary: "#F5F6F0",
  secondary: "#EBECE6",
  gray: "#555555",
  lightGray: "#E1E2DB",
  white: "#FFFFFF",
  black: "#000000",
  darkShadow: "rgba(0,0,0, 0.25)",
  lightShadow: "rgba(255,255,255, 0.6)",
  bgShadow: "#E0E1DB",
};

export const getStaticProps: GetStaticProps = async (context) => {
  const locale = context.locale!;

  return {
    props: {
      ...(await serverSideTranslations(locale, [
        "banner",
        "about",
        "experience",
        "works",
        "skills",
        "contact",
      ])),
    },
  };
};

export default function Home() {
  return (
    <>
      <Head>
        <title>Xiao-xuan resume</title>
        <meta
          name="description"
          content="歡迎來到我的個人網站，這裡記錄了我的工作經驗與相關作品的！"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="format-detection" content="telephone=no" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ThemeProvider theme={theme}>
        <main>
          <ShadowVertical />
          <ShadowInclined thick={false} />
          <ShadowInclined thick={true} />
          <Navi menu={["About", "Experience", "Works", "Skills"]}></Navi>
          <Banner />
          <About />
          <Experience />
          <Works />
          <Skills />
          <Contact />
        </main>
      </ThemeProvider>
    </>
  );
}
