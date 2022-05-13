import React from 'react';
import { View } from 'react-native';
import Header from './Components/Header'
import Body from './Components/Body'
import Camera from './Components/Camera'
import LoginScreen from './LoginScreen/LoginScreen';

const App = () => {
  return (
    <View>
      <LoginScreen />
      {/* <Header />
      <Body /> */}
      {/* <Camera /> */}
    </View>
  );
};

export default App;