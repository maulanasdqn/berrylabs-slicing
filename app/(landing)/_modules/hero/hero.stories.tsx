import type { Meta, StoryObj } from "@storybook/react";

import { HeroSection } from "./hero";

const meta: Meta<typeof HeroSection> = {
  component: HeroSection,
  tags: ["autodocs"],
  title: "Pages/Landing/Hero Section",
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof HeroSection>;

export const Primary: Story = {
  args: {},
};
