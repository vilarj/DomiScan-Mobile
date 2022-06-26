import React, { useState, useEffect } from "react";
import Body from "./Components/Body";
import Styles from './Styles/Styles'

import { View, Text, Pressable, Button } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from '@react-navigation/native';
import { Camera } from "expo-camera";

function Home({ navigation }) {
  return (
    <View style={Styles.body}>

      <Body />

      <View style={{ alignItems: "center" }}>

        <Pressable
          onPress={() => navigation.navigate('Cam')}
          style={Styles.camera_button}>
          <Text>Scan Dominoes</Text>
        </Pressable>

      </View>

    </View >
  )
}

function Cam() {
  const [hasCameraPermission, setHasCameraPermission] = useState(null);
  const [camera, setCamera] = useState(null);
  const [image, setImage] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasCameraPermission(status === "granted");
    })();
  }, []);

  const takePicture = async () => {
    if (camera) {
      const data = await camera.takePictureAsync(null);
      setImage(data.uri);
    }
  };

  if (hasCameraPermission === false) {
    return <Text>No Access to Camera. Need to accept the permissions</Text>;
  }

  return (
    <View style={{ flex: 1 }}>
      <View style={Styles.cameraContainer}>
        <Camera
          ref={(ref) => setCamera(ref)}
          style={Styles.fixedRatio}
          type={type}
          ratio={"1:1"}
        />

        <Button
          title="Flip"
          color="black"
          onPress={() => {
            setType(
              type === Camera.Constants.Type.back
                ? Camera.Constants.Type.front
                : Camera.Constants.Type.back
            );
          }}
        />

        <Button
          title="Scan Dominoes"
          color="black"
          onPress={() => takePicture()}
        />
        {/* {image && <Image source={{ uri: image }} style={{ flex: 1 }} />} */}
      </View>
    </View>
  );
}

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>

      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: 'DomiScan' }}
        />

        <Stack.Screen
          name="Cam"
          component={Cam}
          options={{ title: 'Scan Dominoes' }}
        />

      </Stack.Navigator>

    </NavigationContainer>
  );
};

export default App;
