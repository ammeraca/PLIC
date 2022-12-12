import React, {useEffect, useState} from "react";
import {SafeAreaView} from "react-native-safe-area-context";
import {
    View,
    KeyboardAvoidingView,
    TextInput,
    StyleSheet,
    Text,
    Platform,
    TouchableWithoutFeedback,
    Keyboard,
} from "react-native";
import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome";
import {faCircleUser} from "@fortawesome/free-solid-svg-icons";
import {SelectList} from "react-native-dropdown-select-list";
import {container} from "../styles/bases";
import {texts} from "../styles/texts";
import {userFriendsId} from "./NewGroup";

const data = [
    {key: "1", value: "Histoire"},
    {key: "2", value: "Cinéma"},
    {key: "3", value: "Géographie"},
    {key: "4", value: "Monuments Français"},
];

export var groupInfo = {
    name: "",
    parcourdName: "",
};

export function NewGroupInfoScreen() {
    const [selected, setSelected] = useState("");
    groupInfo.parcourdName = selected;

    return (
        <SafeAreaView style={container.main}>
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                style={container.main}>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View>
                        <View style={styles.head}>
                            <FontAwesomeIcon
                                icon={faCircleUser}
                                size={60}
                                color="#D9D9D9"
                            />
                            <TextInput
                                placeholder="Nom du groupe"
                                placeholderTextColor="#666666"
                                autoCorrect={false}
                                style={[texts.simple_text, styles.textInput]}
                                onChangeText={text =>
                                    (groupInfo.name = text)
                                }></TextInput>
                        </View>
                        <View style={styles.dropdown}>
                            <SelectList
                                setSelected={val => {
                                    setSelected(val);
                                }}
                                data={data}
                                save="value"
                                fontFamily="Montserrat-Medium"
                            />
                        </View>
                        <View style={{padding: 15}}>
                            <Text style={styles.textMember}>
                                Membres : {userFriendsId.length}
                            </Text>
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
    },
    head: {
        padding: 10,
        display: "flex",
        flexDirection: "row",
        width: "100%",
    },
    textInput: {
        height: 50,
        width: 250,
        fontSize: 18,
        borderColor: "#dddddd",
        borderBottomWidth: 1,
        textAlignVertical: "top",
        marginLeft: 10,
    },
    dropdown: {
        padding: 15,
    },
    textMember: {
        fontFamily: "Montserrat-Medium",
        color: "#333333",
        fontSize: 18,
    },
});
