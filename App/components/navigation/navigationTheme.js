import { DefaultTheme } from "@react-navigation/native";

const myTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "red",
    background: "white",
  },
};
export default myTheme;
