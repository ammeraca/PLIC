import React, {useLayoutEffect, useEffect, useState} from "react";
import {View, Text, TouchableOpacity, FlatList} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";
import {container} from "../styles/bases";
import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome";
import {
    faPuzzlePiece,
    faUserGroup,
    faMonument,
    faEarthEurope,
    faFilm,
} from "@fortawesome/free-solid-svg-icons";
import {green, orange} from "../styles/colors";
import {texts} from "../styles/texts";
import {getUserFriends} from "../components/back";
import {colorList} from "./Conversations";

const list = [
    {id: 1, name: "Cinéma"},
    {id: 2, name: "Histoire"},
    {id: 3, name: "Géographie"},
    {id: 4, name: "Monuments français"},
];

function extractGroupList(groups) {
    const result = [];
    for (let index = 0; index < groups.length; index++) {
        const element = groups[index];
        const idx = Math.floor(Math.random() * colorList.length);
        var group = {
            id: element.id,
            username: element.username,
            email: element.email,
            color: colorList[idx],
        };
        result.push(group);
    }
    return result;
}

export var friends: object[] = [];

export function NewDiscussionsScreen({navigation}) {
    const [userFriends, setUserFriends] = useState<object[]>([]);

    useEffect(() => {
        getUserFriends(setUserFriends);
    }, []);

    useLayoutEffect(() => {
        navigation.getParent()?.setOptions({
            tabBarStyle: {
                display: "none",
            },
        });
        return () =>
            navigation.getParent()?.setOptions({
                tabBarStyle: undefined,
            });
    }, [navigation]);

    friends = extractGroupList(userFriends);

    return (
        <SafeAreaView style={container.main}>
            <View style={container.simple_flex1}>
                <TouchableOpacity
                    onPress={() => navigation.navigate("NewGroup")}>
                    <View
                        style={{
                            display: "flex",
                            flexDirection: "row",
                            marginLeft: 30,
                            marginTop: 20,
                        }}>
                        <FontAwesomeIcon
                            icon={faUserGroup}
                            size={25}
                            color={green.background_principal.backgroundColor}
                        />
                        <Text
                            style={{
                                color: green.background_principal
                                    .backgroundColor,
                                marginLeft: 10,
                                fontSize: 20,
                            }}>
                            Nouveau groupe
                        </Text>
                    </View>
                </TouchableOpacity>
                <View
                    style={{
                        marginTop: 50,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                    }}>
                    <Text
                        style={{
                            color: orange.background_principal.backgroundColor,
                            marginLeft: 10,
                            fontSize: 25,
                            fontWeight: "bold",
                        }}>
                        Groupes par type de parcours
                    </Text>
                </View>

                <View
                    style={[container.customize_view_border, {marginTop: 20}]}>
                    <TouchableOpacity
                        style={[
                            container.account_touchable,
                            container.accountMenuItem,
                        ]}
                        onPress={() =>
                            navigation.navigate("ListDesGroupes", {
                                title: "Histoire",
                            })
                        }>
                        <FontAwesomeIcon
                            icon={faPuzzlePiece}
                            size={40}
                            color={green.background_principal.backgroundColor}
                        />
                        <View
                            style={{marginLeft: 15, justifyContent: "center"}}>
                            <Text style={[texts.enigme_text]}>Histoire</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[
                            container.account_touchable,
                            container.accountMenuItem,
                        ]}
                        onPress={() =>
                            navigation.navigate("ListDesGroupes", {
                                title: "Cinéma",
                            })
                        }>
                        <FontAwesomeIcon
                            icon={faFilm}
                            size={40}
                            color={orange.background_principal.backgroundColor}
                        />
                        <View
                            style={{marginLeft: 15, justifyContent: "center"}}>
                            <Text style={[texts.enigme_text]}>Cinéma</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[
                            container.account_touchable,
                            container.accountMenuItem,
                        ]}
                        onPress={() =>
                            navigation.navigate("ListDesGroupes", {
                                title: "Géographie",
                            })
                        }>
                        <FontAwesomeIcon
                            icon={faEarthEurope}
                            size={40}
                            color={green.background_principal.backgroundColor}
                        />
                        <View
                            style={{marginLeft: 15, justifyContent: "center"}}>
                            <Text style={[texts.enigme_text]}>Géographie</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={[
                            container.account_touchable,
                            container.accountMenuItem,
                        ]}
                        onPress={() =>
                            navigation.navigate("ListDesGroupes", {
                                title: "Monuments Français",
                            })
                        }>
                        <FontAwesomeIcon
                            icon={faMonument}
                            size={40}
                            color={orange.background_principal.backgroundColor}
                        />
                        <View
                            style={{marginLeft: 15, justifyContent: "center"}}>
                            <Text style={[texts.enigme_text]}>
                                Monuments français
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
}
