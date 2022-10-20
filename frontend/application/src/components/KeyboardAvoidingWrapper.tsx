import React from "react";
import {
    KeyboardAvoidingView,
    ScrollView,
    TouchableWithoutFeedback,
    Keyboard,
} from "react-native";
import {container} from "../styles/bases";

export const KeyboardAvoidingWrapper = ({children}) => {
    return (
        <KeyboardAvoidingView style={[container.main]}>
            <ScrollView>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    {children}
                </TouchableWithoutFeedback>
            </ScrollView>
        </KeyboardAvoidingView>
    );
};
