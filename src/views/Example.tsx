import { StatusBar } from "expo-status-bar";
import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { counterSelector, decrement, increment } from "../store/counterSlice";

export default function Example() {
  const counter = useSelector(counterSelector);
  const dispatch = useDispatch();

  const onIncrement = () => {
    dispatch(increment());
  };

  const onDecrement = () => {
    dispatch(decrement());
  };

  return (
    <View style={styles.container}>
      <Text>Counter Redux Toolkit Example</Text>
      <View style={styles.row}>
        <Button onPress={onDecrement} title="-" />
        <Text>{counter}</Text>
        <Button onPress={onIncrement} title="+" />
      </View>
      <StatusBar style="auto" />
    </View>
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
