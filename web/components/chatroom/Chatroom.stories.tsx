// YourComponent.stories.ts|tsx

import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";

import Chatroom from "./Chatroom";
import { ApolloProvider } from "@apollo/client";
import { client } from "../../pages/_app";

//👇 This default export determines where your story goes in the story list
export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Chatroom Pages",
  component: Chatroom,
} as ComponentMeta<typeof Chatroom>;

//👇 We create a “template” of how args map to rendering
// @ts-ignore
const Template: ComponentStory<typeof Chatroom> = (args) => (
  <ApolloProvider client={client}>
    {/* @ts-ignore */}
    <Chatroom {...args} />
  </ApolloProvider>
);

export const ChatroomPage = Template.bind({});

ChatroomPage.args = {};
