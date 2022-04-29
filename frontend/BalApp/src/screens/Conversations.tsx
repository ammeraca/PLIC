import React, {useState} from "react";
import {StyleSheet, View, FlatList, Alert, Keyboard, Text} from "react-native";
import {container} from "../styles/bases";

export function ConversationScreen() {
    return (
        <View style={container.simple_centered}>
            <Text>Conversations</Text>
        </View>
    );
}
