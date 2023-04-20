import type { Meta, StoryObj } from "@storybook/react";
import Skills from "./index";
const meta: Meta<typeof Skills> = {
  title: "Organisms/Skills",
  component: Skills,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Skills>;

export const Primary: Story = {
  args: {},
};
