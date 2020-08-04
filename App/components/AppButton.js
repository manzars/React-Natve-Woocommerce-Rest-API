import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";

const AppButton = (props) => {
  return (
    <TouchableOpacity
      onPress={props.buttonPressed}
      style={[styles.button, { backgroundColor: props.color }, props.style]}
    >
      <Text style={styles.text}>{props.title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: "100%",
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    marginVertical: 10,
  },
  text: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    textTransform: "uppercase",
  },
});

export default AppButton;
