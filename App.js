import React, { useState } from 'react';
import { Dimensions, StyleSheet, Iamge, Text, TextInput, View, ScrollView } from 'react-native';

const App = () => {
  const { width } = Dimensions.get("screen")

  const styles = StyleSheet.create({
    title: {
      margin: 2,
      marginTop: 40,
      paddingVertical: 4,
      borderWidth: 2,
      backgroundColor: "#61dafb",
      textAlign: "center",
      fontSize: 18,
      fontWeight: "bold",
    },
    playerInput: {
      borderColor: "black",
      borderWidth: 0.5,
      width: width / 2,
      padding: 5,
      margin: 2,
      borderRadius: 20,
      marginTop: 5,
    },
    container: {
      borderWidth: 0.5,
      flexDirection: "row",
      margin: 2,
      padding: 20,
    },
  })

  return (
    // Main view
    <View>
      
      {/* Title view */}
      <View>
        <Text style={[styles.title]}>DomiScan</Text>
      </View>
      
      {/* Players' view - text inputs */}
      <View style={[styles.playerInput]}>
        <TextInput placeholder='Player 1'></TextInput>
      </View>

      {/* Score Boxes */}
      <View style={[styles.container]}>
        <TextInput placeholder='Score'></TextInput>
      </View>
      {/* End of score box */}
      {/* End of players' view */}

      {/* Players' view - text inputs */}
      <View style={[styles.playerInput]}>
        <TextInput placeholder='Player 2'></TextInput>
      </View>

      {/* Score Boxes */}
      <View style={[styles.container]}>
        <TextInput placeholder='Score'></TextInput>
      </View>
      {/* End of score box */}
      {/* End of players' view */}

      
      {/* End of main view */}
    </View>
  );
};


export default App;