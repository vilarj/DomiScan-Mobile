import React, { useEffect, useState } from "react";
import { Appearance, Pressable, Text, TextInput, View } from "react-native";
import Styles from "../Styles/Styles";

export default function Body({ route }) {
  const [scores, setScore] = useState({ playerOne: 0, playerTwo: 0 });
  const [theme, setTheme] = useState(Appearance.getColorScheme());
  const [userInput, setUserInput] = useState({ playerOne: "", playerTwo: "" });

  Appearance.addChangeListener((scheme) => {
    setTheme(scheme);
  });

  useEffect(() => {
    updateScore("playerOne", userInput.playerOne);
    updateScore("playerTwo", userInput.playerTwo);
  }, [userInput]);

  const Add = (name, amount) => {
    let lastChar = userInput[name][userInput[name].length - 1];
    setUserInput((prevValues) => ({
      ...prevValues,
      [name]:
        lastChar == "," || lastChar == undefined
          ? userInput[name] + String(amount)
          : userInput[name] + "," + String(amount),
    }));
  };

  function calculateScores(input) {
    let inputStr = String(input).split(",");
    let digits = inputStr.filter((value) => !isNaN(parseInt(value)));
    let sum = digits.reduce((a, b) => parseInt(a) + parseInt(b), 0);

    return sum;
  }

  function updateScore(player, values) {
    let playerScore = calculateScores(values);
    if (playerScore)
      setScore((prevScores) => ({
        ...prevScores,
        [player]: playerScore,
      }));
  }

  function handleChange(name, values) {
    setUserInput((inputValues) => ({
      ...inputValues,
      [name]: values,
    }));
  }

  if (route.params) {
    if (route.params.playerOneScore > 0) {
      Add("playerOne", route.params.playerOneScore);
      route.params.playerOneScore = 0;
    }
    if (route.params.playerTwoScore > 0) {
      Add("playerTwo", route.params.playerTwoScore);
      route.params.playerTwoScore = 0;
    }
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
              placeholderTextColor={"gray"}
              editable
              style={Styles.player_name_input}
              maxLength={20}
            />
          </View>
        </View>

        <View style={Styles.players}>
          <View style={Styles.inner}>
            <TextInput
              placeholder="Enter Name"
              placeholderTextColor={"gray"}
              editable
              style={Styles.player_name_input}
              maxLength={20}
            />
          </View>
        </View>

        {/* Body */}
        <View style={Styles.box}>
          <View style={Styles.inner}>
            <TextInput
              placeholder="Enter Score"
              placeholderTextColor={"gray"}
              value={userInput.playerOne}
              editable
              style={Styles.player_actual_score}
              onChangeText={(value) => handleChange("playerOne", value)}
            />
          </View>
        </View>

        <View style={Styles.box}>
          <View style={Styles.inner}>
            <TextInput
              placeholder="Enter Score"
              placeholderTextColor={"gray"}
              value={userInput.playerTwo}
              editable
              style={Styles.player_actual_score}
              onChangeText={(value) => handleChange("playerTwo", value)}
            />
          </View>
        </View>

        {/* Total */}
        <View style={Styles.total_score}>
          <View style={Styles.inner}>
            <Text style={Styles.player_total_score}>{scores.playerOne}</Text>
          </View>
        </View>

        <View style={Styles.total_score}>
          <View style={Styles.inner}>
            <Text style={Styles.player_total_score}>{scores.playerTwo}</Text>
          </View>
        </View>

        {/* Add Buttons */}
        <View style={Styles.total_score}>
          <View style={Styles.inner}>
            <Pressable
              onPress={() => {
                Add("playerOne", 30);
              }}
            >
              <Text style={Styles.add_buttons}>Add 30</Text>
            </Pressable>
          </View>
        </View>

        <View style={Styles.total_score}>
          <View style={Styles.inner}>
            <Pressable
              onPress={() => {
                Add("playerTwo", 30);
              }}
            >
              <Text style={Styles.add_buttons}>Add 30</Text>
            </Pressable>
          </View>
        </View>

        <View style={Styles.total_score}>
          <View style={Styles.inner}>
            <Pressable
              onPress={() => {
                Add("playerOne", 60);
              }}
            >
              <Text style={Styles.add_buttons}>Add 60</Text>
            </Pressable>
          </View>
        </View>

        <View style={Styles.total_score}>
          <View style={Styles.inner}>
            <Pressable
              onPress={() => {
                Add("playerTwo", 60);
              }}
            >
              <Text style={Styles.add_buttons}>Add 60</Text>
            </Pressable>
          </View>
        </View>
        {/* End of Main View */}
      </View>
    </View>
  );
}
