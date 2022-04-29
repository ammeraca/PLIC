import React, {useState} from "react";
import {StyleSheet, View, FlatList, Alert, Keyboard, Text} from "react-native";

export function PuzzleScreen() {
    return (
        <View style={styles.container}>
            <Text>Puzzles</Text>
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
