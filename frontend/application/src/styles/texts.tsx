import {StyleSheet} from "react-native";
import {green, orange} from "./colors";

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
    user_name: {
        fontFamily: "Montserrat-Bold",
        color: "black",
        fontSize: 20,
    },
    login_title: {
        fontFamily: "Montserrat-Bold",
        fontSize: 50,
        color: green.background_principal.backgroundColor,
    },
    congrat_title: {
        fontFamily: "Montserrat-Bold",
        color: orange.background_principal.backgroundColor,
        fontSize: 30,
    },
});

export const texts = StyleSheet.create({
    login_text: {
        fontFamily: "Montserrat-Medium",
        color: "#333333",
        fontSize: 20,
        textAlign: "center",
    },
    not_account_text: {
        fontFamily: "Montserrat-Bold",
        color: "#333333",
        fontSize: 18,
    },
    signUp_text: {
        fontFamily: "Montserrat-Bold",
        color: orange.background_principal.backgroundColor,
        fontSize: 18,
    },
    simple_text: {
        fontFamily: "Montserrat-Medium",
        color: "#333333",
        fontSize: 14,
    },
    simple_text2: {
        fontFamily: "Montserrat-Medium",
        color: "#333333",
        fontSize: 16,
    },
    riddle_name_text: {
        fontFamily: "Montserrat-Bold",
        color: "#333333",
        fontSize: 20,
        marginTop: 30,
    },
    button_text: {
        fontFamily: "Montserrat-Bold",
        color: "white",
        fontSize: 25,
    },
    button_dark_text: {
        fontFamily: "Montserrat-Bold",
        color: "#333333",
        fontSize: 15,
    },
    caption_text: {
        fontFamily: "Montserrat-Medium",
        fontSize: 14,
        color: "gray",
    },
    termine_text: {
        fontFamily: "Montserrat-Bold",
        color: green.background_principal.backgroundColor,
        fontSize: 16,
    },
    enigme_title: {
        fontFamily: "Montserrat-Bold",
        color: orange.background_principal.backgroundColor,
        fontSize: 40,
        paddingTop: 20,
    },
    conversations_title: {
        fontFamily: "Montserrat-Bold",
        color: orange.background_principal.backgroundColor,
        fontSize: 35,
        paddingTop: 20,
    },
    /* Enigme Page */
    enigme_page_main_text: {
        fontFamily: "Montserrat-Bold",
        color: green.background_principal.backgroundColor,
        fontSize: 25,
        textAlign: "center",
    },
    enigme_text: {
        fontFamily: "Montserrat-Medium",
        color: "#333333",
        fontSize: 18,
        textAlign: "center",
    },
    /* */
});
