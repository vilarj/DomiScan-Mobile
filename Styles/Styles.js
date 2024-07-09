import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
  // Home Options
  home_options: {
    title: "DomiScan",
    headerStyle: {
      backgroundColor: "#eee",
    },
    headerTintColor: "black",
    headerTitleStyle: {
      fontSize: 30,
    },
    headerTitleAlign: "center",
  },
  // End of Home Options

  // Screen Padding
  screen_padding: {
    padding: "15%",
  },

  // Body Starts
  body: {
    backgroundColor: "#fff",
  },
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
  player_name_input: {
    color: "blue",
    fontSize: 18,
    fontStyle: "italic",
  },
  player_actual_score: {
    color: "red",
  },
  player_total_score: {
    color: "black",
  },
  add_buttons: {
    fontWeight: "500",
    fontSize: 22,
    color: "green",
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
  // Body Ends

  // Camera Begins
  camera_container: {
    flexDirection: "row",
    height: "100%",
    width: "100%",
  },
  fixed_ratio: {
    flex: 1,
    aspectRatio: 0.5,
  },
  camera_button_position: {
    alignItems: "center",
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
  camera_options: {
    title: "",
    headerStyle: {
      backgroundColor: "#000",
    },
    headerTintColor: "yellow",
    headerTitleStyle: {
      fontSize: 20,
    },
  },

  // Camera Ends
});

export default Styles;
