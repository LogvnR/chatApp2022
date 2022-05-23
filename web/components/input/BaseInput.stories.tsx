// YourComponent.stories.ts|tsx
import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";

import BaseInput from "./BaseInput";

//👇 This default export determines where your story goes in the story list
export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Atoms - Inputs",
  component: BaseInput,
} as ComponentMeta<typeof BaseInput>;

//👇 We create a “template” of how args map to rendering
// @ts-ignore
const Template: ComponentStory<typeof BaseInput> = (args) => (
  <BaseInput {...args} />
);

export const Input = Template.bind({});

Input.args = {
  /*👇 The args you need here will depend on your component */
  placeholder: "Email",
};
