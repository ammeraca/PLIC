// export function getAuthorizationToken(): any {
//     console.log("in getAutho");
//     fetch("https://bal-app-test.herokuapp.com/authorization")
//         .then(response => response.json())
//         .then(json => {
//             console.log(json.access_token);
//             return json.access_token;
//         })
//         .catch(error => {
//             console.error(error);
//         });
// }
import React, {useState} from "react";
import {Dispatch} from "react";

// TODO: search UseState / useEffects !!

const getAuthorizationToken = async () => {
    try {
        console.log("in getAutho");
        const response = await fetch(
            "https://bal-app-test.herokuapp.com/authorization",
        );
        const json = await response.json();
        return json.access_token;
    } catch (error) {
        console.error(error);
    }
};

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
            "https://bal-app-test.herokuapp.com/riddle/next_riddle?type=history",
            {
                headers: myHeaders,
            },
        );
        const json = await response.json();
        setRiddle(json.text);
        return json.text;
    } catch (error) {
        console.error(error);
    }
};
