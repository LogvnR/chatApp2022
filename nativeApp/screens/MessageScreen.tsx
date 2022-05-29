import React from "react";
import { View, Text } from "react-native";
import { useMessagesSubscription } from "../graphql/generated/graphql";
import tw from "../libs/tailwind";
import { useGlobalStore } from "../libs/useGlobalStore";

const MessageScreen = () => {
  const { username } = useGlobalStore();

  const { loading, data } = useMessagesSubscription();

  console.log(loading);

  return (
    <View style={tw`flex items-center justify-center flex-1`}>
      <Text style={tw`mt-2 mb-20 text-center`}>
        Welcome to the chatroom {username}...{" "}
      </Text>
      {data?.MessageSubscription?.map((message) => {
        return (
          <Text>
            {" "}
            {message?.message} {message?.sender}{" "}
          </Text>
        );
      })}
    </View>
  );
};

export default MessageScreen;
