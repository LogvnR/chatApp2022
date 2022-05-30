import React, { useRef } from "react";
import { Controller, useForm } from "react-hook-form";
import { View, Text, ScrollView, ScrollViewProps } from "react-native";
import ChatInput from "../components/ChatInput";
import {
  useMessagesSubscription,
  useSendMessageMutation,
} from "../graphql/generated/graphql";
import tw from "../libs/tailwind";
import { useGlobalStore } from "../libs/useGlobalStore";

interface FormData {
  message: string;
}

const MessageScreen = () => {
  const { username } = useGlobalStore();
  const { loading, data } = useMessagesSubscription();
  const [sendMessage] = useSendMessageMutation();
  const scrollViewRef = useRef<ScrollViewProps>();

  const {
    control,
    formState: { errors },
    resetField,
  } = useForm<FormData>({
    defaultValues: {
      message: "",
    },
  });

  return (
    <View style={tw`relative flex-1`}>
      <ScrollView
        style={tw``}
        // @ts-ignore
        ref={scrollViewRef}
        onContentSizeChange={() =>
          // @ts-ignore
          scrollViewRef.current.scrollToEnd({ animated: true })
        }
      >
        <Text style={tw`mt-2 text-center`}>
          Welcome to the chatroom {username}...{" "}
        </Text>
        <View style={tw`flex px-3 pb-10`}>
          {data?.MessageSubscription?.map((message, i) => {
            return (
              <View
                key={i}
                style={
                  username === message?.sender
                    ? tw`self-end max-w-xs p-2 mt-4 bg-blue-400 rounded-md`
                    : tw`max-w-xs p-2 mt-4 bg-blue-900 rounded-md`
                }
              >
                <Text style={tw`font-bold text-gray-100`}>
                  {message?.sender}
                </Text>
                <Text style={tw`mt-1 text-white`}>{message?.message}</Text>
              </View>
            );
          })}
        </View>
      </ScrollView>

      <Controller
        control={control}
        rules={{
          required: "hello",
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <ChatInput
            placeholder="Message"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            sendMessage={async () => {
              await sendMessage({
                variables: {
                  username,
                  message: value,
                },
              });
              resetField("message");
            }}
          />
        )}
        name="message"
      />
    </View>
  );
};

export default MessageScreen;
