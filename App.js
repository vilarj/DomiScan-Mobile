import React from 'react';
import { View, ScrollView } from 'react-native';
import Header from './Components/Header'
import Body from './Components/Body'
import PlayerName from './Components/PlayerName'
import Total from './Components/Total'
import Camera from './Components/Camera'

const App = () => {
  return (
    <View>
      <Header />
      <PlayerName />
      <Body />
      <Total />
      {/* <Camera /> */}
    </View>
  );
};

export default App;