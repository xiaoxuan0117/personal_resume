import { ThemeProvider, createGlobalStyle } from "styled-components";
import { theme } from "../src/pages";
import type { Preview } from "@storybook/react";
import React from "react";

const GlobalStyle = createGlobalStyle`body {
  font-family: 'Noto Sans TC', sans-serif;
  color: #555555;
  background-color: #F5F6F0;
}`;

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        {Story()}
      </ThemeProvider>
    ),
  ],
};

export default preview;
