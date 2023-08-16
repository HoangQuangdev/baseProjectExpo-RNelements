import React from "react";
import { Header, Icon, Text } from "@rneui/themed";
import { Ionicons } from "@expo/vector-icons";
function AppBar({ back, titile, logout }) {
  return (
    <Header
      barStyle="light-content"
      placement="left"
      leftComponent={() => (
        <Ionicons name="chevron-back-outline" size={24} color="white" />
      )}
      centerComponent={() => (
        <Text
          style={{
            fontWeight: "600",
            fontSize: 20,
            color: "white",
          }}
        >
          {titile}
        </Text>
      )}
      rightComponent={() => logout && <Icon name="logout" />}
    />
  );
}

export default AppBar;
