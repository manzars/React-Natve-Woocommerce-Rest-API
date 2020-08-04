import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import navigationTheme from "./App/components/navigation/navigationTheme";
import AuthNavigation from "./App/components/navigation/AuthNavigation";
import Home from "./App/Screens/Home";
import AuthContext from "./App/auth/context";

export default function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  return (
    <AuthContext.Provider value={{ user, setUser, loading, setLoading }}>
      <NavigationContainer theme={navigationTheme}>
        {user ? <Home /> : <AuthNavigation />}
      </NavigationContainer>
    </AuthContext.Provider>
  );
}

// consumer secret = cs_e3fbf07f862e369f3dbec44a181851a26a1e7aec
// cnsumer key = ck_b6363cba510f3e51166d5bc3673bb305fb0b1e27
