import { StyleSheet } from 'react-native'

const DarkMode = StyleSheet.create({
    // Header Starts
    header: {
        width: "100%",
        height: "18%",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#eee",
    },
    header_dark: {
        width: "100%",
        height: "18%",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#000",
    },
    title: {
        fontSize: 45,
        fontFamily: "Cochin",
    },
    icon: {
        width: 26,
        height: 26,
    },
    // Header Ends

    // Body Starts
    container: {
        width: "100%",
        height: "60%",
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
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
    },
    fixedRatio: {
        flex: 1,
        aspectRatio: 0.5,
    },
    // Camera Ends
})

export default DarkMode