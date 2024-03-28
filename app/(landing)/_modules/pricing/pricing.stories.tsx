import type { Meta, StoryObj } from "@storybook/react";

import { PricingSection } from "./pricing";

const meta: Meta<typeof PricingSection> = {
  component: PricingSection,
  tags: ["autodocs"],
  title: "Pages/Landing/Pricing Section",
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof PricingSection>;

export const Primary: Story = {
  args: {},
};
