import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useState, useEffect } from "react";
import { AppContext } from "./AppContext";

function AppProvider(props) {
  const [user, setUser] = useState();

  useEffect(() => {
    const loadData = async () => {
      let user = await AsyncStorage.getItem("user");
      if (user) {
        user = JSON.parse(user);
        setUser(user);
      }
    };
    loadData();
  }, []);

  const handleLogin = async (user, action) => {
    setUser(user);
    await AsyncStorage.setItem("user", JSON.stringify(user)).then(() =>
      action(),
    );
  };
  const handleLogout = async () => {
    await AsyncStorage.clear();
    setUser();
  };
  return (
    <AppContext.Provider
      value={{
        user,

        handleLogin,
        handleLogout,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
}

export default AppProvider;
