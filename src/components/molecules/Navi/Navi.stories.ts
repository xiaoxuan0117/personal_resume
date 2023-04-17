import type { Meta, StoryObj } from "@storybook/react";
import Navi from "./index";
const meta: Meta<typeof Navi> = {
  title: "Molecules/Navi",
  component: Navi,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Navi>;

export const Primary: Story = {
  args: {
    menu: ["About", "Experience", "Works", "Skills", "Contsct"],
  },
};
