import React, { useState } from "react";
import Body from "./Components/Body";
import Styles from "./Styles/Styles";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { CameraView, useCameraPermissions } from "expo-camera";
import { manipulateAsync } from "expo-image-manipulator";
import { Alert, Button, StatusBar, View } from "react-native";
import { IconButton } from "react-native-paper";
import CameraButton from "./Components/CameraButton";

function Home({ route, navigation }) {
  return (
    <View style={Styles.body}>
      <Body route={route} />
      <StatusBar barStyle="dark-content" />
      <View style={Styles.camera_button_position}>
        <CameraButton navigation={navigation} />
      </View>
      <View style={Styles.screen_padding} />
    </View>
  );
}

function Cam({ navigation }) {
  const promptUser = (score) => {
    Alert.alert(
      "The Dominoes Were Scanned!",
      "Who do you want to send the scanned score to?",
      [
        {
          text: { playerOne },
          style: "destructive",
          onPress: () => {
            navigation.navigate("Home", { playerOneScore: score });
          },
        },
        {
          text: { playerTwo },
          style: "default",
          onPress: () => {
            navigation.navigate("Home", { playerTwoScore: score });
          },
        },
      ]
    );
  };

  const [camPermission, requestCamPermission] = useCameraPermissions();
  const [camFacing, setCamFacing] = useState("back");
  const [camera, setCamera] = useState(null);
  const [image, setImage] = useState(null);

  const takePicture = async () => {
    if (camera) {
      const fileType = "png";
      const photo = await camera.takePictureAsync({ quality: 0.1 });
      const mapResult = await manipulateAsync(
        photo.uri,
        [{ resize: { width: 540, height: 960 } }],
        { format: fileType }
      );

      const uri = mapResult.uri;
      setImage(uri);
      const formData = new FormData();

      formData.append("file", {
        uri,
        name: `photo.${fileType}`,
        type: `image/${fileType}`,
      });
      fetch("https://domiscan-server-app.herokuapp.com/uploader", {
        method: "POST",
        body: formData,
        headers: {
          "content-type": "multipart/form-data",
        },
      })
        .then((response) => {
          return response.text();
        })
        .then((data) => promptUser(data))
        .catch((error) => Alert.alert(error + ". Try again"));
    } else {
      console.warn("Camera is not yet ready.");
    }
  };

  if (!camPermission) {
    return <View />;
  }

  if (!camPermission.granted) {
    <Button onPress={requestCamPermission} title="Grant Camera Permission" />;
  }

  return (
    <View>
      <View style={Styles.camera_container}>
        <CameraView
          captureRef={(ref) => setCamera(ref)}
          style={Styles.fixed_ratio}
          facing={camFacing}
          ratio={"1:1"}
          autoFocus={CameraView.autoFocus}
        >
          <View style={Styles.cam_buttons1}>
            <IconButton
              icon="camera-flip-outline"
              size={40}
              color={"yellow"}
              onPress={() => {
                setCamFacing((current) =>
                  current === "back" ? "front" : "back"
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
        </CameraView>
      </View>
    </View>
  );
}

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={Styles.home_options}
        />

        <Stack.Screen
          name="Cam"
          component={Cam}
          options={Styles.camera_options}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
