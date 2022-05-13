import { View, TextInput, StyleSheet } from 'react-native'
import React from 'react'

const CustomInput = ({ value, setValue, placeholder, secureTextEntry }) => {
  return (

    <View style={styles.container}>
        <TextInput
            value={value}
            onChangeText={setValue}
            placeholder={placeholder}
            secureTextEntry={secureTextEntry}
            style={styles.input}
        />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    width: '100%',
    borderColor: '#e8e8e8',
    borderWidth: 2,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginVertical: 5
  }, 
})

export default CustomInput