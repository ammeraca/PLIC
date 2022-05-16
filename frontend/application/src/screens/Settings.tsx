import React from "react";
import {View, Text} from "react-native";
import {RNCamera} from "react-native-camera";
import {container} from "../styles/bases";

export function SettingsScreen() {
    return (
        <View style={container.simple_flex1}>
            <RNCamera
                captureAudio={false}
                style={{flex: 1}}
                type={RNCamera.Constants.Type.back}
                androidCameraPermissionOptions={{
                    title: "Permission to use camera",
                    message: "We need your permission to use your camera",
                    buttonPositive: "Ok",
                    buttonNegative: "Cancel",
                }}
            />
        </View>
    );
}
