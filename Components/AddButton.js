import React from "react";
import { Pressable, Text } from "react-native";
import Styles from "../Styles/Styles";

const AddButton = ({ title, onPress }) => {
  return (
    <Pressable onPress={onPress}>
      <Text style={Styles.add_buttons}>{title}</Text>
    </Pressable>
  );
};

export default AddButton;
