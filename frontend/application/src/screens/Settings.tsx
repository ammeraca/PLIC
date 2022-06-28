import React from "react";
import {View} from "react-native";
import {RNCamera} from "react-native-camera";
import {container} from "../styles/bases";

import {LogBox} from "react-native";
export function SettingsScreen() {
    LogBox.ignoreLogs(["Warning: ..."]); // Ignore log notification by message
    LogBox.ignoreAllLogs(); //Ignore all log notifications
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
