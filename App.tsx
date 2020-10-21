import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet } from "react-native";
import { Provider } from "react-redux";
import { store } from "./src/store/counterSlice";
import Example from "./src/views/Example";

export default function App() {
  return (
    <Provider store={store}>
      <Example />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },

  row: {
    flexDirection: "row",
    alignItems: "center"
  }
});
