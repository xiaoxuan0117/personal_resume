import type { Meta, StoryObj } from "@storybook/react";
import Banner from "./index";
const meta: Meta<typeof Banner> = {
  title: "Organisms/Banner",
  component: Banner,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Banner>;

export const Primary: Story = {
  args: {},
};
