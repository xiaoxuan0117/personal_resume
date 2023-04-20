import type { Meta, StoryObj } from "@storybook/react";
import Contact from "./index";
const meta: Meta<typeof Contact> = {
  title: "Organisms/Contact",
  component: Contact,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Contact>;

export const Primary: Story = {
  args: {},
};
