import { extendType, list, nonNull, objectType } from "nexus";
import { pubSub } from "..";

interface IMessage {
  sender: string;
  message: string;
}

let messages: IMessage[] = [{ sender: "hello", message: "world" }];

export const message = objectType({
  name: "Message",
  definition(t) {
    t.string("sender");
    t.string("message");
  },
});

export const sendMessageMutation = extendType({
  type: "Mutation",
  definition(t) {
    t.nonNull.boolean("SendMessage", {
      args: {
        username: nonNull("String"),
        message: nonNull("String"),
      },
      resolve: async (_, { username, message }) => {
        messages.push({
          sender: username,
          message,
        });

        pubSub.publish("messages", messages);

        return true;
      },
    });
  },
});

export const messageSubscription = extendType({
  type: "Subscription",
  definition(t) {
    t.list.field("MessageSubscription", {
      type: "Message",
      subscribe: () => {
        setTimeout(() => {
          pubSub.publish("messages", messages);
        }, 0);
        return pubSub.subscribe("messages");
      },
      resolve: async (payload) => {
        return messages as any;
      },
    });
  },
});
