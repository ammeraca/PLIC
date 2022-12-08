import React from "react";
import {
    View,
    Text,
    TouchableOpacity,
    ImageBackground,
    TextInput,
    Platform,
    SafeAreaView,
} from "react-native";
import {container} from "../styles/bases";
import Ionicons from "react-native-vector-icons/Ionicons";
import {titles, texts} from "../styles/texts";
import {userInfo} from "./Main";
import {StateUser} from "./Account";
import {KeyboardAvoidingWrapper} from "../components/KeyboardAvoidingWrapper";

export function EditProfileScreen({route}) {
    console.log(userInfo);

    const {user} = route.params;
    StateUser.id = user.id;
    StateUser.username = user.username;
    StateUser.email = user.email;
    StateUser.location = user.location;
    StateUser.description = user.description;

    return (
        <SafeAreaView style={container.main}>
            <KeyboardAvoidingWrapper>
                <View style={{margin: 20}}>
                    <View style={{alignItems: "center", marginBottom: 10}}>
                        <TouchableOpacity>
                            <View
                                style={{
                                    height: 100,
                                    width: 100,
                                    borderRadius: 15,
                                    justifyContent: "center",
                                    alignItems: "center",
                                    marginBottom: 10,
                                }}>
                                <ImageBackground
                                    source={{
                                        uri: userInfo.picture,
                                    }}
                                    style={{height: 100, width: 100}}
                                    imageStyle={{
                                        borderRadius: 15,
                                    }}></ImageBackground>
                            </View>
                        </TouchableOpacity>
                        <Text style={[titles.user_name]}>{userInfo.email}</Text>
                    </View>
                    <View style={{marginTop: 20, marginBottom: 20}}>
                        <View
                            style={{
                                borderColor: "#f2f2f2",
                                borderWidth: 2,
                                borderRadius: 7,
                            }}>
                            <TextInput
                                placeholder={" " + user.description}
                                placeholderTextColor="#666666"
                                autoCorrect={false}
                                style={[
                                    texts.simple_text,
                                    {height: 100, textAlignVertical: "top"},
                                ]}
                                onChangeText={text =>
                                    (StateUser.description = text)
                                }
                            />
                        </View>
                        <Text style={{marginTop: 10}}>
                            Saisissez des informations sur vous !!
                        </Text>
                    </View>
                    <View style={container.editAccountPanel}>
                        <Ionicons name="person" color="#777777" size={25} />
                        <TextInput
                            placeholder={user.username}
                            placeholderTextColor="#666666"
                            autoCorrect={false}
                            style={[
                                texts.simple_text,
                                {
                                    flex: 1,
                                    marginTop: Platform.OS === "ios" ? 0 : -7,
                                    paddingLeft: 10,
                                    color: "#05375a",
                                },
                            ]}
                            onChangeText={text => (StateUser.username = text)}
                        />
                    </View>
                    <View style={container.editAccountPanel}>
                        <Ionicons name="location" color="#777777" size={25} />
                        <TextInput
                            placeholder={user.location}
                            placeholderTextColor="#666666"
                            autoCorrect={false}
                            style={[
                                texts.simple_text,
                                {
                                    flex: 1,
                                    marginTop: Platform.OS === "ios" ? 0 : -10,
                                    paddingLeft: 10,
                                    color: "#05375a",
                                },
                            ]}
                            onChangeText={text => (StateUser.location = text)}
                        />
                    </View>
                </View>
            </KeyboardAvoidingWrapper>
        </SafeAreaView>
    );
}
