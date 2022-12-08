import React, {useEffect, useState} from "react";
import {Dispatch} from "react";
import {riddleIdentifier} from "../screens/Puzzles";
import {userInfo} from "../screens/Main";
import {StateUser} from "../screens/Account";

// TODO: search UseState / useEffects !!

const getAuthorizationToken = async () => {
    try {
        console.log("in getAutho");
        const response = await fetch(
            "https://bal-app-api.herokuapp.com/authorization",
        );
        const json = await response.json();
        return json.access_token;
    } catch (error) {
        console.error(error);
    }
};

/*

export const getRiddle = async (
    setRiddle: Dispatch<React.SetStateAction<string>>,
): Promise<any> => {
    try {
        console.log("in getRiddle function");

        var AccessToken: String = await getAuthorizationToken();

        var myHeaders = new Headers();
        console.log("Bearer " + AccessToken);
        myHeaders.append("Authorization", "Bearer " + AccessToken);

        // TODO: handle type !
        const response = await fetch(
            "https://bal-app-api.herokuapp.com/riddles/select_riddle/" +
                riddleIdentifier,
            {
                headers: myHeaders,
            },
        );
        const json = await response.json();

        console.log(json.text.split("‚").join("é"));
        setRiddle(json.text.split("‚").join("é"));
        return json.text;
    } catch (error) {
        console.error(error);
    }
};

export const getGroups = async (
    setGroups: Dispatch<React.SetStateAction<object[]>>,
): Promise<any> => {
    try {
        console.log("in getGroups function");

        var AccessToken: String = await getAuthorizationToken();

        var myHeaders = new Headers();
        console.log("Bearer " + AccessToken);
        myHeaders.append("Authorization", "Bearer " + AccessToken);

        // TODO: handle type !
        const response = await fetch(
            "https://bal-app-api.herokuapp.com/users/1/groups",
            {
                headers: myHeaders,
            },
        );
        const json = await response.json();

        console.log(json);
        setGroups(json);
        return json;
    } catch (error) {
        console.error(error);
    }
};

*/

export const getRiddle = async (
    setRiddle: Dispatch<React.SetStateAction<string>>,
): Promise<any> => {
    try {
        console.log("in getRiddle function");

        // TODO: handle type !
        const response = await fetch(
            "https://bal-app-api.herokuapp.com/riddles/select_riddle/" +
                riddleIdentifier,
        );
        const json = await response.json();

        console.log(json.text.split("‚").join("é"));
        setRiddle(json.text.split("‚").join("é"));
        return json.text;
    } catch (error) {
        console.error(error);
    }
};

export const getGroups = async (
    setGroups: Dispatch<React.SetStateAction<object[]>>,
): Promise<any> => {
    try {
        console.log("in getGroups function");

        // TODO: handle type !
        const response = await fetch(
            "https://bal-app-api.herokuapp.com/users/2/groups",
        );
        const json = await response.json();

        console.log(json);
        setGroups(json);
        return json;
    } catch (error) {
        console.error(error);
    }
};

/* Get user by email*/
export const getUser = async (
    setUser: Dispatch<React.SetStateAction<string>>,
): Promise<any> => {
    try {
        console.log("in getUser function");

        // TODO: handle type !
        const response = await fetch(
            "https://bal-app-api.herokuapp.com/users/email/" + userInfo.email,
        );
        const user = await response.json();

        console.log(user);
        setUser(user);
        return user;
    } catch (error) {
        console.error(error);
    }
};

export async function updateUser(user) {
    try {
        const requestOptions = {
            method: "PUT",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(user),
        };
        const request = await fetch(
            "https://bal-app-api.herokuapp.com/users/",
            requestOptions,
        );
        const response = await request.json();
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}
