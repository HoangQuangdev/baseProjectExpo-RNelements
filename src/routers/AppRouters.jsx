import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import StackNavigator from "./StackNavigator";

function AppRouters(props) {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
}

export default AppRouters;
