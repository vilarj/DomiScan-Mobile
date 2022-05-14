import React from 'react';
import { View } from 'react-native';
import Header from './Components/Header'
import Body from './Components/Body'
import Camera from './Components/Camera'
import LoginScreen from './LoginScreen/LoginScreen';
import StackButtons from './Components/StackButtons';

const App = () => {
  return (
    <View>
      {/* <LoginScreen /> */}
      <Header />
      <Body />
      <StackButtons />
      {/* <Camera /> */}
    </View>
  );
};

export default App;