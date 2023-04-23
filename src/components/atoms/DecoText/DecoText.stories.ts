import type { Meta, StoryObj } from "@storybook/react";
import DecoText from "./index";
const meta: Meta<typeof DecoText> = {
  title: "Atoms/DecoText",
  component: DecoText,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof DecoText>;

export const Primary: Story = {
  args: {
    text: "About",
    quantity: 6,
  },
};
