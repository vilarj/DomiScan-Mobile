import React from "react";
import Styles from "../Styles/Styles";

import { SafeAreaView, Text } from "react-native";

export default function Header({ navigation }) {
  return (
    <SafeAreaView style={StyleSheet.header}>
      {/* <Image source={require("../assets/favicon.png")} style={styles.icon} /> */}
      <Text style={Styles.title}>DomiScan</Text>
    </SafeAreaView>
  );
}