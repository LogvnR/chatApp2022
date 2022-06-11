import { useEffect } from "react";
import { useSetIsTypingMutation } from "../graphql/generated/graphql";
import { useStore } from "../helpers/useStore";

export const useIsTyping = () => {
  const { username } = useStore();

  const [setIsTyping] = useSetIsTypingMutation();

  const isTyping = async (isTyping: boolean) => {
    await setIsTyping({
      variables: {
        username,
        isTyping,
      },
    });
  };

  return {
    isTyping,
  };
};
