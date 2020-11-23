import React from "react";
import { View } from "react-native";
import AppButton from "./app/components/AppButton";
import ViewImageScreen from "./app/screen/ViewImageScreen";
import WelcomeScreen from "./app/screen/WelcomeScreen";

export default function App() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <AppButton title="Login" onPress={() => console.log("Tapped")} />
    </View>
  );
}
