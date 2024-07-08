import { TextInput } from "react-native";

const PlayerInput = ({
  placeholder,
  placeholderTextColor,
  maxLength,
  style,
  onChangeText,
  value,
}) => (
  <TextInput
    placeholder={placeholder}
    placeholderTextColor={placeholderTextColor}
    editable
    style={style}
    maxLength={maxLength}
    onChangeText={onChangeText}
    value={value}
  />
);

export default PlayerInput;
