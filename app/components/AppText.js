import React from "react";
import { PlatformColor, StyleSheet, Text } from "react-native";

function AppText({ children, style }) {
  return <Text style={[styles.text, style]}>{children}</Text>;
}

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontFamily: PlatformColor.OS === "android" ? "Roboto" : "Avenir",
  },
});

export default AppText;
