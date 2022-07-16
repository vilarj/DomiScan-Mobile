import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Styles from '../Styles/Styles'

export default CameraButton = (navigation) => {
    const Touchable = Platform.select({ ios: TouchableOpacity, android: TouchableOpacity });

    return (
        <View style={{ alignItems: "center" }}>
            <Touchable onPress={() => navigation.navigate('Cam')} style={Styles.camera_button}>
                <Text>Scan Dominoes</Text>
            </Touchable>
        </View>
    )
}