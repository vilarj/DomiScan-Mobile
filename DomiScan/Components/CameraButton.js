import { Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'

export default function CameraButton() {
    return (
        <TouchableOpacity style={styles.centered_button}>
            <TouchableOpacity
                onPress={() => {
                    navigation.navigate('Dominoes', { screens })
                }}
                style={styles.button}
            >
                <Text style={styles.text}>Scan Dominoes</Text>
            </TouchableOpacity>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    centered_button: {
        alignItems: "center",
    },
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