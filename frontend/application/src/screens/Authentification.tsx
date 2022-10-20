// import {Component} from "react";
// import {Alert} from "react-native";
// import Auth0 from "react-native-auth0";
// const auth0 = new Auth0({
//     domain: "dev-2hywfoly.us.auth0.com",
//     clientId: "tHcYwkoXb5joD3831R0j076CIWzIbyqJ",
// });

// auth0.webAuth
//     .authorize({scope: "openid profile email"})
//     .then(credentials =>
//         // Successfully authenticated
//         // Store the accessToken
//         this.setState({accessToken: credentials.accessToken}),
//     )
//     .catch(error => console.log(error));

// auth0.webAuth
//     .clearSession({})
//     .then(success => {
//         Alert.alert("Logged out!");
//         this.setState({accessToken: null});
//     })
//     .catch(error => {
//         console.log("Log out cancelled");
//     });

import React, {useState, useEffect} from "react";
import SInfo from "react-native-sensitive-info";
import Auth0 from "react-native-auth0";
import jwtDecode from "jwt-decode";

const auth0 = new Auth0({
    domain: "dev-2hywfoly.us.auth0.com",
    clientId: "tHcYwkoXb5joD3831R0j076CIWzIbyqJ",
});

const AuthContext = React.createContext();

const AuthContextProvider = props => {
    const [loading, setLoading] = useState(true);
    const [loggedIn, setLoggedIn] = useState(null);
    const [userData, setUserData] = useState(null);

    const getUserData = async id => {
        const idToken = id ? id : await SInfo.getItem("idToken", {});
        const {name, picture, exp} = jwtDecode(idToken);

        if (exp < Date.now() / 1000) {
            throw new Error("ID token expired!");
        }

        return {
            name,
            picture,
        };
    };

    useEffect(() => {
        (async () => {
            try {
                const user_data = await getUserData();
                if (user_data) {
                    setLoggedIn(true);
                    setUserData(user_data);
                }
            } catch (err) {
                setLoggedIn(false);
            }
        })();
    }, []);

    useEffect(() => {
        (async () => {
            try {
                if (loggedIn) {
                    const user_data = await getUserData();
                    if (user_data) {
                        setLoggedIn(true);
                        setUserData(user_data);
                    }
                }
            } catch (err) {
                console.log("Error logging in");
            }
        })();
    }, [loggedIn]);

    const login = async () => {
        try {
            const credentials = await auth0.webAuth.authorize({
                scope: "openid email profile",
            });
            await SInfo.setItem("idToken", credentials.idToken, {});
            const user_data = await getUserData(credentials.idToken);
            setLoggedIn(true);
            setUserData(user_data);
        } catch (err) {
            console.log("Error logging in");
        }
    };

    const logout = async () => {
        try {
            await auth0.webAuth.clearSession({});
            await SInfo.deleteItem("idToken", {});
            setLoggedIn(false);
            setUserData(null);
        } catch (err) {
            console.log("Error logging in");
        }
    };

    const value = {
        loading,
        loggedIn,
        login,
        logout,
        userData,
    };

    return (
        <AuthContext.Provider value={value}>
            {props.children}
        </AuthContext.Provider>
    );
};

export {AuthContext, AuthContextProvider};
