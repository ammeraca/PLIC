import React, {useState, useEffect} from "react";
import {View, Text, TouchableOpacity, StyleSheet} from "react-native";
import {container} from "../styles/bases";
import {green} from "../styles/colors";
import {texts} from "../styles/texts";
import Auth0 from "react-native-auth0";

export const auth0 = new Auth0({
    domain: "dev-2hywfoly.us.auth0.com",
    clientId: "tHcYwkoXb5joD3831R0j076CIWzIbyqJ",
});

export var token = "";

export default function LoginScreen() {
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
        <View style={container.main_login_screen}>
            <TouchableOpacity
                onPress={() => {
                    handleLoginPress();
                }}
                style={[green.background_principal, container.button]}>
                <View>
                    <Text style={texts.button_text}>Login</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
}
