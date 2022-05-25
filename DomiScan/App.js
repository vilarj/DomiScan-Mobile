import React from "react";
import { View, Button } from "react-native";
import Header from "./Components/Header";
import Body from "./Components/Body";
import Camera2 from "./Components/Camera2";

const OpenCamera = () => {
  return <Camera2 />;
};

const App = () => {
  return (
    <View>
      <Header />
      <Body />
      <Button title="Camera" onPress={OpenCamera} />
    </View>
  );
};

export default App;
