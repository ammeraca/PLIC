import React, {useState} from "react";
import {StyleSheet, View, FlatList, Alert, Keyboard, Text} from "react-native";

export function SettingsScreen() {
    return (
        <View style={styles.container}>
            <Text>Settings</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});
