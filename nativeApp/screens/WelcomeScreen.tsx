import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { View, Text, TouchableOpacity, TextInput } from "react-native";
import { RootStackParams } from "../App";
import tw from "../libs/tailwind";

interface FormData {
  username: string;
}

const WelcomeScreen = () => {
  const navigator = useNavigation<NativeStackNavigationProp<RootStackParams>>();

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
    <View style={tw`h-full flex justify-center `}>
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
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  style={tw`w-60 py-2 px-2 rounded  bg-white`}
                />
              )}
              name="username"
            />
            {errors.username && (
              <Text style={tw`text-red-600 mt-2 `}>
                Your Username is Required...
              </Text>
            )}
          </View>

          <TouchableOpacity
            onPress={handleSubmit(({ username }) => {
              alert(`Welcome ${username}`);
              navigator.navigate("MessagesScreen");
            })}
            style={tw`bg-black text-white w-2/3 py-1 rounded `}
          >
            <Text style={tw`text-white text-lg text-center`}>ENTER</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default WelcomeScreen;
