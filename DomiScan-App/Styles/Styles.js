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
    },
    icon: {
        width: 26,
        height: 26,
    },
    // Header Ends

    // Body Starts
    body_light: {
        backgroundColor: "#fff"
    },
    body_dark: {
        backgroundColor: "#000"
    },
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
    add25_dark: {
        color: "#000"
    },
    add50_dark: {
        color: "000"
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
    camera_text: {
        fontSize: 20,
        color: "black",
        fontFamily: "Cochin",
        justifyContent: 'center',
        alignItems: 'center',
    }
    // Camera Ends
})

export default DarkMode