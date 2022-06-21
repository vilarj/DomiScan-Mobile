import { View, Text } from 'react-native'
import React, { useState, useEffect } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function Backend() {
    const [data, setData] = useState([])
    const Stack = createNativeStackNavigator();

    useEffect(() => {
        fetch("http://127.0.0.1:5000")
            .then(res => res.json())
            .then(
                data => {
                    setData(data)
                    console.log(data)
                }
            )
    }, [])

    return (
        <View>
            <Text>
                {
                    (typeof data.Photo === 'undefined')
                        ? (<Text>  </Text>)
                        : (data.Photo.map((Photo, i) =>
                            <Text key={i}>{Photo} </Text>
                        ))
                }
            </Text>
        </View>
    )
}