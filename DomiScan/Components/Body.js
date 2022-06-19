import React, { useState } from "react";
import { StyleSheet, View, TextInput, Text } from "react-native";

export default function Body() {
  const [scores, setScore] = useState({ playerOne: 0, playerTwo: 0 });
  const [name1, setName1] = useState("");
  const [name2, setName2] = useState("");

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
      <View style={styles.container}>

        {/* Players */}
        <View style={styles.players}>
          <View style={styles.inner}>
            <TextInput
              placeholder="Enter Name"
              onChangeText={setName1}
              editable
              maxLength={20}
            />
          </View>
        </View>

        <View style={styles.players}>
          <View style={styles.inner}>
            <TextInput
              placeholder="Enter Name"
              onChangeText={setName2}
              editable
              maxLength={20}
            />
          </View>
        </View>

        {/* Body */}
        <View style={styles.box}>
          <View style={styles.inner}>
            <TextInput
              placeholder="Enter Score"
              editable
              onChangeText={(value) => handleChange("playerOne", value)}
            />
          </View>
        </View>

        <View style={styles.box}>
          <View style={styles.inner}>
            <TextInput
              placeholder="Enter Score"
              editable
              onChangeText={(value) => handleChange("playerTwo", value)}
            />
          </View>
        </View>

        {/* Total */}
        <View style={styles.total_score}>
          <View style={styles.inner}>
            <Text>{scores.playerOne}</Text>
          </View>
        </View>

        <View style={styles.total_score}>
          <View style={styles.inner}>
            <Text>{scores.playerTwo}</Text>
          </View>
        </View>

        {/* End of Main View */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "60%",
    padding: 5,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  players: {
    width: "50%",
    height: "20%",
    padding: 5,
  },
  total_score: {
    width: "50%",
    height: "20%",
    padding: 5,
  },
  box: {
    width: "50%",
    height: "60%",
    padding: 5,
  },
  inner: {
    flex: 1,
    backgroundColor: "#eee",
    alignItems: "center",
    justifyContent: "center",
  },
});
