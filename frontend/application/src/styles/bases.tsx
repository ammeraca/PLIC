import {Dimensions, StyleSheet} from "react-native";
const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;
export const container = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: "white",
    },
    main_login_screen: {
        flex: 1,
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "center",
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
    simple_shadows: {
        padding: 10,
        borderColor: "#333333",
        shadowColor: "rgba(0,0,0,0.5)",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowRadius: 5,
        shadowOpacity: 1.0,
        elevation: 10,
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
    editAccountPanel: {
        flexDirection: "row",
        marginTop: 10,
        marginBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor: "#f2f2f2",
        paddingBottom: 5,
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
    /* Puzzles Styles */
    enigme_view: {
        flex: 0.85,
        justifyContent: "center",
    },
    enigme_title_view: {
        flex: 0.25,
        justifyContent: "center",
        alignItems: "center",
    },
    /* EnigmePage Styles */
    enigme_page_view: {
        flex: 1,
        width: width - 50,
        height: "auto",
        backgroundColor: "white",
        borderRadius: 15,
        borderColor: "#333333",
        shadowColor: "rgba(0,0,0,0.5)",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowRadius: 5,
        shadowOpacity: 1.0,
        elevation: 10,
    },

    /* SuccessPage */
    success_page_view: {
        width: width - 50,
        height: (height / 3) * 2,
        backgroundColor: "white",
        borderRadius: 15,
        padding: 20,
        borderColor: "#333333",
        shadowColor: "rgba(0,0,0,0.5)",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowRadius: 5,
        shadowOpacity: 1.0,
        elevation: 10,
    },
    /*GroupModal */
    modalView: {
        margin: 20,
        width: width - 80,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
});

export const buttons = StyleSheet.create({});
