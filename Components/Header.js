import React from 'react';
import { StyleSheet, SafeAreaView, Text } from 'react-native';

export default class Header extends React.Component {
    render() {
        return (
            <SafeAreaView style={styles.header}>
                <Text style={styles.title}>DomiScan</Text>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: '20%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#eee',
    },
    title: {
        fontSize: 30,
    },
})