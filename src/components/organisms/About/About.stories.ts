import type { Meta, StoryObj } from "@storybook/react";
import About from "./index";
const meta: Meta<typeof About> = {
  title: "Organisms/About",
  component: About,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof About>;

export const Primary: Story = {
  args: {},
};
