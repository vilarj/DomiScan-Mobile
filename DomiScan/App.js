import React from "react";
import Header from "./Components/Header";
import Body from "./Components/Body";
import Backend from "./Backend/Backend";
import CameraButton from "./Components/CameraButton";
import HomeScreen from "./Components/HomeScreen";
import DominoesScreen from "./Components/DominoesScreen";

import { View } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';

const App = () => {
  return (
    <NavigationContainer>

      <View>
        <Header />
        <Body />
        {/* <Backend /> */}
        <CameraButton />
      </View>

    </NavigationContainer>
  );
};

// function screens() {
//   <Stack.Navigator>

//     <Stack.Screen>
//       name="Dominoes"
//       component={DominoesScreen}
//       options={{ title: 'Dominoes' }}
//     </Stack.Screen>

//   </Stack.Navigator>
// }

export default App;
