import React, {useEffect, useRef, useState} from "react";
import {Alert, Text, View} from "react-native";
import {FlatList} from "react-native-gesture-handler";
import {TextInput} from "react-native-paper";
import SocketIOClient from "socket.io-client";

export function ConversationScreen() {
    const [messages, setMessages] = useState([String, String]);

    const [text, onChangeText] = useState("");

    useEffect(() => {
        const socketRef = SocketIOClient("192.168.3.110:3001", {
            transports: ["websocket"], // you need to explicitly tell it to use websockets
        });

        socketRef.on("connect_error", (err: {message: any}) => {
            console.log(err);
        });
        console.log("outside");
        return () => {
            socketRef.disconnect();
        };
    }, [messages]);

    const onSubmitHandler = () => {
        console.log("onSubmitHandler function");
        // socketRef.emit(
        //     "createMessage",
        //     {name: "Emma", message: "Aled"},
        //     (response: any) => {
        //         console.log(response);
        //     },
        // );
        console.log("outside");
        onChangeText("");
    };

    /////**************************************////
    const DATA = [
        {
            id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
            title: "First Item",
        },
        {
            id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
            title: "Second Item",
        },
        {
            id: "58694a0f-3da1-471f-bd96-145571e29d72",
            title: "Third Item",
        },
    ];

    const Item = ({title}) => (
        <View
            style={{
                backgroundColor: "#f9c2ff",
                padding: 20,
                marginVertical: 8,
                marginHorizontal: 16,
            }}>
            <Text style={{fontSize: 32}}>{title}</Text>
        </View>
    );

    const renderItem = ({item}) => <Item title={item.title} />;

    return (
        <View>
            <FlatList
                data={messages}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
        </View>
    );
}
