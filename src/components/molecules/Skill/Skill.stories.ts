import type { Meta, StoryObj } from "@storybook/react";
import Skill from "./index";
const meta: Meta<typeof Skill> = {
  title: "Molecules/Skill",
  component: Skill,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Skill>;

export const Primary: Story = {
  args: {},
};
