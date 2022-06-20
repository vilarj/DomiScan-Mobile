import React, { useState } from "react";
import Header from "./Components/Header";
import Body from "./Components/Body";
import Backend from "./Backend/Backend";
import CameraButton from "./Components/CameraButton";
import Camera2 from "./Components/Camera2";

import { View, Text } from "react-native";
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';

const App = () => {
  return (
    <View>
      <Header />
      <Body />
      {/* <Backend /> */}
      {/* <Camera2 /> */}
      <CameraButton />
    </View>
  );
};

export default App;
