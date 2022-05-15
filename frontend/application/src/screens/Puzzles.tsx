import React, {useState} from "react";
import {View, Button, Alert, Text} from "react-native";
import {createTwoButtonAlert} from "../components/alerts";
import {getRiddle} from "../components/back";
import {container} from "../styles/bases";

export function PuzzleScreen() {
    const [riddle, setRiddle] = useState("");

    getRiddle(setRiddle);
    return (
        <View style={container.simple_center_flex1}>
            <View style={container.simple_center_flex2}>
                <Text>{riddle}</Text>
            </View>
            <View style={container.simple_center_flex1}>
                <Button
                    onPress={() =>
                        createTwoButtonAlert("Title", riddle, "button")
                    }
                    title={"Riddle Generator"}
                    color={"#46a233"}
                />
            </View>
        </View>
    );
}
