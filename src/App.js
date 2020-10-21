import React from "react";
import { StyleSheet, View, Text } from "react-native";

export default function App() {
  return (
    <View style={styles.screen}>
      <Text>Gocho</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#ccc",
    padding: 50
  }
});
