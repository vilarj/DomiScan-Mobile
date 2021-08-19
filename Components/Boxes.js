import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default class Boxes extends React.Component {
  render () {
    return (
      <View style={styles.container}> 

        <View style={StyleSheet.box}>
          <View> style={styles.inner}
            <Text>Box 1</Text>
          </View>
        </View>

        <View style={StyleSheet.box}>
          <View> style={styles.inner}
            <Text>Box 2</Text>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '85%',
    padding: 5,
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: '#eee',
  },

  box: {
    width: '50%',
    height: '50%',
    padding: 5,
  },

  inner: {
    flex: 1,
    backgroundColor: '#eee',
    alignItems: 'center',
    justifyContent: 'center'
  }
})