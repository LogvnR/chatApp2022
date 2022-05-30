import React, { FC } from "react";
import { View, Text } from "react-native";
import { MessagesSubscriptionResult } from "../graphql/generated/graphql";
import tw from "../libs/tailwind";
import { useGlobalStore } from "../libs/useGlobalStore";

interface MessageBoxProps {
  message: {
    sender?: any;
    message?: any;
  };
}

const MessageBox: FC<MessageBoxProps> = ({ message }) => {
  const { username } = useGlobalStore();

  return (
    <View
      style={
        username === message?.sender
          ? tw`self-end max-w-xs p-2 mt-4 bg-blue-400 rounded-md`
          : tw`max-w-xs p-2 mt-4 bg-blue-900 rounded-md`
      }
    >
      <Text style={tw`font-bold text-gray-100`}>{message?.sender}</Text>
      <Text style={tw`mt-1 text-white`}>{message?.message}</Text>
    </View>
  );
};

export default MessageBox;
