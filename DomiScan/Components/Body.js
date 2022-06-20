import React, { useState } from "react";
import { View, TextInput, Text } from "react-native";
import Styles from "../Styles/Styles";

export default function Body() {
  const [scores, setScore] = useState({ playerOne: 0, playerTwo: 0 });
  const [name1, setName1] = useState("");
  const [name2, setName2] = useState("");
  const [theme, setTheme] = useState(Appearance.getColorScheme())

  Appearance.addChangeListener((scheme) => {
    setTheme(scheme)
  })

  const add25 = () => {
    console.warn("25");
  };

  const add50 = () => {
    console.warn("50");
  };

  function calculateScores(input) {
    let inputStr = String(input).split(",");
    let digits = inputStr.filter((value) => !isNaN(parseInt(value)));
    let sum = digits.reduce((a, b) => parseInt(a) + parseInt(b), 0);

    return sum;
  }

  function handleChange(name, values) {
    let playerScore = calculateScores(values);
    if (playerScore)
      setScore((prevScores) => ({
        ...prevScores,
        [name]: playerScore,
      }));
  }

  return (
    <View>
      {/* Main View */}
      <View style={Styles.container}>

        {/* Players */}
        <View style={Styles.players}>
          <View style={Styles.inner}>
            <TextInput
              placeholder="Enter Name"
              onChangeText={setName1}
              editable
              maxLength={20}
            />
          </View>
        </View>

        <View style={Styles.players}>
          <View style={Styles.inner}>
            <TextInput
              placeholder="Enter Name"
              onChangeText={setName2}
              editable
              maxLength={20}
            />
          </View>
        </View>

        {/* Body */}
        <View style={Styles.box}>
          <View style={Styles.inner}>
            <TextInput
              placeholder="Enter Score"
              editable
              onChangeText={(value) => handleChange("playerOne", value)}
            />
          </View>
        </View>

        <View style={Styles.box}>
          <View style={Styles.inner}>
            <TextInput
              placeholder="Enter Score"
              editable
              onChangeText={(value) => handleChange("playerTwo", value)}
            />
          </View>
        </View>

        {/* Total */}
        <View style={Styles.total_score}>
          <View style={Styles.inner}>
            <Text>{scores.playerOne}</Text>
          </View>
        </View>

        <View style={Styles.total_score}>
          <View style={Styles.inner}>
            <Text>{scores.playerTwo}</Text>
          </View>
        </View>

        {/* End of Main View */}
      </View>
    </View>
  );
}