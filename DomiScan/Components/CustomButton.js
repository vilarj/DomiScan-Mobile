import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'

const CustomButton = () => {
  return (
    <View>
        {/* Camera Button */}
        <TouchableOpacity
          onPress={() => {
            console.log("Custom button")
          }}
          style={styles.button}
        >
          <Text style={styles.text}>Scan Dominoes</Text>
        </TouchableOpacity>
    </View>
  )
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

export default CustomButton