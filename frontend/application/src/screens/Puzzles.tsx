import React, {useState} from "react";
import {View, Button, Alert, Text} from "react-native";
import {createTwoButtonAlert} from "../components/alerts";
import {getRiddle} from "../components/back";
import {container} from "../styles/bases";
import {titles} from "../styles/texts";

export var riddleIdentifier: string = "1";

export function PuzzleScreen() {
    const [riddle, setRiddle] = useState("");
    getRiddle(setRiddle);
    return (
        <View style={container.simple_center_flex1}>
            <View style={container.simple_center_flex2}>
                <Text style={titles.simple_title}>{riddle}</Text>
            </View>
            <View style={container.simple_center_flex1}>
                <Button
                    onPress={() => {
                        riddleIdentifier = "2";
                        getRiddle(setRiddle);
                    }}
                    title={"Vérifier"}
                    color={"#46a233"}
                />
            </View>
        </View>
    );
}
