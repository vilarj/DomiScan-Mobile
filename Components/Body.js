import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import Styles from "../Styles/Styles";
import AddButton from "./AddButton";
import PlayerInput from "./PlayerInput";
import ResetScore from "./ResetScore";
import TotalScore from "./TotalScore";

export default function Body({ route }) {
  const [scores, setScore] = useState({ playerOne: 0, playerTwo: 0 });
  const [userInput, setUserInput] = useState({ playerOne: "", playerTwo: "" });

  useEffect(() => {
    checkForReset();
  }, [scores]);

  /**
   * useEffect checks for initial scores in route parameters
   * and updates the userInput state accordingly.
   */
  useEffect(() => {
    if (route.params) {
      setUserInput((prevInput) => ({
        ...prevInput,
        playerOne: route.params.playerOneScore
          ? String(route.params.playerOneScore)
          : "",
        playerTwo: route.params.playerTwoScore
          ? String(route.params.playerTwoScore)
          : "",
      }));
      route.params.playerOneScore = 0;
      route.params.playerTwoScore = 0;
    }
  }, [route]);

  /**
   * useEffect for calculating the players' scores.
   */
  useEffect(() => {
    const playerOneScore = calculateScores(userInput.playerOne);
    const playerTwoScore = calculateScores(userInput.playerTwo);

    if (playerOneScore !== scores.playerOne) {
      setScore((prevScores) => ({
        ...prevScores,
        playerOne: playerOneScore,
      }));
    }

    if (playerTwoScore !== scores.playerTwo) {
      setScore((prevScores) => ({
        ...prevScores,
        playerTwo: playerTwoScore,
      }));
    }
  }, [userInput]);

  /**
   * checkForReset that checks if either player's score is 200 or greater.
   * If true, it resets both scores and userInput states to
   * zero and empty strings, respectively.
   */
  const checkForReset = () => {
    if (scores.playerOne >= 200 || scores.playerTwo >= 200) {
      setScore({ playerOne: 0, playerTwo: 0 });
      setUserInput({ playerOne: "", playerTwo: "" });
    }
  };

  /**
   * Function that adds the score to the proper player.
   *
   * @param {Text} name of the player.
   * @param {Number} amount to be added to the sum.
   */
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

  /**
   * Sums up all the values entered in the score box.
   *
   * @param {userInput} input is the name of the player (playerOne | playerTwo).
   * @returns total sum.
   */
  function calculateScores(input) {
    let inputStr = String(input).split(",");
    let digits = inputStr.filter((value) => !isNaN(parseInt(value)));
    let sum = digits.reduce((a, b) => parseInt(a) + parseInt(b), 0);

    return sum;
  }

  /**
   * This function replaces any characters other than numbers
   * and commas with an empty string, preventing invalid input
   * from reaching the calculation functions.
   *
   * @param {Text} name of the player (playerOne | PlayerTwo).
   * @param {Number} value to be added as the current total score.
   */
  const handleChange = (name, value) => {
    const sanitizedValue = value.replace(/[^0-9,]/g, "");

    setUserInput((inputValues) => ({
      ...inputValues,
      [name]: sanitizedValue,
    }));
  };

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
            <PlayerInput
              name={"playerOne"}
              maxLength={20}
              placeholderTextColor={"gray"}
              placeholder={"Enter Name"}
              style={Styles.player_name_input}
              onChangeText={(value) => handleChange("playerOne", value)}
            />
          </View>
        </View>

        <View style={Styles.players}>
          <View style={Styles.inner}>
            <PlayerInput
              name={"playerTwo"}
              maxLength={20}
              placeholderTextColor={"gray"}
              placeholder={"Enter Name"}
              style={Styles.player_name_input}
              onChangeText={(value) => handleChange("playerTwo", value)}
            />
          </View>
        </View>

        {/* Body */}
        <View style={Styles.box}>
          <View style={Styles.inner}>
            <PlayerInput
              placeholder={"Enter Score"}
              placeholderTextColor={"gray"}
              value={userInput.playerOne}
              style={Styles.player_actual_score}
              onChangeText={(value) => handleChange("playerOne", value)}
            />
          </View>
        </View>

        <View style={Styles.box}>
          <View style={Styles.inner}>
            <PlayerInput
              placeholder={"Enter Score"}
              placeholderTextColor={"gray"}
              value={userInput.playerTwo}
              style={Styles.player_actual_score}
              onChangeText={(value) => handleChange("playerTwo", value)}
            />
          </View>
        </View>

        {/* Total */}
        <View style={Styles.total_score}>
          <View style={Styles.inner}>
            <TotalScore score={scores.playerOne} />
          </View>
        </View>

        <View style={Styles.total_score}>
          <View style={Styles.inner}>
            <TotalScore score={scores.playerTwo} />
          </View>
        </View>

        {/* Add Buttons */}
        <View style={Styles.total_score}>
          <View style={Styles.inner}>
            <AddButton title="Add 30" onPress={() => Add("playerOne", 30)} />
          </View>
        </View>

        <View style={Styles.total_score}>
          <View style={Styles.inner}>
            <AddButton title="Add 30" onPress={() => Add("playerTwo", 30)} />
          </View>
        </View>

        <View style={Styles.total_score}>
          <View style={Styles.inner}>
            <AddButton title="Add 60" onPress={() => Add("playerOne", 60)} />
          </View>
        </View>

        <View style={Styles.total_score}>
          <View style={Styles.inner}>
            <AddButton title="Add 60" onPress={() => Add("playerTwo", 60)} />
          </View>
        </View>

        {/* Reset Logic */}
        <View>
          {scores.playerOne >= 200 || scores.playerTwo >= 200 ? (
            <ResetScore title="Reset" onPress={() => checkForReset()} />
          ) : null}
        </View>

        {/* End of Main View */}
      </View>
    </View>
  );
}
