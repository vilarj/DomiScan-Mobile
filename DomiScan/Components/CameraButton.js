import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'

export default function CameraButton() {
    const Touchable = Platform.select({ ios: TouchableOpacity, android: TouchableOpacity });

    return (
        <View style={{ alignItems: "center" }}>
            <Touchable
                onPress={() => {
                    console.log("Button Pressed")
                }}
                style={styles.button}
            >
                <Text style={styles.text}>Scan Dominoes</Text>
            </Touchable>
        </View>
    )
}

const styles = StyleSheet.create({
    button: {
        alignItems: "center",
        backgroundColor: "#eee",
        width: 145,
        height: 145,
        marginTop: 5,
        padding: 5,
        borderRadius: 100,
        justifyContent: "center",
    },
    text: {
        fontSize: 20,
        color: "black",
        fontFamily: "Cochin",
        justifyContent: 'center',
        alignItems: 'center',
    }
});