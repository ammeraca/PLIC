import React, {useLayoutEffect} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome";
import {
    SafeAreaView,
    View,
    Text,
    TouchableOpacity,
    Dimensions,
} from "react-native";
import {faTrophy} from "@fortawesome/free-solid-svg-icons";
import {container} from "../styles/bases";
import {green} from "../styles/colors";
import {texts, titles} from "../styles/texts";

const size = Dimensions.get("window").width;

export default function SucessPageScreen({navigation, route}) {
    const {title} = route.params;
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
        <SafeAreaView style={container.success_simple_center_flex1}>
            <View style={container.success_page_view}>
                <View
                    style={{
                        justifyContent: "center",
                        alignItems: "center",
                        paddingTop: 15,
                    }}>
                    <FontAwesomeIcon
                        icon={faTrophy}
                        size={180}
                        color={
                            green.background_principal.backgroundColor
                        }></FontAwesomeIcon>
                    <Text style={[titles.congrat_title, {marginTop: 30}]}>
                        Félicitations!!!
                    </Text>
                    <Text style={[texts.login_text, {marginTop: 20}]}>
                        Vous avez retrouvé le lieu indiqué dans l’énigme.
                    </Text>
                    <View style={{marginTop: 40}}>
                        <TouchableOpacity
                            onPress={() => {
                                //navigation.goBack();
                            }}
                            style={[
                                green.background_principal,
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
                                <Text style={texts.button_text}>Voir l'AR</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
}
