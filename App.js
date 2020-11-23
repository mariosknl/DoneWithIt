import React from "react";
import { View } from "react-native";
import AppButton from "./app/components/AppButton";
import ViewImageScreen from "./app/screen/ViewImageScreen";
import WelcomeScreen from "./app/screen/WelcomeScreen";
import ListingDetailsScreen from "./app/screen/ListingDetailsScreen";

import Card from "./app/components/Card";
import MessagesScreen from "./app/screen/MessagesScreen";
import Screen from "./app/components/Screen";
import Icon from "./app/components/Icon";
import ListItem from "./app/components/ListItem";

export default function App() {
  return (
    <Screen>
      <ListItem ImageComponent={<Icon name="email" />} title="My title" />
    </Screen>
  );
}
