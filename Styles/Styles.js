import { StyleSheet } from "react-native";

const DarkMode = StyleSheet.create({
  // Body Starts
  body: {
    backgroundColor: "#fff",
  },
  // body_dark: {
  //     backgroundColor: "#000"
  // },
  container: {
    height: "72%",
    padding: 5,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  players: {
    width: "50%",
    height: "20%",
    padding: 5,
  },
  total_score: {
    width: "50%",
    height: "20%",
    padding: 5,
  },
  box: {
    width: "50%",
    height: "60%",
    padding: 5,
  },
  inner: {
    flex: 1,
    backgroundColor: "#eee",
    alignItems: "center",
    justifyContent: "center",
  },
  inner_dark: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
  // Body Ends

  // Camera Begins
  cameraContainer: {
    flexDirection: "row",
    height: "100%",
    width: "100%",
  },
  fixedRatio: {
    flex: 1,
    aspectRatio: 0.5,
  },
  camera_button: {
    alignItems: "center",
    backgroundColor: "#eee",
    width: 145,
    height: 145,
    marginTop: 5,
    padding: 5,
    borderRadius: 100,
    justifyContent: "center",
  },
  camera_button_dark: {
    alignItems: "center",
    backgroundColor: "#000",
    width: 145,
    height: 145,
    marginTop: 5,
    padding: 5,
    borderRadius: 100,
    justifyContent: "center",
  },
  cam_buttons1: {
    flex: 0.1,
    flexDirection: "column",
    position: "absolute",
    top: 1,
    left: 10,
    margin: 10,
  },
  cam_buttons2: {
    flex: 0.1,
    flexDirection: "column",
    position: "absolute",
    bottom: 50,
    right: 10,
    margin: 10,
  },
  // Camera Ends
});

export default DarkMode;
