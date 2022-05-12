import { Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'

export default function CustomButton( {onPress, text, type = "primary", bgColor, txtColor}) {
  return (
    <Pressable
        onPress={onPress} 
        style={[
            styles.container, 
            styles[`container_${type}`],
            bgColor ? {backgroundColor: bgColor} : {},
        ]}>
        <Text 
            style={[
                styles.text, 
                styles[`text_${type}`],
                text ? {color: txtColor} : {},
            ]}>
            {text}
        </Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        padding: 15,
        marginVertical: 5,
        alignItems: 'center',
        borderRadius: 10,
    },
    container_primary: {
        backgroundColor: '#ffd700',
    },
    container_tertiary: {

    },
    text: {
        fontWeight: 'bold',
        color: 'black'
    },
    text_tertiary: {
        color: 'gray'
    },
})