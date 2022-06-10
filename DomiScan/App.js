import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Header from "./Components/Header";
import Body from "./Components/Body";
import HomeScreen from "./Components/HomeScreen";
import DominoesScreen from "./Components/DominoesScreen";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const App = () => {
  const [data, setData] = useState([])
  const Stack = createNativeStackNavigator();

  useEffect(() => {
    fetch("http://127.0.0.1:5000")
      .then(res => res.json())
      .then(
        data => {
          setData(data)
          console.log(data)
        }
      )
  }, [])

  return (
    <NavigationContainer>

      {/* Main app */}
      <View>
        <Header />
        <Body />

        {/* Backend */}
        <Text>
          {
            (typeof data.Photo === 'undefined')
              ? (<Text> Loading... </Text>)
              : (data.Photo.map((Photo, i) =>
                <Text key={i}>{Photo} </Text>
              ))
          }
        </Text>

        {/* Camera Button */}
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Dominoes', { screens })
          }}
          style={styles.button}
        >
          <Text style={styles.text}>Scan Dominoes</Text>
        </TouchableOpacity>

      </View>
    </NavigationContainer>
  );
};

function screens() {
  <Stack.Navigator>

    <Stack.Screen>
      name="Dominoes"
      component={DominoesScreen}
      options={{ title: 'Dominoes' }}
    </Stack.Screen>

  </Stack.Navigator>
}

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    backgroundColor: "#eee",
    width: "100%",
    padding: 5,
  },
  text: {
    fontSize: 20,
    color: "black",
  }
});

export default App;
