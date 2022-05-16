import {StyleSheet} from "react-native";

export const titles = StyleSheet.create({
    app_title: {
        fontFamily: "Montserrat-Bold",
        fontSize: 60,
    },
    screen_title: {
        fontFamily: "Montserrat-Bold",
        fontSize: 40,
        borderBottomWidth: 5,
        paddingBottom: 30,
    },
    simple_title: {
        fontFamily: "Montserrat-Bold",
        color: "black",
        fontSize: 16,
    },
});

export const texts = StyleSheet.create({
    simple_text: {
        fontFamily: "Montserrat-Medium",
        color: "#333333",
    },
    riddle_text: {
        fontFamily: "Montserrat-Medium",
        color: "#333333",
        fontSize: 35,
        marginHorizontal: 10,
    },
    button_text: {
        fontFamily: "Montserrat-Medium",
        color: "white",
        fontSize: 20,
    },
});
