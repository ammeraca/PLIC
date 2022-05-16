import * as React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import {NavigationContainer} from "@react-navigation/native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";

import {AccountScreen} from "./src/screens/Account";
import {ConversationScreen} from "./src/screens/Conversations";
import {MainScreen} from "./src/screens/Main";
import {PuzzleScreen} from "./src/screens/Puzzles";
import {SettingsScreen} from "./src/screens/Settings";

export type RootTabParamList = {
    Accueil: undefined; // undefined because you aren't passing any params to the home screen
    Puzzles: undefined;
    Conversations: undefined;
    Compte: undefined;
    Caméra: undefined;
};

const Tab = createBottomTabNavigator<RootTabParamList>();

// authentification at https://reactnavigation.org/docs/auth-flow
export default function App() {
    return (
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
                            iconName = focused ? "camera" : "camera-outline";
                        } else if (route.name === "Accueil") {
                            iconName = focused ? "home" : "home-outline";
                        } else if (route.name === "Conversations") {
                            iconName = focused
                                ? "chatbubbles"
                                : "chatbubbles-outline";
                        } else if (route.name === "Puzzles") {
                            iconName = focused ? "help" : "help-outline";
                        }
                        var _name = String(iconName);

                        return (
                            <Ionicons name={_name} size={35} color={color} />
                        );
                    },
                    tabBarActiveTintColor: "#f4ad00",
                    tabBarInactiveTintColor: "gray",
                })}>
                <Tab.Screen
                    name="Accueil"
                    component={MainScreen}
                    options={{headerShown: false}}
                />
                <Tab.Screen
                    name="Puzzles"
                    component={PuzzleScreen}
                    options={{
                        headerShown: false,
                    }}
                />
                <Tab.Screen
                    name="Conversations"
                    component={ConversationScreen}
                    options={{
                        tabBarBadge: 3,
                        headerShown: false,
                    }}
                />
                <Tab.Screen
                    name="Compte"
                    component={AccountScreen}
                    options={{headerShown: false}}
                />
                <Tab.Screen
                    name="Caméra" // FIXME
                    component={SettingsScreen}
                    options={{headerShown: false}}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
}
