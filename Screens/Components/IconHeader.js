import { SafeAreaView, Image, StyleSheet, useWindowDimensions } from 'react-native'
import React from 'react'
import Logo from '../../assets/Logo.png'

export function IconHeader() {
  const {height} = useWindowDimensions()
  return (
      <SafeAreaView style={styles.main}>
        <Image source={Logo} style={[styles.logo, {height: height * 0.3}]}/>
      </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  main: {
    alignItems: 'center',
    padding: 20,
  },
  logo: {
    width: '50%',
    maxWidth: 300,
    maxHeight: 200,
  },
})
export default IconHeader