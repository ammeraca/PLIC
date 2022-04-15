import React, {useState} from "react";
import {StyleSheet, View, FlatList, Alert, Keyboard} from "react-native";
import Header from "./src/components/header";
import Item from "./src/components/item";
import Task from "./src/components/addTask";

export default function App() {
    const [todos, setTodos] = useState([
        {text: "buy coffee", key: "1"},
        {text: "create an app", key: "2"},
        {text: "play on the switch", key: "3"},
    ]);

    const pressHandler = (key: string) => {
        setTodos(prevTodos => {
            return prevTodos.filter(todo => todo.key != key);
        });
    };

    const submitHandler = (text: string) => {
        if (text.length > 0) {
            setTodos(prevTodos => {
                return [{text, key: Math.random().toString()}, ...prevTodos];
            });
        } else {
            Alert.alert("OOPS", "Todo must be over 3 characters long", [
                {
                    text: "Understood",
                    onPress: () => console.log("alert closed"),
                },
            ]);
        }
    };

    return (
        <View style={styles.container}>
            <Header />
            <Task submitHandler={submitHandler} />
            <View style={styles.content}>
                <View>
                    <FlatList
                        data={todos}
                        renderItem={({item}) => (
                            <Item item={item} pressHandler={pressHandler} />
                        )}
                    />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    content: {
        padding: 20,
    },
});
