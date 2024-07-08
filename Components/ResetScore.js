import { Pressable, Text } from "react-native";
import Styles from "../Styles/Styles";

/**
 * This component accepts props like onPress (function to call on press),
 * title (button text), and disabled (a boolean to disable the button).
 * It also incorporates a disabled_button style for visual feedback when disabled.
 */
const ResetScore = ({ onPress, disabled }) => {
  return (
    <Pressable
      style={[Styles.reset_button, disabled && Styles.disabled_button]}
      onPress={onPress}
    >
      <Text />
    </Pressable>
  );
};

export default ResetScore;
