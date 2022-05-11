import {Alert} from "react-native";

export const createTwoButtonAlert = (
    title: string,
    message: string,
    button: string,
) =>
    Alert.alert(title, message, [
        {
            text: button,
            onPress: () => console.log("Button right Pressed"),
            style: "cancel",
        },
        {text: button, onPress: () => console.log("Button left Pressed")},
    ]);
