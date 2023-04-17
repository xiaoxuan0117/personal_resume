import type { Meta, StoryObj } from "@storybook/react";
import Links from "./index";
const meta: Meta<typeof Links> = {
  title: "Molecules/Links",
  component: Links,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Links>;

export const Primary: Story = {
  args: {},
};
