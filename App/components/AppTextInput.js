import React from "react";
import { View, StyleSheet, TextInput, Platform } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const AppTextInput = (props) => {
  return (
    <View style={styles.container}>
      {props.icon && (
        <MaterialCommunityIcons
          name={props.icon}
          style={styles.icon}
          size={25}
          color="#000"
        />
      )}
      <TextInput placeholderTextColor="#ccc" {...props} styles={styles.text} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "#eee",
    borderRadius: 25,
    flexDirection: "row",
    padding: 15,
    marginVertical: 10,
  },
  icon: {
    marginRight: 10,
  },
  text: {
    fontSize: 15,
    color: "black",
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  },
});

export default AppTextInput;
