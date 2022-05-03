import React from "react";
import {StyleSheet, View, Text, SafeAreaView} from "react-native";
import {container} from "../styles/bases";
import {green} from "../styles/colors";
import {titles} from "../styles/texts";

export function MainScreen() {
    return (
        <SafeAreaView style={container.main}>
            <View style={container.simple_center_flex2}>
                <Text style={[titles.app_title, green.principal]}>BalApp</Text>
            </View>
            <View style={[container.simple_center_flex4, container.shadows]}>
                <Text style={styles.title}>Map</Text>
                <Text style={styles.text}>Here</Text>
            </View>
            <View style={[container.simple_center_flex1, container.shadows]}>
                <Text style={styles.title}>Bouton</Text>
                <Text style={styles.text}>Hello</Text>
            </View>
            <View style={[container.simple_center_flex1, container.shadows]}>
                <Text style={styles.title}>Bouton</Text>
                <Text style={styles.text}>Hello</Text>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    title: {
        fontWeight: "bold",
        color: "#010035",
        fontSize: 16,
    },
    text: {
        color: "#333333",
    },
});
