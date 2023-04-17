import type { Meta, StoryObj } from "@storybook/react";
import ShadowInclined from "./index";
const meta: Meta<typeof ShadowInclined> = {
  title: "Atoms/ShadowInclined",
  component: ShadowInclined,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof ShadowInclined>;

export const Primary: Story = {
  args: {
    thick: true,
  },
};
