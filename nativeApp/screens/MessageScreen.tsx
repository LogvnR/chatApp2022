import React from "react";
import { View, Text } from "react-native";
import tw from "../libs/tailwind";
import { useGlobalStore } from "../libs/useGlobalStore";

const MessageScreen = () => {
  const { username } = useGlobalStore();
  return (
    <View style={tw`flex justify-center items-center flex-1`}>
      <Text style={tw`mt-2 mb-20  text-center`}>
        Welcome to the chatroom {username}...{" "}
      </Text>
    </View>
  );
};

export default MessageScreen;
