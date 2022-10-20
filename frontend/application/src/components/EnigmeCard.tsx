import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome";
import {
    faCircleCheck,
    faSpinner,
    faLock,
} from "@fortawesome/free-solid-svg-icons";
import {StyleSheet, View, Text, TouchableOpacity} from "react-native";
import {green, orange} from "../styles/colors";
import {texts} from "../styles/texts";

export default function EnigmeCard(props) {
    let iconElm;
    if (props.status === "Finished") {
        iconElm = (
            <FontAwesomeIcon
                icon={faCircleCheck}
                size={60}
                color={
                    green.background_principal.backgroundColor
                }></FontAwesomeIcon>
        );
    } else if (props.status === "InProgress") {
        iconElm = (
            <FontAwesomeIcon
                icon={faSpinner}
                size={60}
                color={
                    orange.background_principal.backgroundColor
                }></FontAwesomeIcon>
        );
    } else {
        iconElm = (
            <FontAwesomeIcon
                icon={faLock}
                size={60}
                color="#8E8E92"></FontAwesomeIcon>
        );
    }
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.touchableContainer}>
                {iconElm}
                <Text style={[texts.riddle_name_text]}>{props.enigmeName}</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: 150,
        height: 170,
        backgroundColor: "white",
        borderRadius: 10,
        shadowColor: "rgba(0,0,0,0.7)",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowRadius: 5,
        shadowOpacity: 1.0,
        elevation: 10,
    },
    touchableContainer: {
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },
});
