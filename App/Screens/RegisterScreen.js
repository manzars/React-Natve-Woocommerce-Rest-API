import React, { useState, useContext } from "react";
import { StyleSheet, Platform, Keyboard } from "react-native";
import * as Yup from "yup";

import Screen from "../components/Screen";
import AppForm from "../components/AppForm";
import AppFormField from "../components/AppFormField";
import SubmitButton from "../components/SubmitButton";
import ErrorMessage from "../components/ErrorMessage";
import ActivityIndicator from "../components/ActivityIndicator";
import AppText from "../components/AppText";
import Woocommerce from "../api/woocommerce";
import AuthContext from "../auth/context";

const validationSchema = Yup.object().shape({
  first_name: Yup.string().required().label("Name"),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

function RegisterScreen() {
  const authContext = useContext(AuthContext);
  const [registerFailed, setRegisterFailed] = useState(false);
  const [visible, setVisible] = useState(false);

  const handleSubmit = async (values) => {
    Keyboard.dismiss();
    authContext.setUser(null);
    setRegisterFailed(false);
    setVisible(true);
    Woocommerce.postCustomers(values)
      .then((res) => {
        setVisible(false);
        authContext.setUser(res.data);
      })
      .catch((error) => {
        console.log(error);
        setVisible(false);
        setRegisterFailed(true);
      });
  };

  let noPadding = false;
  if (Platform.OS === "android") {
    noPadding = true;
  }

  return (
    <React.Fragment>
      <ActivityIndicator visible={visible} />
      <Screen style={styles.container} noPadding={noPadding}>
        <AppText style={styles.title} st>
          Customer Registration
        </AppText>
        <AppForm
          initialValues={{ first_name: "", email: "", password: "" }}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          <ErrorMessage
            error="Email Address Already Taken"
            visible={registerFailed}
          />
          <AppFormField
            autoCorrect={false}
            icon="account"
            name="first_name"
            placeholder="Name"
          />
          <AppFormField
            autoCapitalize="none"
            autoCorrect={false}
            icon="email"
            keyboardType="email-address"
            name="email"
            placeholder="Email"
            textContentType="emailAddress"
          />
          <AppFormField
            autoCapitalize="none"
            autoCorrect={false}
            icon="lock"
            name="password"
            placeholder="Password"
            secureTextEntry
            textContentType="password"
          />
          <SubmitButton title="Register" color="red" />
        </AppForm>
      </Screen>
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
  },
  title: {
    fontWeight: "bold",
    fontSize: 30,
    alignSelf: "center",
    paddingBottom: 20,
  },
});

export default RegisterScreen;
