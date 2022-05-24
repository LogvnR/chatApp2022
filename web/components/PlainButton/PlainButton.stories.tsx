import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";

import PlainButton from "./PlainButton";

export default {
  title: "Components/PlainButton",
  component: PlainButton,
  args: {},
} as ComponentMeta<typeof PlainButton>;

const Template: ComponentStory<typeof PlainButton> = (args) => (
  <PlainButton {...args}>Primary Button</PlainButton>
);

export const Story = Template.bind({});
Story.args = {
  width: "full",
};
