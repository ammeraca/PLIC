import React from "react";
import {View, Text, Button} from "react-native";
import {container} from "../styles/bases";

export function PuzzleScreen() {
    return (
        <View style={container.simple_center_flex1}>
            <Button onPress={GetPuzzles()}>Générer une énigme</Button>
        </View>
    );
}
