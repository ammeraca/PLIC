import * as React from "react";
import {useState} from "react";
import {
    SafeAreaView,
    TouchableOpacity,
    View,
    Text,
    Dimensions,
} from "react-native";

import Ionicons from "react-native-vector-icons/Ionicons";

import {NavigationContainer} from "@react-navigation/native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";

import {AccountStackScreens} from "./src/screens/Account";
import {MainScreen} from "./src/screens/Main";
import {PuzzleStackScreens} from "./src/screens/Puzzles";
import {SettingsScreen} from "./src/screens/Settings";
import {ConversationStackScreen} from "./src/screens/Conversations";
import UnityScreen from "./src/screens/Unity";

import {container} from "./src/styles/bases";
import {texts} from "./src/styles/texts";

import Auth0 from "react-native-auth0";
import {green} from "./src/styles/colors";
import LoginLogoAndText from "./src/components/LoginLogoAndText";

export const auth0 = new Auth0({
    domain: "dev-2hywfoly.us.auth0.com",
    clientId: "tHcYwkoXb5joD3831R0j076CIWzIbyqJ",
});

const size = Dimensions.get("window").width;

export type RootTabParamList = {
    Accueil: undefined; // undefined because you aren't passing any params to the home screen
    Puzzles: undefined;
    Conversations: undefined;
    Compte: undefined;
    Caméra: undefined;
};

export var token = "";

const Tab = createBottomTabNavigator<RootTabParamList>();

// authentification at https://reactnavigation.org/docs/auth-flow
export default function App() {
    const [accessToken, setAccessToken] = useState("");

    const handleLoginPress = () => {
        auth0.webAuth
            .authorize({scope: "openid profile email"})
            .then(credentials =>
                // Successfully authenticated
                // Store the accessToken
                setAccessToken(credentials.accessToken),
            )
            .catch(error => console.log(error));
    };
    token = accessToken;
    return (
        <SafeAreaView style={container.main}>
            {!accessToken ? (
                <View style={container.main}>
                    <LoginLogoAndText></LoginLogoAndText>
                    <View
                        style={{
                            justifyContent: "center",
                            alignItems: "center",
                            marginTop: 40,
                        }}>
                        <TouchableOpacity
                            onPress={() => {
                                handleLoginPress();
                            }}
                            style={[
                                green.background_principal,
                                container.simple_shadows,
                                {
                                    borderRadius: 7,
                                    alignItems: "center",
                                    justifyContent: "center",
                                    width: size - 60,
                                    paddingTop: 10,
                                    paddingBottom: 10,
                                },
                            ]}>
                            <View>
                                <Text style={texts.button_text}>
                                    Se connecter
                                </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View
                        style={{
                            width: "100%",
                            position: "absolute",
                            bottom: 20,
                        }}>
                        <View
                            style={{
                                width: "100%",
                                flexDirection: "row",
                                justifyContent: "center",
                                alignItems: "center",
                            }}>
                            <Text style={texts.not_account_text}>
                                Pas de compte?
                            </Text>
                            <TouchableOpacity>
                                <Text style={texts.signUp_text}>
                                    {" "}
                                    S'inscrire
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            ) : (
                <NavigationContainer>
                    <Tab.Navigator
                        initialRouteName="Accueil"
                        screenOptions={({route}) => ({
                            tabBarIcon: ({focused, color}) => {
                                let iconName;

                                if (route.name === "Compte") {
                                    iconName = focused
                                        ? "md-person"
                                        : "md-person-outline";
                                } else if (route.name === "Caméra") {
                                    iconName = focused
                                        ? "camera"
                                        : "camera-outline";
                                } else if (route.name === "Accueil") {
                                    iconName = focused
                                        ? "home"
                                        : "home-outline";
                                } else if (route.name === "Conversations") {
                                    iconName = focused
                                        ? "chatbubbles"
                                        : "chatbubbles-outline";
                                } else if (route.name === "Puzzles") {
                                    iconName = focused
                                        ? "help"
                                        : "help-outline";
                                }
                                var _name = String(iconName);

                                return (
                                    <Ionicons
                                        name={_name}
                                        size={35}
                                        color={color}
                                    />
                                );
                            },
                            tabBarActiveTintColor: "#f4ad00",
                            tabBarInactiveTintColor: "#8E8E92",
                            tabBarStyle: {
                                padding: 5,
                                height: 55,
                            },
                            tabBarLabelStyle: {
                                fontSize: 11,
                                fontWeight: "bold",
                            },
                        })}>
                        <Tab.Screen
                            name="Accueil"
                            component={MainScreen}
                            options={{headerShown: false}}
                        />
                        <Tab.Screen
                            name="Puzzles"
                            component={PuzzleStackScreens}
                            options={{
                                headerShown: false,
                            }}
                        />
                        <Tab.Screen
                            name="Conversations"
                            component={ConversationStackScreen}
                            options={{
                                tabBarBadge: 3,
                                headerShown: false,
                            }}
                        />
                        <Tab.Screen
                            name="Compte"
                            component={AccountStackScreens}
                            options={{headerShown: false}}
                        />
                        <Tab.Screen
                            name="Caméra" // FIXME
                            component={UnityScreen}
                            options={{headerShown: false}}
                        />
                    </Tab.Navigator>
                </NavigationContainer>
            )}
        </SafeAreaView>
    );
}
