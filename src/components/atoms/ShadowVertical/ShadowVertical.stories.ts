import type { Meta, StoryObj } from "@storybook/react";
import ShadowVertical from "./index";
const meta: Meta<typeof ShadowVertical> = {
  title: "Atoms/ShadowVertical",
  component: ShadowVertical,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof ShadowVertical>;

export const Primary: Story = {};
