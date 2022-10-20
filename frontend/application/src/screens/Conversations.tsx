import React, {useEffect, useState, useCallback, useRef} from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {
    Alert,
    Text,
    View,
    StyleSheet,
    Button,
    TouchableOpacity,
} from "react-native";
import {FlatList} from "react-native-gesture-handler";
import {container} from "../styles/bases";
import {texts} from "../styles/texts";
import {ListItem, Avatar} from "@rneui/themed";
import {SafeAreaView} from "react-native-safe-area-context";
import {getGroups} from "../components/back";
import {MessagesScreen} from "./Messages";
import Ionicons from "react-native-vector-icons/Ionicons";
import {SearchBar} from "@rneui/themed";

const ConversationStack = createNativeStackNavigator();

export function ConversationStackScreen() {
    return (
        <ConversationStack.Navigator>
            <ConversationStack.Screen
                name="ConversationsStack"
                component={ConversationScreen}
                options={{
                    title: "Conversations",
                    headerTitleStyle: {
                        fontFamily: "Montserrat-Bold",
                    },
                    headerTitleAlign: "center",
                    headerShadowVisible: false,
                    headerLeft: () => (
                        <TouchableOpacity>
                            <View>
                                <Text style={[texts.termine_text]}>
                                    Modifier
                                </Text>
                            </View>
                        </TouchableOpacity>
                    ),
                    headerRight: () => (
                        <TouchableOpacity>
                            <Ionicons name="pencil" color="#46a233" size={30} />
                        </TouchableOpacity>
                    ),
                }}
            />
            <ConversationStack.Screen
                name="Messages"
                component={MessagesScreen}
                options={{
                    title: "",
                }}
            />
        </ConversationStack.Navigator>
    );
}

function extractGroupList(groups) {
    const result = [];
    for (let index = 0; index < groups.length; index++) {
        const element = groups[index];
        var group = {
            id: element.id,
            name: element.name,
            avatar: "../../assets/images/user1.png",
            subtitle: "last Message",
        };
        result.push(group);
    }
    return result;
}

export function ConversationScreen({navigation}) {
    const [groups, setGroups] = useState<object[]>([]);
    useEffect(() => {
        getGroups(setGroups);
    }, []);
    //ListItem
    const list = extractGroupList(groups);
    const keyExtractor = (item, index) => index.toString();

    const renderItem = ({item}) => (
        <ListItem bottomDivider>
            <Avatar //source={{uri: item.avatar_url}}
                source={require("../../assets/images/user1.png")}
            />
            <TouchableOpacity
                onPress={() =>
                    navigation.navigate("Messages", {GroupID: item.id})
                }>
                <ListItem.Content>
                    <ListItem.Title>{item.name}</ListItem.Title>
                    <ListItem.Subtitle>{item.subtitle}</ListItem.Subtitle>
                </ListItem.Content>
            </TouchableOpacity>
        </ListItem>
    );

    const [search, setSearch] = useState("");

    const updateSearch = search => {
        setSearch(search);
    };

    return (
        <SafeAreaView style={container.main}>
            <SearchBar
                lightTheme
                round
                containerStyle={{
                    backgroundColor: "white",
                    borderWidth: 0,
                    borderBottomColor: "transparent",
                    borderTopColor: "transparent",
                }}
                inputContainerStyle={{backgroundColor: "lightgray", height: 30}}
                inputStyle={{fontSize: 16}}
                placeholder="Type Here..."
                onChangeText={updateSearch}
                value={search}
            />
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
