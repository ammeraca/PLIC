import React from "react";
import {View, StyleSheet, Image, Text, Dimensions} from "react-native";
import {texts, titles} from "../styles/texts";

export default function LoginLogoAndText() {
    return (
        <View style={styles.container}>
            <View style={styles.logo}>
                <Image
                    source={require("../../assets/images/logo.png")}
                    style={{
                        width: 110,
                        height: 80,
                    }}
                />
                <View style={{marginLeft: 20, justifyContent: "center"}}>
                    <Text style={titles.login_title}>BalApp</Text>
                </View>
            </View>
            <View style={styles.text}>
                <Text style={texts.login_text}>
                    Bienvenue dans BalApp la meilleure application pour visiter
                    Paris !!
                </Text>
            </View>
        </View>
    );
}

const marginTop_size = Dimensions.get("window").height / 3;
const styles = StyleSheet.create({
    container: {
        marginTop: marginTop_size,
    },
    logo: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
    },
    text: {
        marginTop: 50,
        padding: 20,
    },
});
