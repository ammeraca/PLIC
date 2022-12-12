import React, {useEffect, useState} from "react";
import {View, FlatList} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";
import {getUserFriends} from "../components/back";
import {container} from "../styles/bases";
import {colorList} from "./Conversations";
import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome";
import {faCircleUser} from "@fortawesome/free-solid-svg-icons";
import {ListItem, Icon} from "@rneui/themed";
import {texts} from "../styles/texts";
import {ListItemCheckBox} from "@rneui/base/dist/ListItem/ListItem.CheckBox";
import {friends} from "./NewDiscussions";

export var userFriendsId: number[] = [];

export function NewGroupScreen() {
    const [selectedItem, setSelectedItem] = useState<number[]>([]);

    const list = friends;

    const keyExtractor = (item, index) => index.toString();

    function addItem(id: number) {
        if (selectedItem.includes(id)) {
            const tmp = selectedItem.filter(itemId => itemId != id);
            setSelectedItem(tmp);
        } else {
            setSelectedItem([...selectedItem, id]);
        }
    }

    const renderItem = ({item}) => (
        <ListItem topDivider>
            <FontAwesomeIcon icon={faCircleUser} size={60} color={item.color} />
            <ListItem.Content>
                <ListItem.Title style={texts.enigme_text}>
                    {item.username}
                </ListItem.Title>
                <ListItem.Subtitle>{item.email}</ListItem.Subtitle>
            </ListItem.Content>
            <ListItemCheckBox
                checkedIcon="dot-circle-o"
                uncheckedIcon="circle-o"
                checked={selectedItem.includes(item.id)}
                onPress={() => addItem(item.id)}
            />
        </ListItem>
    );

    userFriendsId = selectedItem;

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
