import React, { useState, useEffect } from "react";
import { View, Button, Text } from "react-native";
import Header from "./Components/Header";
import Body from "./Components/Body";
// import Camera2 from "./Components/Camera2";

const App = () => {
  const [data, setData] = useState([])
  
  useEffect(() => {
    fetch("http://127.0.0.1:5000/photo_api").then(
      dominoes_total => dominoes_total.json()
    ).then(
      data => {
        setData(data)
        console.log(data)
      }
    )
  }, [])

  return (
    <View>
      <Header />
      <Body />

      <View>
        <Text>
          {
            (typeof data.Photo === 'undefined') 
            ? (<Text> Loading... </Text>) 
            : (this.data.Photo.map( (Photo, i) => 
            <Text key={i}>{Photo}</Text>
            ))
          }
        </Text>
      </View>
    </View>
  );
};

export default App;
