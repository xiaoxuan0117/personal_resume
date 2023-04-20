import type { Meta, StoryObj } from "@storybook/react";
import Works from "./index";
const meta: Meta<typeof Works> = {
  title: "Organisms/Works",
  component: Works,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Works>;

export const Primary: Story = {
  args: {},
};
