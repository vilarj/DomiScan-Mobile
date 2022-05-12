import { SafeAreaView, Image } from 'react-native'
import React, { Component } from 'react'

export class IconHeader extends Component {
  render() {
    return (
        <SafeAreaView>
          <Image
            source={require('/Users/vj/Desktop/Domino-ReactNative/assets/Logo.png')}
          />
        </SafeAreaView>
    )
  }
}

export default IconHeader