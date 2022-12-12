import React, {useEffect, useState} from "react";
import {
    Alert,
    Modal,
    Text,
    View,
    TouchableOpacity,
    FlatList,
} from "react-native";
import {ListItem} from "@rneui/themed";
import {container} from "../styles/bases";
import {green, orange} from "../styles/colors";
import {texts} from "../styles/texts";
import {getGroups} from "./back";

function extractGroupList(groups) {
    const result = [];
    for (let index = 0; index < groups.length; index++) {
        const element = groups[index];
        var group = {
            id: element.id,
            name: element.name,
        };
        result.push(group);
    }
    return result;
}

export var activeGroup: number = 1;

const GroupModal = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const [groups, setGroups] = useState<object[]>([]);
    useEffect(() => {
        getGroups(setGroups);
    }, []);
    const grouplist = extractGroupList(groups);

    const renderItem = ({item}) => (
        <ListItem bottomDivider>
            <TouchableOpacity
                onPress={() => {
                    activeGroup = item.id;
                }}>
                <ListItem.Content>
                    <ListItem.Title style={texts.enigme_text}>
                        {item.name}
                    </ListItem.Title>
                </ListItem.Content>
            </TouchableOpacity>
        </ListItem>
    );

    return (
        <View style={container.simple_center_flex1}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                    setModalVisible(!modalVisible);
                }}>
                <View style={container.simple_center_flex1}>
                    <View style={container.modalView}>
                        <FlatList
                            data={grouplist}
                            renderItem={renderItem}
                            keyExtractor={item => item.id}></FlatList>
                        <TouchableOpacity
                            onPress={() => {
                                setModalVisible(!modalVisible);
                            }}
                            style={[
                                {
                                    alignItems: "center",
                                    marginTop: 20,
                                },
                            ]}>
                            <View>
                                <Text
                                    style={[
                                        texts.button_text,
                                        {
                                            color: green.background_principal
                                                .backgroundColor,
                                        },
                                    ]}>
                                    Fermer
                                </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
            <TouchableOpacity
                onPress={() => {
                    setModalVisible(true);
                }}
                style={[
                    orange.background_principal,
                    container.simple_shadows,
                    {
                        borderRadius: 10,
                        alignItems: "center",
                        paddingTop: 10,
                        paddingBottom: 10,
                        paddingLeft: 30,
                        paddingRight: 30,
                    },
                ]}>
                <View>
                    <Text style={texts.button_dark_text}>
                        Changer de groupe
                    </Text>
                </View>
            </TouchableOpacity>
        </View>
    );
};

export default GroupModal;
