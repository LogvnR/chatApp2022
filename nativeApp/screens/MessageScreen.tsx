import React, { useRef } from "react";
import { View, Text, ScrollView, ScrollViewProps } from "react-native";
import { useMessagesSubscription } from "../graphql/generated/graphql";
import tw from "../libs/tailwind";
import { useGlobalStore } from "../libs/useGlobalStore";

const MessageScreen = () => {
  const { username } = useGlobalStore();
  const { loading, data } = useMessagesSubscription();
  const scrollViewRef = useRef<ScrollViewProps>();

  return (
    <ScrollView
      style={tw``}
      // @ts-ignore
      ref={scrollViewRef}
      onContentSizeChange={() =>
        // @ts-ignore
        scrollViewRef.current.scrollToEnd({ animated: true })
      }
    >
      <Text style={tw`mt-2 mb-20 text-center`}>
        Welcome to the chatroom {username}...{" "}
      </Text>
      <View style={tw`flex px-4 pb-10`}>
        {data?.MessageSubscription?.map((message) => {
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
        })}
      </View>
    </ScrollView>
  );
};

export default MessageScreen;
