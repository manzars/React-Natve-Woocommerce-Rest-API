import React from "react";
import { View, Text, ImageBackground, StyleSheet, Image } from "react-native";

import AppButton from "../components/AppButton";

function WelcomeScreen(props) {
  return (
    <ImageBackground
      blurRadius={2}
      style={styles.background}
      source={require("../assets/background.jpg")}
    >
      <View style={styles.buttonContainer}>
        <AppButton
          title="login"
          color="red"
          buttonPressed={() => props.navigation.navigate("Login")}
        />
        <AppButton
          title="register"
          color="blue"
          buttonPressed={() => props.navigation.navigate("Register")}
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  buttonContainer: {
    padding: 20,
    width: "100%",
  },

  logo: {
    width: 100,
    height: 100,
  },
  container: {
    position: "absolute",
    top: 70,
    alignItems: "center",
  },
  tagline: {
    fontSize: 18,
    fontWeight: "600",
    paddingVertical: 10,
  },
});

export default WelcomeScreen;
