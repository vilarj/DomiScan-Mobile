import React, { useState, useEffect } from "react";
import Body from "./Components/Body";
import Styles from './Styles/Styles'

import { View, Text, Pressable, Alert, Image } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from '@react-navigation/native';
import { Camera } from "expo-camera";
import { Avatar, IconButton } from 'react-native-paper'

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
      const photo = await camera.takePictureAsync({quality: 0.1});
      let uri = photo.uri;

      setImage(photo.uri);

      const formData = new FormData();

      formData.append('file', { 
        uri, 
        name: 'photo.${fileType}', 
        type: 'image/${fileType}'
      });
      
      fetch("https://domiscan-server-app.herokuapp.com/uploader", {
        method:"POST",
        body: formData,
        headers: {
          "content-type": "multipart/form-data"
        }

      })
      .then(response => { 
        return response.text()
      })
      .then(data => Alert.alert(data))
      .catch(error => Alert.alert("Error"));

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
        >
          <View style={Styles.cam_buttons1}>
            <IconButton
              icon="camera-flip-outline"
              size={40}
              color={"yellow"}
              onPress={() => {
                setType(
                  type === Camera.Constants.Type.back
                    ? Camera.Constants.Type.front
                    : Camera.Constants.Type.back
                );
              }}
            />
          </View>

          <View style={Styles.cam_buttons2}>
            <IconButton
              icon="camera"
              size={80}
              color={"yellow"}
              style={{ backgroundColor: "black" }}
              onPress={() => takePicture()}
            />
          </View>

        </Camera>

        {image && <Image source={{ uri: image }} style={{ flex: 1 }} />}
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
          options={{
            title: 'DomiScan',
            headerStyle: {
              backgroundColor: "#eee"
            },
            headerTintColor: "black",
            headerTitleStyle: {
              fontSize: 30,
            },
          }}
        />

        <Stack.Screen
          name="Cam"
          component={Cam}
          options={{
            title: 'Scan Dominoes',
            headerStyle: {
              backgroundColor: "#000"
            },
            headerTintColor: "yellow",
            headerTitleStyle: {
              fontSize: 20,
            },
          }}
        />

      </Stack.Navigator>

    </NavigationContainer>
  );
};

export default App;
