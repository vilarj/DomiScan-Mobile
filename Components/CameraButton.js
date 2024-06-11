import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import Styles from "../Styles/Styles";

export default CameraButton = (navigation) => {
  const Touchable = Platform.select({
    ios: TouchableOpacity,
    android: TouchableOpacity,
  });

  return (
    <View style={Styles.camera_button_position}>
      <Touchable
        onPress={() => navigation.navigate("Cam")}
        style={Styles.camera_button}
      >
        <Text>Scan Dominoes</Text>
      </Touchable>
    </View>
  );
};
