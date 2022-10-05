import React, {useEffect, useRef, useState, useCallback} from "react";
import {Alert, Text, View, StyleSheet, Button, LogBox} from "react-native";
import {FlatList} from "react-native-gesture-handler";
import {List, TextInput} from "react-native-paper";
import {container} from "../styles/bases";
import SocketIOClient from "socket.io-client";
import {ListItem, Avatar} from "@rneui/themed";
import {GiftedChat} from "react-native-gifted-chat";
import {userInfo} from "./Main";

export function ConversationScreen() {
    LogBox.ignoreLogs(["Warning: ..."]); // Ignore log notification by message
    LogBox.ignoreAllLogs(); //Ignore all log notifications
    const [messages, setMessages] = useState<any[]>([]);

    const socketRef = SocketIOClient("ws://bal-app-test.herokuapp.com", {
        transports: ["websocket"], // you need to explicitly tell it to use websockets
    });
    useEffect(() => {
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
            {name: userInfo.nickname, message: messages[0].text},
            response => {
                console.log(response);
            },
        );
        setMessages(previousMessages =>
            GiftedChat.append(previousMessages, messages),
        );
    }, []);
    return (
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
    );
}
