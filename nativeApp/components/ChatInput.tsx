import React, { FC } from "react";
import { TextInput, View, TextInputProps, Button } from "react-native";
import tw from "../libs/tailwind";

interface ChatInputProps extends TextInputProps {
  sendMessage: () => void;
}

const ChatInput: FC<ChatInputProps> = ({ sendMessage, ...props }) => {
  return (
    <View style={tw`bottom-0 flex items-center w-full max-h-16 bg-slate-200`}>
      <Button title="Send" onPress={sendMessage} />
      <TextInput
        multiline
        style={tw`h-full px-4 text-lg  pb-5 w-[20rem]`}
        {...props}
      />
    </View>
  );
};

export default ChatInput;
