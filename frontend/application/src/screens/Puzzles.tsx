import React, {useState} from "react";
import {View, Button, Alert, Text} from "react-native";
import {TouchableOpacity} from "react-native";
import {createTwoButtonAlert} from "../components/alerts";
import {getRiddle} from "../components/back";
import {container} from "../styles/bases";
import {green, orange} from "../styles/colors";
import {texts, titles} from "../styles/texts";

export var riddleIdentifier: string = "1";

export function PuzzleScreen() {
    const [riddle, setRiddle] = useState("");
    getRiddle(setRiddle);
    return (
        <View style={container.simple_center_flex1}>
            <View style={container.simple_center_flex1}>
                <Text style={[titles.screen_title, orange.dark]}> ÉNIGME </Text>
            </View>
            <View style={container.simple_center_flex2}>
                <Text style={texts.riddle_text}>{riddle}</Text>
            </View>
            <View style={container.simple_center_flex1}>
                <TouchableOpacity
                    onPress={() => {
                        riddleIdentifier = "2";
                        getRiddle(setRiddle);
                    }}
                    style={[green.background_principal, container.button]}>
                    <View>
                        <Text style={texts.button_text}>Vérifier</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
}
