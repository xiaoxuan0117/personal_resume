import type { Meta, StoryObj } from "@storybook/react";
import AboutContent from "./index";
const meta: Meta<typeof AboutContent> = {
  title: "Molecules/AboutContent",
  component: AboutContent,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof AboutContent>;

export const Primary: Story = {
  args: {},
};
