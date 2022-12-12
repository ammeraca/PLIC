import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome";
import {
    faCircleCheck,
    faSpinner,
    faLock,
} from "@fortawesome/free-solid-svg-icons";
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Dimensions,
} from "react-native";
import {green, orange} from "../styles/colors";
import {texts} from "../styles/texts";

export default function EnigmeCard(props) {
    let iconElm;
    let card;
    if (props.enigme.status === "Solved") {
        iconElm = (
            <FontAwesomeIcon
                icon={faCircleCheck}
                size={60}
                color={green.background_principal.backgroundColor}
            />
        );
    } else if (props.enigme.status === "InProgress") {
        iconElm = (
            <FontAwesomeIcon
                icon={faSpinner}
                size={60}
                color={orange.background_principal.backgroundColor}
            />
        );
    } else {
        iconElm = <FontAwesomeIcon icon={faLock} size={60} color="#8E8E92" />;
    }
    if (props.enigme.status === "Blocked") {
        card = <View style={styles.filter}></View>;
    } else {
        card = <View></View>;
    }
    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.touchableContainer}
                onPress={() =>
                    props.enigme.status === "InProgress"
                        ? props.navigation.navigate("EnigmePage", {
                              title: props.enigme.name,
                              enigme_txt: props.enigme.text,
                          })
                        : props.navigation.navigate("SuccessPage", {
                              title: props.enigme.name,
                          })
                }>
                {iconElm}
                <Text style={[texts.riddle_name_text]}>
                    {props.enigme.name}
                </Text>
            </TouchableOpacity>
            {card}
        </View>
    );
}

const numColumns = 2;
const size = Dimensions.get("window").width / numColumns;
const styles = StyleSheet.create({
    container: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: size - 30,
        height: size,
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
        margin: 10,
    },
    touchableContainer: {
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },
    filter: {
        position: "absolute",
        top: 0,
        right: 0,
        left: 0,
        width: "100%",
        height: "100%",
        borderRadius: 10,
        opacity: 0.6,
        backgroundColor: "#8E8E92",
    },
});
