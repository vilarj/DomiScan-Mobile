import React from 'react';
import { StyleSheet, View } from 'react-native';

export default class App extends React.Component {

  render () {
    return (
      <View style={styles.container}> 
        <p> Hello </p>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})