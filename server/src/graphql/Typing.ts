import { extendType, nonNull, objectType } from "nexus";
import { pubsub } from "..";

export const typing = objectType({
  name: "Typing",
  definition(t) {
    t.nonNull.string("username");
    t.nonNull.boolean("isTyping");
  },
});

export const isTypingMutation = extendType({
  type: "Mutation",
  definition(t) {
    t.nonNull.field("IsTypingMutation", {
      type: "Typing",
      args: {
        username: nonNull("String"),
        isTyping: nonNull("Boolean"),
      },
      resolve: async (_, { username, isTyping }) => {
        pubsub.publish("isTyping", { username, isTyping });

        return {
          username,
          isTyping,
        };
      },
    });
  },
});

export const isTypingSubscription = extendType({
  type: "Subscription",
  definition(t) {
    t.field({
      name: "IsTypingSubscription",
      type: "Typing",
      subscribe: () => pubsub.subscribe("isTyping"),
      resolve: async (payload) => {
        if (payload.isTyping === true) {
          return {
            username: payload.username,
            isTyping: true,
          };
        } else {
          return {
            username: "",
            isTyping: false,
          };
        }
      },
    });
  },
});
