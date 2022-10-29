import React, {useLayoutEffect} from "react";
import {SafeAreaView} from "react-native";

export function EnigmePageScreen({navigation, route}) {
    const {title} = route.params;
    useLayoutEffect(() => {
        navigation.setOptions({
            title,
        });
    }, [navigation]);
    return <SafeAreaView></SafeAreaView>;
}
