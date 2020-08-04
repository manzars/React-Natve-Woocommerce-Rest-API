import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import WelcomeScreen from "../../Screens/WelcomeScreen";
import LoginScreen from "../../Screens/LoginScreen";
import RegisterScreen from "../../Screens/RegisterScreen";

const Stact = createStackNavigator();

const AuthNavigator = () => (
  <Stact.Navigator>
    <Stact.Screen
      name="Welcome"
      component={WelcomeScreen}
      options={{
        headerShown: false,
      }}
    />
    <Stact.Screen name="Login" component={LoginScreen} />
    <Stact.Screen name="Register" component={RegisterScreen} />
  </Stact.Navigator>
);

export default AuthNavigator;
