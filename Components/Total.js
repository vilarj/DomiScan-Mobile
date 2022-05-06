import React from 'react';
import { StyleSheet, View, TextInput } from 'react-native';

export default class Total extends React.Component {
    render() {
        return (
            <View style={styles.container}>

                <View style={styles.box}>
                    <View style={styles.inner}>
                        <TextInput placeholder='0'/>
                    </View>
                </View>

                <View style={styles.box}>
                    <View style={styles.inner}>
                        <TextInput placeholder='0'/>
                    </View>
                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '10%',
        padding: 1, 
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    box: {
        width: '50%',
        height: '50%',
        padding: 5
    },
    inner: {
        flex: 1,
        backgroundColor: '#eee',
        alignItems: 'center',
        justifyContent: 'center'
    },
});