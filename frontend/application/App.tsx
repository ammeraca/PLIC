import * as React from "react";
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
    Account: undefined;
    Settings: undefined;
};

const Tab = createBottomTabNavigator<RootTabParamList>();

// authentification at https://reactnavigation.org/docs/auth-flow
export default function App() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName="Accueil"
                screenOptions={() => ({
                    tabBarActiveTintColor: "#f4ad00",
                    tabBarInactiveTintColor: "gray",
                })}>
                <Tab.Screen
                    name="Accueil"
                    component={MainScreen}
                    options={{
                        headerShown: false,
                    }}
                />
                <Tab.Screen
                    name="Puzzles"
                    component={PuzzleScreen}
                    options={{headerShown: false}}
                />
                <Tab.Screen
                    name="Conversations"
                    component={ConversationScreen}
                    options={{tabBarBadge: 3, headerShown: false}}
                />
                <Tab.Screen
                    name="Account"
                    component={AccountScreen}
                    options={{headerShown: false}}
                />
                <Tab.Screen
                    name="Settings"
                    component={SettingsScreen}
                    options={{headerShown: false}}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
}
