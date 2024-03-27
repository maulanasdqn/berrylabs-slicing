import type { Meta, StoryObj } from "@storybook/react";

import { Footer } from "./index";

const meta: Meta<typeof Footer> = {
  component: Footer,
  tags: ["autodocs"],
  title: "Components/Molecules/Footer",
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Footer>;

export const Primary: Story = {
  args: {},
};
