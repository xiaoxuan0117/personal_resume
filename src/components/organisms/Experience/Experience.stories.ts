import type { Meta, StoryObj } from "@storybook/react";
import Experience from "./index";
const meta: Meta<typeof Experience> = {
  title: "Organisms/Experience",
  component: Experience,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Experience>;

export const Primary: Story = {
  args: {},
};
