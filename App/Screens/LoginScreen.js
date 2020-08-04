import React, { useState, useEffect, useContext } from "react";
import { StyleSheet, Platform, Keyboard } from "react-native";
import Screen from "../components/Screen";
import * as Yup from "yup";

import AppFormField from "../components/AppFormField";
import SubmitButton from "../components/SubmitButton";
import AppForm from "../components/AppForm";
import ErrorMessage from "../components/ErrorMessage";
import AuthContext from "../auth/context";

// import authApi from "../api/auth";
// import useApi from "../hooks/useApi";
import ActivityIndicator from "../components/ActivityIndicator";
import AppText from "../components/AppText";
import Woocommerce from "../api/woocommerce";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

const LoginScreen = () => {
  const authContext = useContext(AuthContext);
  const [loginFailed, setLoginFailed] = useState(false);
  const [visible, setVisible] = useState(false);
  const [error, setError] = useState(true);

  let noPadding = false;
  if (Platform.OS === "android") {
    noPadding = true;
  }

  const handleSubmit = (values) => {
    Keyboard.dismiss();
    authContext.setUser(null);
    setLoginFailed(false);
    setVisible(true);
    Woocommerce.getCustomers()
      .then((res) => {
        for (let i = 0; i < res.data.length; i++) {
          if (res.data[i].email === values.email) {
            setError(true);
            setVisible(false);
            authContext.setUser((state) => res.data[i]);
          }
        }
        if (error) {
          setLoginFailed(true);
          setVisible(false);
        }
        setError(false);
      })
      .catch((error) => {
        console.log(error);
        setVisible(false);
        setLoginFailed(true);
      });
  };

  return (
    <React.Fragment>
      <ActivityIndicator visible={visible} />
      <Screen style={styles.container} noPadding={noPadding}>
        <AppText style={styles.title} st>
          Customer Login
        </AppText>
        <AppForm
          initialValues={{ email: "", password: "" }}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          <ErrorMessage
            error="Invalid Email or/and Password Combination"
            visible={loginFailed}
          />
          <AppFormField
            placeholder="Email"
            icon="email"
            name="email"
            autoCapitalize="none"
            keyboardType="email-address"
            textContentType="emailAddress"
          />
          <AppFormField
            placeholder="Password"
            icon="lock"
            name="password"
            autoCapitalize="none"
            textContentType="password"
            secureTextEntry={true}
            textContentType="password"
          />
          <SubmitButton color="red" title="Login" />
        </AppForm>
      </Screen>
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
  },
  container: {
    padding: 10,
  },
  title: {
    fontWeight: "bold",
    fontSize: 30,
    alignSelf: "center",
    paddingBottom: 20,
  },
});

export default LoginScreen;
