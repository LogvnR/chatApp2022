import { useSendMessageMutation } from "../graphql/generated/graphql";
import { useStore } from "../helpers/useStore";

export const useSendMessage = () => {
  const { username } = useStore();
  const [sendMessageMutation] = useSendMessageMutation();

  const sendMessage = async (message: string) => {
    await sendMessageMutation({
      variables: {
        username,
        message,
      },
    });
  };

  return {
    sendMessage,
  };
};
