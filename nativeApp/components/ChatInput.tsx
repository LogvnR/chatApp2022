import React, { FC } from "react";
import {
  TextInput,
  View,
  TextInputProps,
  Text,
  TouchableOpacity,
} from "react-native";
import tw from "../libs/tailwind";

interface ChatInputProps extends TextInputProps {
  sendMessage: () => void;
}

const ChatInput: FC<ChatInputProps> = ({ sendMessage, ...props }) => {
  return (
    <View
      style={tw`bottom-0 flex flex-row items-center justify-center w-full pt-3 max-h-16 bg-slate-200`}
    >
      <TextInput
        multiline
        style={tw`h-full px-4 text-lg  pb-5 w-[20rem] pl-9`}
        {...props}
      />
      <TouchableOpacity style={tw`mb-4`} onPress={sendMessage}>
        <Text style={tw`text-lg text-center text-blue-600`}>Send</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ChatInput;
