import React from "react";
import {StyleSheet, View, Text, SafeAreaView, Image} from "react-native";
import {TouchableOpacity} from "react-native";
import MapView from "react-native-maps";
import {MapCurrent} from "../components/maps";
import {container} from "../styles/bases";
import {green} from "../styles/colors";
import {texts, titles} from "../styles/texts";
import {BottomTabNavigationProp} from "@react-navigation/bottom-tabs";
import {RootTabParamList} from "../../App";

type MainScreenNavigationProp = BottomTabNavigationProp<
    RootTabParamList,
    "Accueil"
>;

type Props = {
    navigation: MainScreenNavigationProp;
};

export function MainScreen({navigation}: Props) {
    return (
        <SafeAreaView style={container.main}>
            <View style={container.simple_center_flex2}>
                <Text style={[titles.app_title, green.principal]}>BalApp</Text>
            </View>
            <MapCurrent />

            <View
                style={[
                    container.simple_flex1,
                    container.shadows,
                    container.vertical_container,
                ]}>
                <TouchableOpacity
                    onPress={() => navigation.navigate("Puzzles")}
                    style={container.vertical_container}>
                    <Image
                        source={require("../../assets/images/logo.png")}
                        style={{
                            width: 110,
                            height: 80,
                        }}
                    />
                    <View style={{marginLeft: 30, justifyContent: "center"}}>
                        <Text style={titles.simple_title}>
                            Votre énigme ici
                        </Text>
                        <Text style={texts.simple_text}>Qui suis-je ?</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}
