import React, {useEffect, useState} from "react";
import {View, Text, SafeAreaView} from "react-native";
import {container} from "../styles/bases";
import {titles, texts} from "../styles/texts";
import {Avatar, Caption, Title} from "react-native-paper";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import Ionicons from "react-native-vector-icons/Ionicons";
import {orange, green} from "../styles/colors";
import {TouchableOpacity} from "react-native";
import {userInfo} from "./Main";
import {EditProfileScreen} from "./EditProfile";
import {getUser, updateUser} from "../components/back";

const AccountStack = createNativeStackNavigator();

export function AccountStackScreens({navigation}) {
    return (
        <AccountStack.Navigator>
            <AccountStack.Screen
                name="Account"
                component={AccountScreen}
                options={{headerShown: false}}
            />
            <AccountStack.Screen
                name="EditProfile"
                component={EditProfileScreen}
                options={{
                    title: "",
                    headerShadowVisible: false,
                    headerTintColor: "#46a233",
                    headerRight: () => (
                        <TouchableOpacity
                            onPress={() => {
                                updateUser(StateUser);
                                navigation.navigate("Account");
                            }}>
                            <View>
                                <Text style={[texts.termine_text]}>
                                    Terminé
                                </Text>
                            </View>
                        </TouchableOpacity>
                    ),
                }}
            />
        </AccountStack.Navigator>
    );
}

export const StateUser = {
    id: "",
    username: "",
    email: "",
    location: "",
    description: "",
};

export function AccountScreen({navigation}) {
    const [user, setUser] = useState("");

    useEffect(() => {
        getUser(setUser);
        navigation.addListener("focus", () => {
            getUser(setUser);
        });
    }, [navigation]);
    return (
        <SafeAreaView style={container.main}>
            <View style={container.simple_center_flex1}>
                <Text style={[titles.screen_title, orange.dark]}> COMPTE </Text>
            </View>
            <View
                style={[
                    container.simple_flex4,
                    {
                        marginHorizontal: 15,
                    },
                ]}>
                <View style={{flexDirection: "row"}}>
                    <Avatar.Image
                        //source={require("../../assets/images/user1.png")}
                        source={{
                            uri: userInfo.picture,
                        }}
                        size={80}
                        style={{backgroundColor: "white"}}
                    />
                    <View style={{marginLeft: 15}}>
                        <Title
                            style={[
                                titles.user_name,
                                {
                                    marginTop: 15,
                                },
                            ]}>
                            {user.username}
                        </Title>
                        <Caption style={texts.caption_text}>
                            {user.description}
                        </Caption>
                    </View>
                </View>
                <View style={{marginTop: 15}}>
                    <View style={container.row}>
                        <Ionicons
                            name="location"
                            color="#777777"
                            size={20}></Ionicons>
                        <Text style={[texts.caption_text, {marginLeft: 15}]}>
                            {user.location}
                        </Text>
                    </View>
                    <View style={container.row}>
                        <Ionicons
                            name="mail"
                            color="#777777"
                            size={20}></Ionicons>
                        <Text style={[texts.caption_text, {marginLeft: 15}]}>
                            {userInfo.email}
                        </Text>
                    </View>
                </View>
                <View style={[container.infoBoxWrapper, {marginTop: 15}]}>
                    <View
                        style={[
                            container.infoBox,
                            {
                                borderRightColor: "#dddddd",
                                borderRightWidth: 1,
                            },
                        ]}>
                        <Title style={titles.simple_title}>Cinéma</Title>
                        <Caption style={texts.caption_text}>
                            Type de parcours
                        </Caption>
                    </View>
                    <View style={container.infoBox}>
                        <Title style={titles.simple_title}>8</Title>
                        <Caption style={texts.caption_text}>
                            Groupes d'amis
                        </Caption>
                    </View>
                </View>
                <View
                    style={[container.customize_view_border, {marginTop: 20}]}>
                    <TouchableOpacity
                        style={[
                            container.account_touchable,
                            container.accountMenuItem,
                        ]}
                        onPress={() =>
                            navigation.navigate("EditProfile", {
                                user: user,
                            })
                        }>
                        <Ionicons
                            name="person"
                            color="#f4ad00"
                            size={25}></Ionicons>
                        <View
                            style={{marginLeft: 15, justifyContent: "center"}}>
                            <Text style={[texts.simple_text2]}>
                                Gerer le compte
                            </Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[
                            container.account_touchable,
                            container.accountMenuItem,
                        ]}
                        onPress={() => {}}>
                        <Ionicons
                            name="lock-closed"
                            color="#f4ad00"
                            size={25}></Ionicons>
                        <View
                            style={{marginLeft: 15, justifyContent: "center"}}>
                            <Text style={[texts.simple_text2]}>
                                Changer de mot de passe
                            </Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[
                            container.account_touchable,
                            container.accountMenuItem,
                        ]}
                        onPress={() => {}}>
                        <Ionicons
                            name="settings"
                            color="#f4ad00"
                            size={25}></Ionicons>
                        <View
                            style={{marginLeft: 15, justifyContent: "center"}}>
                            <Text style={[texts.simple_text2]}>Paramètres</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity
                    onPress={() => {}}
                    style={[
                        green.background_principal,
                        container.button,
                        {marginTop: 30, borderRadius: 5},
                    ]}>
                    <View>
                        <Text style={texts.button_text}>Déconnexion</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}
