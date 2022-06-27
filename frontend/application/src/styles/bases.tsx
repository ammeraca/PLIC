import {Dimensions, StyleSheet} from "react-native";

export const container = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: "white",
    },
    simple_flex1: {
        flex: 1,
    },
    simple_flex4: {
        flex: 4,
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
    map: {
        flex: 4,
        marginHorizontal: 20,
        justifyContent: "center",
        alignItems: "center",
    },
    vertical_container: {
        flexDirection: "row",
    },
    shadows: {
        marginHorizontal: 16,
        marginBottom: 24,
        paddingHorizontal: 16,
        backgroundColor: "white",
        borderRadius: 4,
        padding: 10,
        borderColor: "#333333",
        shadowColor: "rgba(0,0,0,0.5)",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowRadius: 5,
        shadowOpacity: 1.0,
        elevation: 4,
    },
    button: {
        alignItems: "center",
        padding: 10,
    },
    row: {
        flexDirection: "row",
        marginBottom: 5,
    },
    infoBoxWrapper: {
        borderBottomColor: "#dddddd",
        borderBottomWidth: 1,
        borderTopColor: "#dddddd",
        borderTopWidth: 1,
        flexDirection: "row",
        height: 60,
    },
    infoBox: {
        width: "50%",
        alignItems: "center",
        justifyContent: "center",
    },
    accountMenuItem: {
        flexDirection: "row",
        paddingVertical: 15,
        paddingHorizontal: 30,
    },
    account_touchable: {
        borderBottomColor: "#dddddd",
        borderBottomWidth: 1,
        borderTopColor: "#dddddd",
        borderTopWidth: 1,
    },
    customize_view_border: {
        borderBottomColor: "#dddddd",
        borderBottomWidth: 1,
        borderTopColor: "#dddddd",
        borderTopWidth: 1,
        borderLeftColor: "#dddddd",
        borderLeftWidth: 1,
        borderRightColor: "#dddddd",
        borderRightWidth: 1,
        borderRadius: 5,
    },
});

export const buttons = StyleSheet.create({});
