import { ComponentMeta, ComponentStory } from "@storybook/react";

import { ApolloProvider } from "@apollo/client";
import { client, StylesProvider } from "../../../pages/_app";
import MessagesCell from "./MessagesCell";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Cells/MessagesCell",
  component: MessagesCell,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof MessagesCell>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof MessagesCell> = (args) => (
  <StylesProvider>
    <ApolloProvider client={client}>
      <MessagesCell />
    </ApolloProvider>
  </StylesProvider>
);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  primary: true,
  label: "MyComponent",
};
