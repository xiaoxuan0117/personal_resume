import type { Meta, StoryObj } from "@storybook/react";
import MoreWork from "./index";
const meta: Meta<typeof MoreWork> = {
  title: "Molecules/MoreWork",
  component: MoreWork,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof MoreWork>;

export const Primary: Story = {
  args: {},
};
