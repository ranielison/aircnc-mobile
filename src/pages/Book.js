import React from "react";
import { View, Text, SafeAreaView, AsyncStorage } from "react-native";

export default function Book({ navigation }) {
  const id = navigation.getParam("id");
  return (
    <SafeAreaView>
      <Text>Id: {id}</Text>
    </SafeAreaView>
  );
}
