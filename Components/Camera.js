import React from 'react';
import { StyleSheet, Button, View, Alert } from 'react-native';
export default class Camera extends React.Component {

    render() {
        return (
            <View>
                <Button
                    title = "Camera"
                    // color = "black"
                    onPress={() => openCamera()}
                />
            </View>
        )
    }
}

const openCamera = () => {
    Alert.alert('Open camera')
}