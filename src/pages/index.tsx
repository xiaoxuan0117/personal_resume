import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";

import styled, { ThemeProvider } from "styled-components";
import Button from "../components/atoms/Button";
import Navi from "../components/molecules/Navi";

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
};

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ThemeProvider theme={theme}>
        <main>
          <Navi
            menu={["About", "Experience", "Works", "Skills", "Contsct"]}
          ></Navi>
        </main>
      </ThemeProvider>
    </>
  );
}
