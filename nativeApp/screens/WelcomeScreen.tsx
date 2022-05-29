import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { View, Text, TouchableOpacity, TextInput } from "react-native";
import { RootStackParams } from "../App";
import tw from "../libs/tailwind";
import { useGlobalStore } from "../libs/useGlobalStore";

interface FormData {
  username: string;
}

const WelcomeScreen = () => {
  const navigator = useNavigation<NativeStackNavigationProp<RootStackParams>>();
  const { setUsername } = useGlobalStore();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      username: "",
    },
  });

  return (
    <View style={tw`flex justify-center h-full `}>
      <View style={tw`px-5`}>
        <View
          style={tw`bg-slate-300 justify-between py-4 items-center h-[85] mb-24 rounded`}
        >
          <Text style={tw`font-bold `}>ChatApp</Text>
          <View>
            <Text style={tw`text-3xl font-bold text-center`}>Welcome!</Text>
            <Text style={tw`text-center`}>Please Enter a Username</Text>
          </View>

          <View>
            <Controller
              control={control}
              rules={{
                required: "hello",
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  placeholder="Username"
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  style={tw`px-2 py-2 bg-white rounded w-60`}
                />
              )}
              name="username"
            />
            {errors.username && (
              <Text style={tw`mt-2 text-red-600 `}>
                Your Username is Required...
              </Text>
            )}
          </View>

          <TouchableOpacity
            onPress={handleSubmit(({ username }) => {
              setUsername(username);
              navigator.navigate("MessagesScreen");
            })}
            style={tw`w-2/3 py-2 text-white bg-black rounded `}
          >
            <Text style={tw`text-lg text-center text-white`}>ENTER</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default WelcomeScreen;
