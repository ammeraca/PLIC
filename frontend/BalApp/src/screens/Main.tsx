import React from "react";
import {StyleSheet, View, Text, SafeAreaView} from "react-native";

export function MainScreen() {
    return (
        <SafeAreaView style={styles.list}>
            <View style={styles.headerview}>
                <Text style={styles.header}>BalApp</Text>
            </View>
            <View style={styles.map}>
                <Text style={styles.title}>Map</Text>
                <Text style={styles.text}>Here</Text>
            </View>
            <View style={styles.element}>
                <Text style={styles.title}>Bouton</Text>
                <Text style={styles.text}>Hello</Text>
            </View>
            <View style={styles.element}>
                <Text style={styles.title}>Bouton</Text>
                <Text style={styles.text}>Hello</Text>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    list: {
        flex: 1,
        backgroundColor: "white",
    },
    headerview: {
        flex: 2,
        justifyContent: "center",
        alignItems: "center",
    },
    header: {
        fontWeight: "bold",
        color: "#46a233",
        fontSize: 60,
    },
    map: {
        flex: 4,
        marginHorizontal: 16,
        marginBottom: 24,
        justifyContent: "center",
        paddingHorizontal: 16,
        backgroundColor: "white",
        borderRadius: 4,
        padding: 10,
        borderColor: "#333333",
        shadowColor: "rgba(0,0,0,0.12)",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowRadius: 5,
        shadowOpacity: 1.0,
        elevation: 4,
        alignItems: "center",
    },
    element: {
        flex: 1,
        marginHorizontal: 16,
        marginBottom: 24,
        justifyContent: "center",
        paddingHorizontal: 16,
        backgroundColor: "white",
        borderRadius: 4,
        padding: 10,
        borderColor: "#333333",
        shadowColor: "rgba(0,0,0,0.12)",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowRadius: 5,
        shadowOpacity: 1.0,
        elevation: 4,
        alignItems: "center",
    },
    title: {
        fontWeight: "bold",
        color: "#010035",
        fontSize: 16,
    },
    text: {
        color: "#333333",
    },
});
