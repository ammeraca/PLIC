import {StyleSheet} from "react-native";

export const container = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: "white",
    },
    simple_center_flex1: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    simple_center_flex2: {
        flex: 2,
        justifyContent: "center",
        alignItems: "center",
    },
    simple_center_flex4: {
        flex: 4,
        justifyContent: "center",
        alignItems: "center",
    },
    shadows: {
        marginHorizontal: 16,
        marginBottom: 24,
        paddingHorizontal: 16,
        backgroundColor: "white",
        borderRadius: 4,
        padding: 10,
        borderColor: "#333333",
        shadowColor: "rgba(0,0,0,0.12)",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowRadius: 5,
        shadowOpacity: 1.0,
        elevation: 4,
    },
});

export const buttons = StyleSheet.create({});
