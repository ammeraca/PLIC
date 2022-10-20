import React from "react";
import MapView from "react-native-maps";
import {container} from "../styles/bases";

import {PermissionsAndroid} from "react-native";

export function MapCurrent() {
    async function requestLocationPermission() {
        try {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
            );
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                return true;
            } else {
                return false;
            }
        } catch (err) {
            console.warn(err);
        }
    }

    if (requestLocationPermission() === false) return;

    return (
        <MapView
            style={[container.map, container.shadows]}
            initialRegion={{
                latitude: 48.815641,
                longitude: 2.363056,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            }}
            showsUserLocation={true}
        />
    );
}
function alert(arg0: string) {
    throw new Error("Function not implemented.");
}
