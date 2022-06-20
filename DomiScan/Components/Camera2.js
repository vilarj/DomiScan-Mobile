import { View, Text, Button } from "react-native";
import React, { useState, useEffect } from "react";
import Styles from "../Styles/Styles";
import { Camera } from "expo-camera";

export default function Camera2() {
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
