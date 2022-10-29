import {useRoute} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import React, {useState, useEffect} from "react";
import {View, Text, SafeAreaView, FlatList} from "react-native";
import {TouchableOpacity} from "react-native";
import {getRiddle} from "../components/back";
import EnigmeCard from "../components/EnigmeCard";
import {container} from "../styles/bases";
import {green, orange} from "../styles/colors";
import {texts, titles} from "../styles/texts";
import {EnigmePageScreen} from "./EnigmePage";

export var riddleIdentifier: string = "1";

const PuzzleStack = createNativeStackNavigator();

export function PuzzleStackScreens() {
    return (
        <PuzzleStack.Navigator>
            <PuzzleStack.Screen
                name="PuzzlesStack"
                component={PuzzleScreen}
                options={{headerShown: false}}
            />
            <PuzzleStack.Screen
                name="EnigmePage"
                component={EnigmePageScreen}
                options={{
                    headerShadowVisible: false,
                    headerTitleAlign: "center",
                    headerTitleStyle: {
                        fontFamily: "Montserrat-Bold",
                        fontSize: 20,
                    },
                    headerTintColor: "#f4ad00",
                }}
            />
        </PuzzleStack.Navigator>
    );
}

const data = [
    {
        name: "Enigme 1",
        status: "Finished",
        text: "Je suis situé dans le 1er arrondissement de Paris. Mon bâtiment est un ancien palais royal. Mes deux statues les plus célèbres sont la Vénus de Milo, et la Victoire de Samothrace. Je suis le plus grand musée de Paris. En 1989, la construction d’une nouvelle entrée en forme de pyramide transforme mon aspect extérieur.",
    },
    {
        name: "Enigme 2",
        status: "InProgress",
        text: "Je suis situé dans le 1er arrondissement de Paris. Mon bâtiment est un ancien palais royal. Mes deux statues les plus célèbres sont la Vénus de Milo, et la Victoire de Samothrace. Je suis le plus grand musée de Paris. En 1989, la construction d’une nouvelle entrée en forme de pyramide transforme mon aspect extérieur.",
    },
    {name: "Enigme 3", status: "Blocked"},
    {name: "Enigme 4", status: "Blocked"},
    {name: "Enigme 5", status: "Blocked"},
    {name: "Enigme 6", status: "Blocked"},
    {name: "Enigme 7", status: "Blocked"},
];

export function PuzzleScreen({navigation}) {
    const [dataSource, setDataSource] = useState([{}]);
    useEffect(() => {
        setDataSource(data);
    }, []);

    return (
        <SafeAreaView style={container.main}>
            <View style={container.enigme_title_view}>
                <Text style={texts.enigme_title}>PUZZLES</Text>
            </View>
            <View style={container.enigme_view}>
                <FlatList
                    data={dataSource}
                    style={{padding: 10}}
                    contentContainerStyle={{
                        flexGrow: 1,
                        justifyContent: "center",
                        paddingBottom: 10,
                    }}
                    renderItem={({item}) => (
                        <View
                            style={{
                                flex: 1,
                                flexDirection: "column",
                            }}>
                            <EnigmeCard
                                enigme={item}
                                navigation={navigation}></EnigmeCard>
                        </View>
                    )}
                    //Setting the number of column
                    numColumns={2}
                    keyExtractor={item => item.name}
                />
            </View>
        </SafeAreaView>
    );
}
