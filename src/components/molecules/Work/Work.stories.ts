import type { Meta, StoryObj } from "@storybook/react";
import Work from "./index";
const meta: Meta<typeof Work> = {
  title: "Molecules/Work",
  component: Work,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Work>;

export const Primary: Story = {
  args: {},
};
