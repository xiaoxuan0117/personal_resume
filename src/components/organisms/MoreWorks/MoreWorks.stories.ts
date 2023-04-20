import type { Meta, StoryObj } from "@storybook/react";
import MoreWorks from "./index";
const meta: Meta<typeof MoreWorks> = {
  title: "Organisms/MoreWorks",
  component: MoreWorks,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof MoreWorks>;

export const Primary: Story = {
  args: {},
};
