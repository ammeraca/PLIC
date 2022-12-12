import React, {useLayoutEffect} from "react";
import {
    SafeAreaView,
    View,
    Text,
    TouchableOpacity,
    Dimensions,
} from "react-native";
import {container} from "../styles/bases";
import {green} from "../styles/colors";
import {texts} from "../styles/texts";

const size = Dimensions.get("window").width;

export function EnigmePageScreen({navigation, route}) {
    const {title, enigme_txt} = route.params;
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
    return (
        <SafeAreaView style={container.main}>
            <View
                style={{
                    flex: 0.8,
                    alignItems: "center",
                    marginTop: 30,
                }}>
                <View style={container.enigme_page_view}>
                    <View
                        style={{
                            flex: 0.3,
                            justifyContent: "center",
                            alignItems: "center",
                        }}>
                        <Text style={texts.enigme_page_main_text}>
                            Trouvez le lieu dont on parle dans l’énigme
                        </Text>
                    </View>
                    <View
                        style={{
                            flex: 0.7,
                            justifyContent: "center",
                            alignItems: "center",
                            padding: 8,
                        }}>
                        <Text style={texts.enigme_text}>{enigme_txt}</Text>
                    </View>
                </View>
            </View>
            <View
                style={{
                    flex: 0.2,
                    justifyContent: "center",
                    alignItems: "center",
                }}>
                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate("SuccessPage", {
                            title: title,
                        });
                    }}
                    style={[
                        green.background_principal,
                        container.simple_shadows,
                        {
                            borderRadius: 5,
                            alignItems: "center",
                            width: size - 60,
                            paddingTop: 10,
                            paddingBottom: 10,
                        },
                    ]}>
                    <View>
                        <Text style={texts.button_text}>J'y suis</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}
