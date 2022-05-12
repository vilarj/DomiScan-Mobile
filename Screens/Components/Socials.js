import { View } from 'react-native'
import React from 'react'
import CustomButton from './CustomButton'


const Facebook = () => {
    console.warn('Facebook')
}

const Twitter = () => {
    console.warn('Twitter')
}

const Google = () => {
    console.warn('Google')
}

const Apple = () => {
    console.warn('Apple')
}

export default function Socials() {
  return (
    <View>
        <CustomButton 
            text='Sign In with Facebook'
            onPress={Facebook}
            bgColor='#4267B2'
            txtColor='#F5F8FA'
        />

        <CustomButton 
            text='Sign In with Twitter'
            onPress={Twitter}
            bgColor='#1DA1F2'
            txtColor='#F5F8FA'
        />

        <CustomButton 
            text='Sign In with Google'
            onPress={Google}
            bgColor="#FAE9EA"
            txtColor='#DD4D44'
        />
         
        <CustomButton 
            text='Sign In with Apple'
            onPress={Apple}
            bgColor='#e3e3e3'
            txtColor='#363636'
        />

    </View>
  )
}