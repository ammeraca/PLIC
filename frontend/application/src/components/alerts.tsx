import {Alert} from "react-native";

export const createTwoButtonAlert = (
    title: string,
    message: string,
    button: string,
) =>
    Alert.alert(title, message, [
        {
            text: "Close",
            onPress: () => {},
            style: "destructive",
        },
        {text: button, onPress: () => {}},
    ]);
