import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Header from "./Components/Header";
import Body from "./Components/Body";
import { NavigationContainer } from '@react-navigation/native';
// import Camera2 from "./Components/Camera2";

const App = () => {
  const [data, setData] = useState([])

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

  const camera_module = () => {
    console.log("Button pressed")
  }

  return (
    <NavigationContainer>
      <View>
        <Header />
        <Body />

        <Text>
          {
            (typeof data.Photo === 'undefined')
              ? (<Text> Loading... </Text>)
              : (data.Photo.map((Photo, i) =>
                <Text key={i}>{Photo} </Text>
              ))
          }
        </Text>

        <TouchableOpacity
          onPress={camera_module}
          style={styles.button}
        >
          <Text style={styles.text}>Scan Dominoes</Text>
        </TouchableOpacity>
      </View>
    </NavigationContainer>
  );
};

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
