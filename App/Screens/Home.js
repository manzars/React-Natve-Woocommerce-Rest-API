import React, { useEffect, useState, useContext } from "react";
import { StyleSheet } from "react-native";
import Screen from "../components/Screen";
import AppText from "../components/AppText";
import AppButton from "../components/AppButton";
import AuthContext from "../auth/context";

const Home = () => {
  const authContext = useContext(AuthContext);

  const handlePress = () => {
    authContext.setUser(null);
  };

  return (
    <Screen noPadding={true} style={styles.container}>
      <AppText style={styles.title}>Customer Home Screen</AppText>
      <AppText style={styles.name}>{authContext.user.first_name}</AppText>
      <AppText style={styles.email}>{authContext.user.email}</AppText>
      <AppButton
        title="Logout"
        color="red"
        style={styles.logout}
        buttonPressed={handlePress}
      />
      <AppText style={styles.other}>Some Other Details</AppText>
      <AppText style={styles.details}>id: {authContext.user.id}</AppText>
      <AppText style={styles.details}>
        username: {authContext.user.username}
      </AppText>
      <AppText style={styles.details}>
        date created: {authContext.user.date_created}
      </AppText>
      <AppText style={styles.details}>
        date created (gmt): {authContext.user.date_created_gmt}
      </AppText>
      <AppText style={styles.details}>
        date modified: {authContext.user.date_modified}
      </AppText>
      <AppText style={styles.details}>
        date modified (gmt): {authContext.user.date_modified_gmt}
      </AppText>

      <AppText style={styles.details}>
        is paying customer:{" "}
        {authContext.user.is_paying_customer ? "True" : "False"}
      </AppText>
      <AppText style={styles.details}>role: {authContext.user.role}</AppText>
    </Screen>
  );
};
const styles = StyleSheet.create({
  title: {
    fontSize: 25,
    alignSelf: "center",
  },
  details: {
    marginLeft: 30,
    color: "#75756c",
  },
  name: {
    fontSize: 40,
    alignSelf: "center",
    fontWeight: "bold",
    paddingTop: 50,
  },
  other: {
    fontSize: 20,
    fontWeight: "bold",
    alignSelf: "center",
    paddingVertical: 20,
  },
  email: {
    fontSize: 18,
    alignSelf: "center",
    color: "#aaa",
  },
  container: {
    backgroundColor: "#eee",
  },
  logout: {
    width: "50%",
    alignSelf: "center",
    marginTop: 40,
  },
});

export default Home;
