import { createStackNavigator } from "@react-navigation/stack";
import { View } from "react-native";
import Login from "../screens/login/Login";

const Stack = createStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Store" component={Login} />
    </Stack.Navigator>
  );
}
