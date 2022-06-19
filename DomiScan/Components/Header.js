import React from "react";
import { StyleSheet, View, SafeAreaView, Text, Image } from "react-native";

export default function Header({ navigation }) {
  return (
    <SafeAreaView style={styles.header}>
      {/* <Image source={require("../assets/favicon.png")} style={styles.icon} /> */}
      <Text style={styles.title}>DomiScan</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: "18%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#eee",
  },
  title: {
    fontSize: 45,
    fontFamily: "Cochin",
  },
  icon: {
    width: 26,
    height: 26,
  }
});
