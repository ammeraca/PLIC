import React from "react";
import {StyleSheet, View, Text, SafeAreaView, Image} from "react-native";
import {TouchableOpacity} from "react-native-gesture-handler";
import MapView from "react-native-maps";
import {Map} from "../components/maps";
import {container} from "../styles/bases";
import {green} from "../styles/colors";
import {titles} from "../styles/texts";

export function MainScreen({navigation}) {
    return (
        <SafeAreaView style={container.main}>
            <View style={container.simple_center_flex2}>
                <Text style={[titles.app_title, green.principal]}>BalApp</Text>
            </View>
            <Map />

            <View
                style={[
                    container.simple_center_flex1,
                    container.shadows,
                    container.vertical_container,
                ]}>
                <TouchableOpacity
                    onPress={() => navigation.navigate("Puzzles")}
                    style={container.vertical_container}>
                    <Image
                        source={require("../../assets/images/puzzle1.png")}
                        style={{width: 80, height: 80}}
                    />
                    <View style={{marginLeft: 50}}>
                        <Text style={styles.title}>Riddle</Text>
                        <Text style={styles.text}>Here</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    title: {
        fontWeight: "bold",
        color: "#010035",
        fontSize: 16,
    },
    text: {
        color: "#333333",
    },
});
