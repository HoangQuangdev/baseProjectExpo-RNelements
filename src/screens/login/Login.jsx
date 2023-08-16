import React from "react";
import { View } from "react-native";
import { makeStyles, Text, Button, useThemeMode } from "@rneui/themed";
import AppBar from "../../components/AppBar";
import Loading from "../../components/Loading";
import Dialog from "../../components/Dialog";

function Login(props) {
  const styles = useStyles();
  const { setMode, mode } = useThemeMode();
  const handleOnPress = () => {
    setMode(mode === "dark" ? "light" : "dark");
  };

  return (
    <>
      <AppBar titile="App bar" logout />
      {/* <Loading open /> */}
      <Dialog title="Thong bao " content="Noi dung thong bao" />
      <View style={styles.container}>
        <Text h3>Start Using RNE </Text>
        <Text style={styles.text}>
          Open up App.tsx to start working on your app!
        </Text>
        <Button onPress={handleOnPress}>Switch Theme</Button>
      </View>
    </>
  );
}

export default Login;

const useStyles = makeStyles((theme) => ({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.colors.background,
  },
  text: {
    marginVertical: theme.spacing.lg,
  },
}));
