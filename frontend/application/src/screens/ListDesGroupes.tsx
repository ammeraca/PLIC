import React, {useEffect, useLayoutEffect, useState} from "react";
import {View, TouchableOpacity, FlatList} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";
import {getGroups} from "../components/back";
import {container} from "../styles/bases";
import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome";
import {faCircleUser} from "@fortawesome/free-solid-svg-icons";
import {ListItem} from "@rneui/themed";
import {texts} from "../styles/texts";

const colorList = [
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
            subtitle: "last Message",
        };
        result.push(group);
    }
    return result;
}

export function ListDesGroupesScreen({navigation, route}) {
    const {title} = route.params;
    useLayoutEffect(() => {
        navigation.setOptions({
            title,
        });
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

    const [groups, setGroups] = useState<object[]>([]);
    useEffect(() => {
        getGroups(setGroups);
    }, []);
    //ListItem
    const list = extractGroupList(groups);
    const keyExtractor = (item, index) => index.toString();

    const renderItem = ({item}) => (
        <ListItem bottomDivider>
            <FontAwesomeIcon icon={faCircleUser} size={60} color={item.color} />
            <TouchableOpacity
                onPress={() =>
                    navigation.navigate("Messages", {GroupID: item.id})
                }>
                <ListItem.Content>
                    <ListItem.Title style={texts.enigme_text}>
                        {item.name}
                    </ListItem.Title>
                    <ListItem.Subtitle>{item.subtitle}</ListItem.Subtitle>
                </ListItem.Content>
            </TouchableOpacity>
        </ListItem>
    );
    return (
        <SafeAreaView style={container.main}>
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
