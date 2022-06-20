import React from "react";
import Styles from '../Styles/Styles';

import { SafeAreaView, Text } from "react-native";

export default function Header() {
  return (
    <SafeAreaView style={Styles.header}>
      <Text style={Styles.title}>DomiScan</Text>
      {/* <Image source={require("../assets/favicon.png")} style={styles.icon} /> */}
    </SafeAreaView>
  );
}