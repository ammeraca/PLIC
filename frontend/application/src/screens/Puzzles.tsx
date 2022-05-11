import React from "react";
import {View, Button, Alert} from "react-native";
import {createTwoButtonAlert} from "../components/alerts";
import {container} from "../styles/bases";

export function PuzzleScreen() {
    return (
        <View style={container.simple_center_flex1}>
            <Button
                onPress={() =>
                    createTwoButtonAlert(
                        "Title",
                        "Message of the riddle",
                        "button",
                    )
                }
                title={"Riddle Generator"}
                color={"#46a233"}
            />
        </View>
    );
}
