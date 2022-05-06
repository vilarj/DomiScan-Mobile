import React, { useState } from 'react';
import { StyleSheet, View, TextInput } from 'react-native';

export default class Body extends React.Component {
    render() {
        return (
            <View style={styles.container}>

                {/* Players */}
                <View style={styles.players}>
                    <View style={styles.inner}>
                        <TextInput 
                            placeholder='Enter Score'
                            onChangeText={(value) => updateScore(value)}
                        />
                    </View>
                </View>

                <View style={styles.players}>
                    <View style={styles.inner}>
                        <TextInput 
                            placeholder='Enter Score'
                            onChangeText={(value) => updateScore(value)}
                        />
                    </View>
                </View>

                {/* Body */}
                <View style={styles.box}>
                    <View style={styles.inner}>
                        <TextInput 
                            placeholder='Enter Score'
                            onChangeText={(value) => updateScore(value)}
                        />
                    </View>
                </View>

                <View style={styles.box}>
                    <View style={styles.inner}>
                        <TextInput 
                            placeholder='Enter Score'
                            onChangeText={(value) => updateScore(value)}
                        />
                    </View>
                </View>

                {/* Total */}
                <View style={styles.total_score}>
                    <View style={styles.inner}>
                        <TextInput 
                            placeholder='Enter Score'
                            onChangeText={(value) => updateScore(value)}
                        />
                    </View>
                </View>

                <View style={styles.total_score}>
                    <View style={styles.inner}>
                        <TextInput 
                            placeholder='Enter Score'
                            onChangeText={(value) => updateScore(value)}
                        />
                    </View>
                </View>

            </View>
        );
    }
}

function updateScore(value) {
    const total = total + value

    return total
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '40%',
        padding: 5, 
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    players: {
        width: '50%',
        height: '20%',
        padding: 5
    },
    total_score: {
        width: '50%',
        height: '20%',
        padding: 5
    },
    box: {
        width: '50%',
        height: '60%',
        padding: 5
    },
    inner: {
        flex: 1,
        backgroundColor: '#eee',
        alignItems: 'center',
        justifyContent: 'center'
    },
});