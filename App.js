import React, { useState } from 'react';
import { Text, TextInput, View, ScrollView } from 'react-native';

const App = () => {
  const [text, setText] = useState('');

  return (
    <ScrollView>
      <View style={{padding: 10}}>
        <TextInput
          style={{height: 120}}
          placeholder="Enter the name of player 1"
          onChangeText={newText => setText(newText)}
        />
        <Text style={{padding: 0, fontSize: 42}}></Text>
      </View>

      <View style={{padding: 10}}>
        <TextInput
          style={{height: 120}}
          placeholder="Enter the name of player 2"
          onChangeText={newText => setText(newText)}
        />
        <Text style={{padding: 0, fontSize: 42}}></Text>
      </View>

    </ScrollView>
  );
}

export default App;