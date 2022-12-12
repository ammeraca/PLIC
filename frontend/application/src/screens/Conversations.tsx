import React, {useEffect, useState, useCallback, useRef} from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {Text, View, TouchableOpacity, FlatList} from "react-native";
import {container} from "../styles/bases";
import {texts} from "../styles/texts";
import {ListItem} from "@rneui/themed";
import {SafeAreaView} from "react-native-safe-area-context";
import {createGroup, getGroups, getUser} from "../components/back";
import {MessagesScreen} from "./Messages";
import {SearchBar} from "@rneui/themed";
import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome";
import {faPenToSquare, faCircleUser} from "@fortawesome/free-solid-svg-icons";
import {green} from "../styles/colors";
import {NewDiscussionsScreen} from "./NewDiscussions";
import {ListDesGroupesScreen} from "./ListDesGroupes";
import {NewGroupScreen} from "./NewGroup";
import {NewGroupInfoScreen} from "./NewGroupInfo";

const ConversationStack = createNativeStackNavigator();

export function ConversationStackScreen({navigation}) {
    return (
        <ConversationStack.Navigator>
            <ConversationStack.Screen
                name="ConversationsStack"
                component={ConversationScreen}
                options={{
                    title: "Conversations",
                    headerShown: false,
                }}
            />
            <ConversationStack.Screen
                name="Messages"
                component={MessagesScreen}
                options={{
                    title: "",
                    headerTitleAlign: "center",
                    headerTitleStyle: {
                        fontFamily: "Montserrat-Bold",
                        fontSize: 20,
                    },
                    headerTintColor: "#46a233",
                }}
            />
            <ConversationStack.Screen
                name="NewDiscussions"
                component={NewDiscussionsScreen}
                options={{
                    title: "Nouv.discussion",
                    headerTitleAlign: "center",
                    headerTitleStyle: {
                        fontFamily: "Montserrat-Bold",
                        fontSize: 20,
                    },
                    headerTintColor: "#f4ad00",
                }}
            />
            <ConversationStack.Screen
                name="ListDesGroupes"
                component={ListDesGroupesScreen}
                options={{
                    headerTitleAlign: "center",
                    headerTitleStyle: {
                        fontFamily: "Montserrat-Bold",
                        fontSize: 20,
                    },
                    headerTintColor: green.background_principal.backgroundColor,
                }}
            />
            <ConversationStack.Screen
                name="NewGroup"
                component={NewGroupScreen}
                options={{
                    headerTitleAlign: "center",
                    title: "Ajouter des membres",
                    headerTitleStyle: {
                        fontFamily: "Montserrat-Bold",
                        fontSize: 18,
                        fontWeight: "bold",
                    },
                    headerTintColor: green.background_principal.backgroundColor,
                    headerRight: () => (
                        <TouchableOpacity
                            onPress={() => {
                                navigation.navigate("CreateGroup");
                            }}>
                            <View>
                                <Text style={[texts.termine_text]}>
                                    Suivant
                                </Text>
                            </View>
                        </TouchableOpacity>
                    ),
                }}
            />
            <ConversationStack.Screen
                name="CreateGroup"
                component={NewGroupInfoScreen}
                options={{
                    headerTitleAlign: "center",
                    title: "Nouveau groupe",
                    headerTitleStyle: {
                        fontFamily: "Montserrat-Bold",
                        fontSize: 20,
                    },
                    headerTintColor: green.background_principal.backgroundColor,
                    headerRight: () => (
                        <TouchableOpacity
                            onPress={() => {
                                createGroup();
                                navigation.navigate("ConversationsStack");
                            }}>
                            <View>
                                <Text style={[texts.termine_text]}>Créer</Text>
                            </View>
                        </TouchableOpacity>
                    ),
                }}
            />
        </ConversationStack.Navigator>
    );
}

export const colorList = [
    "#74e65c",
    "#58c042",
    "#46a233",
    "#1e8808",
    "#146b00",
    "#ffce57",
    "#ffc028",
    "#f4ad00",
    "#c38900",
    "#966a00",
    "#8E8E92",
    "#D9D9D9",
];

function extractGroupList(groups) {
    const result = [];
    for (let index = 0; index < groups.length; index++) {
        const element = groups[index];
        const idx = Math.floor(Math.random() * colorList.length);
        var group = {
            id: element.id,
            name: element.name,
            color: colorList[idx],
            avatar: "../../assets/images/user1.png",
            subtitle: "last Message",
        };
        result.push(group);
    }
    return result;
}

export var UserDB = "";

export function ConversationScreen({navigation}) {
    const [groups, setGroups] = useState<object[]>([]);
    const [user, setUser] = useState("");
    useEffect(() => {
        getUser(setUser);
        getGroups(setGroups);

        navigation.addListener("focus", () => {
            getGroups(setGroups);
        });
    }, [navigation]);

    UserDB = user;
    const list = extractGroupList(groups);
    const keyExtractor = (item, index) => index.toString();

    const renderItem = ({item}) => (
        <ListItem topDivider bottomDivider>
            <FontAwesomeIcon icon={faCircleUser} size={60} color={item.color} />
            <ListItem.Content>
                <ListItem.Title style={texts.enigme_text}>
                    {item.name}
                </ListItem.Title>
                <ListItem.Subtitle>{item.subtitle}</ListItem.Subtitle>
            </ListItem.Content>
        </ListItem>
    );

    const [search, setSearch] = useState("");

    const updateSearch = search => {
        setSearch(search);
    };

    return (
        <SafeAreaView style={container.main}>
            <View
                style={{
                    justifyContent: "center",
                    alignItems: "center",
                    margin: 10,
                }}>
                <Text style={texts.enigme_title}>CONVERSATIONS</Text>
            </View>
            <View
                style={{
                    flex: 0.1,
                    flexDirection: "row",
                    padding: 10,
                    alignItems: "center",
                }}>
                <SearchBar
                    lightTheme
                    containerStyle={{
                        backgroundColor: "white",
                        borderWidth: 0,
                        borderBottomColor: "transparent",
                        borderTopColor: "transparent",
                        flex: 8,
                    }}
                    inputContainerStyle={{
                        backgroundColor: "lightgray",
                        height: 30,
                    }}
                    inputStyle={{fontSize: 16}}
                    placeholder="Recherche"
                    onChangeText={updateSearch}
                    value={search}
                />
                <TouchableOpacity
                    onPress={() => navigation.navigate("NewDiscussions")}>
                    <FontAwesomeIcon
                        icon={faPenToSquare}
                        size={30}
                        color={green.background_principal.backgroundColor}
                    />
                </TouchableOpacity>
            </View>

            <View style={container.simple_flex1}>
                <FlatList
                    keyExtractor={keyExtractor}
                    data={list}
                    renderItem={renderItem}
                />
            </View>
        </SafeAreaView>
    );
}
