import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import Styles from "../Styles/Styles";

export default CameraButton = ({ navigation }) => {
  return (
    <View style={Styles.camera_button_position}>
      <TouchableOpacity
        onPress={() => navigation.navigate("Cam")}
        style={Styles.camera_button}
      >
        <Text>Scan Dominoes</Text>
      </TouchableOpacity>
    </View>
  );
};
