import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MessageScreen from "./screens/MessageScreen";
import WelcomeScreen from "./screens/WelcomeScreen";

export type RootStackParams = {
  WelcomeScreen: any;
  MessagesScreen: any;
};

const Stack = createNativeStackNavigator<RootStackParams>();

export default function App() {
  return (
    <NavigationContainer>
      {/* @ts-ignore */}
      <Stack.Navigator initialRouteName="WelcomeScreen">
        <Stack.Screen
          name="WelcomeScreen"
          options={{
            title: "C H A T A P P",
          }}
          component={WelcomeScreen}
        />
        <Stack.Screen
          name="MessagesScreen"
          options={{
            title: "M E S S A G E S",
          }}
          component={MessageScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
