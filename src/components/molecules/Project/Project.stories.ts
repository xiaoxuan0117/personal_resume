import type { Meta, StoryObj } from "@storybook/react";
import Project from "./index";
const meta: Meta<typeof Project> = {
  title: "Molecules/Project",
  component: Project,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Project>;

export const Primary: Story = {
  args: {},
};
