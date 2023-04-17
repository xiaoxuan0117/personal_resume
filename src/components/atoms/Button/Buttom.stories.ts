import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./index";
const meta: Meta<typeof Button> = {
  title: "Example/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {},
};
export default meta;
type Story = StoryObj<typeof Button>;
export const About: Story = {
  args: {
    label: "About",
  },
};
export const Experience: Story = {
  args: {
    label: "Experience",
  },
};
export const Works: Story = {
  args: {
    label: "Works",
  },
};
export const Skills: Story = {
  args: {
    label: "Skills",
  },
};

export const Contact: Story = {
  args: {
    label: "Contact",
  },
};
