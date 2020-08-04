import React from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";
import Constant from "expo-constants";

const Screen = (props) => {
  return (
    <SafeAreaView
      style={[
        styles.screen,
        props.style,
        props.noPadding ? styles.noPadding : null,
      ]}
    >
      {props.children}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    paddingTop: Constant.statusBarHeight,
    flex: 1,
  },
  noPadding: {
    paddingTop: 180,
  },
  listScreen: {
    paddingTop: 20,
  },
});

export default Screen;
