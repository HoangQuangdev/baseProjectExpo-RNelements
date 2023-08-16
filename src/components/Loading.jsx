import React from "react";
import { Modal, View, ActivityIndicator } from "react-native";
// import * as Progress from "react-native-progress";

function Loading({ open }) {
  return (
    <Modal transparent visible={open}>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
        }}
      >
        <ActivityIndicator size="large" color="white" />
      </View>
    </Modal>
  );
}

export default Loading;
