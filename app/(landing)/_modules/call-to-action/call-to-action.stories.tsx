import type { Meta, StoryObj } from "@storybook/react";

import { CTASection } from "./call-to-action";

const meta: Meta<typeof CTASection> = {
  component: CTASection,
  tags: ["autodocs"],
  title: "Pages/Landing/CTA Section",
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof CTASection>;

export const Primary: Story = {
  args: {},
};
