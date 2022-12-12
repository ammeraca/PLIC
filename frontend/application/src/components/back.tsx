import React, {useEffect, useState} from "react";
import {Dispatch} from "react";
import {userInfo} from "../screens/Main";
import {UserDB} from "../screens/Conversations";
import {userFriendsId} from "../screens/NewGroup";
import {groupInfo} from "../screens/NewGroupInfo";
import {activeGroup} from "./GroupModal";

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
                activeGroup,
        );
        const json = await response.json();

        console.log(json.text.split("‚").join("é"));
        setRiddle(json.text.split("‚").join("é"));
        return json.text;
    } catch (error) {
        console.error(error);
    }
};

export const getRiddleList = async (
    setRiddleList: Dispatch<React.SetStateAction<object[]>>,
): Promise<any> => {
    try {
        console.log("in getRiddleList function :" + activeGroup);
        const response = await fetch(
            "https://bal-app-api.herokuapp.com/riddles/solved/" + activeGroup,
        );
        const json = await response.json();
        setRiddleList(json);
        return json;
    } catch (error) {
        console.error(error);
    }
};

export const getGroups = async (
    setGroups: Dispatch<React.SetStateAction<object[]>>,
): Promise<any> => {
    try {
        console.log("in getGroups function");

        const responseUser = await fetch(
            "https://bal-app-api.herokuapp.com/users/email/" + userInfo.email,
        );
        //console.log(responseUser);
        const user = await responseUser.json();
        console.log("Get group user Id :" + user.id);
        // TODO: handle type !
        const response = await fetch(
            "https://bal-app-api.herokuapp.com/users/" + user.id + "/groups",
        );
        const json = await response.json();
        setGroups(json);
        return json;
    } catch (error) {
        console.error(error);
    }
};

export async function createGroup() {
    try {
        console.log(
            "In create groupe : " +
                groupInfo.name +
                " parcours name: " +
                groupInfo.parcourdName,
        );
        console.log("In create groupe : " + userFriendsId);
        /*CREATE GROUP*/
        var group = {
            name: "",
            parcoursId: 1,
            riddleId: 1,
        };

        group.name = groupInfo.name;

        const requestOptions = {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(group),
        };
        const request = await fetch(
            "https://bal-app-api.herokuapp.com/groups",
            requestOptions,
        );
        const response = await request.json();
        console.log("Groupe: " + response.id);

        /*ADD USER TO GROUP*/
        var userId = {userId: UserDB.id};
        const options = {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(userId),
        };
        await fetch(
            "https://bal-app-api.herokuapp.com/groups/" +
                response.id +
                "/users",
            options,
        );

        /*ADD USER FRIENDS TO GROUP*/
        userFriendsId.forEach(async element => {
            var addUserId = {userId: element};
            const addOptions = {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(addUserId),
            };
            await fetch(
                "https://bal-app-api.herokuapp.com/groups/" +
                    response.id +
                    "/users",
                addOptions,
            );
        });
    } catch (error) {
        console.log(error);
    }
}

export const getUserFriends = async (
    setUserFriends: Dispatch<React.SetStateAction<object[]>>,
): Promise<any> => {
    try {
        console.log("in getUserFriends function: " + UserDB.id);

        const response = await fetch(
            "https://bal-app-api.herokuapp.com/users/" + UserDB.id + "/friends",
        );
        const json = await response.json();
        setUserFriends(json);
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
        console.log("in getUser function: " + userInfo.email);

        // TODO: handle type !
        const response = await fetch(
            "https://bal-app-api.herokuapp.com/users/email/" + userInfo.email,
        );
        const user = await response.json();
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
