import React, {useEffect, useState, useCallback, useLayoutEffect} from "react";
import {GiftedChat} from "react-native-gifted-chat";
import {userInfo} from "./Main";
import SocketIOClient from "socket.io-client";
import {Alert, Text, View, StyleSheet, Button} from "react-native";
import {container} from "../styles/bases";
import {SafeAreaView} from "react-native-safe-area-context";

export function MessagesScreen({navigation, route}) {
    const {GroupID, title} = route.params;
    console.log("ID of group is: " + GroupID);
    const [messages, setMessages] = useState<any[]>([]);

    const socketRef = SocketIOClient("ws://bal-app-test.herokuapp.com", {
        transports: ["websocket"], // you need to explicitly tell it to use websockets
    });

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

    useEffect(() => {
        socketRef.emit("createRoom", GroupID, response => {
            console.log(response);
        });
        socketRef.on("message", response => {
            var sentMessages = {
                _id: "2",
                text: response.message,
                createdAt: new Date(),
                user: {
                    _id: response.name,
                    name: response.name,
                },
            };
            if (response.name != userInfo.nickname) {
                setMessages(previousMessages =>
                    GiftedChat.append(previousMessages, sentMessages),
                );
            }
        });
        socketRef.on("connect_error", (err: {message: any}) => {
            console.log(err);
        });
        return () => {
            socketRef.disconnect();
        };
    }, []);

    const onSend = useCallback((messages = []) => {
        console.log(messages);
        socketRef.emit(
            "createMessage",
            {name: userInfo.nickname, message: messages[0].text, room: GroupID},
            response => {
                console.log(response);
            },
        );
        setMessages(previousMessages =>
            GiftedChat.append(previousMessages, messages),
        );
    }, []);

    return (
        <SafeAreaView style={container.main}>
            <View style={container.simple_flex1}>
                <GiftedChat
                    messages={messages}
                    onSend={messages => onSend(messages)}
                    user={{
                        _id: userInfo.nickname,
                        name: userInfo.nickname,
                    }}
                />
            </View>
        </SafeAreaView>
    );
}
