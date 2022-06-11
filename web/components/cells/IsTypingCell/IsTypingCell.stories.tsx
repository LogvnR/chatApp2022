import { ComponentMeta, ComponentStory } from "@storybook/react";

import { ApolloProvider } from "@apollo/client";
import { client } from "../../../pages/_app";
import IsTypingCell from "./IsTypingCell";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Cells/IsTypingCell",
  component: IsTypingCell,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof IsTypingCell>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof IsTypingCell> = (args) => (
  <ApolloProvider client={client}>
    <IsTypingCell />
  </ApolloProvider>
);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {};
