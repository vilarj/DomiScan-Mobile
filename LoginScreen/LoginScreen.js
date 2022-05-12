import { View, ScrollView, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import IconHeader from './Components/IconHeader'
import CustomInput from './Components/CustomInput'
import CustomButton from './Components/CustomButton'
import Socials from './Components/Socials'


const SignInPressed = () => {
  console.warn('login...')
}

const ForgotOnPressed = () => {
  console.warn('Forgot Password...')
}

const CreateAccount = () => {
  console.warn('Create Account...')
}

export default function LoadingScreen() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  
  return (
    <ScrollView showsVerticalScrollIndicator='false'>
      <View>
        <IconHeader />
        
        <CustomInput 
          placeholder={'username'}
          value={username}
          setValue={setUsername}
        />
        
        <CustomInput 
          placeholder={'Password'}
          value={password}
          setValue={setPassword}
          secureTextEntry={true}
        />

        <CustomButton 
          text='Sign In'
          onPress={SignInPressed}
        />

        <CustomButton
          text='Forgot Password?'
          onPress={ForgotOnPressed}
          type={'tertiary'}
        />

        <Socials />

        <CustomButton 
          text="Don't have an account?"
          onPress={CreateAccount}
          type={'tertiary'}
        />
      </View>
    </ScrollView>
  )
}