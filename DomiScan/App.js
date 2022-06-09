import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import Header from "./Components/Header";
import Body from "./Components/Body";

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

  return (
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
    </View>
  );
};

export default App;
