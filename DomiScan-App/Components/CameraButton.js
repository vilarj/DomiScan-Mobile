import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Camera2 from './Camera2'
import Styles from '../Styles/Styles'

function Camera() {
    return (
        <View>
            <Camera2 />
        </View>
    )
}

export default function CameraButton() {
    const Touchable = Platform.select({ ios: TouchableOpacity, android: TouchableOpacity });

    return (
        <View style={{ alignItems: "center" }}>
            <Touchable onPress={Camera} style={Styles.camera_button}>
                <Text style={Styles.camera_text}>Scan Dominoes</Text>
            </Touchable>
        </View>
    )
}