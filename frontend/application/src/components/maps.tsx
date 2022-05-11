import React from "react";
import MapView from "react-native-maps";
import {container} from "../styles/bases";

export function Map() {
    return (
        <MapView
            style={[container.map, container.shadows]}
            initialRegion={{
                latitude: 48.815641,
                longitude: 2.363056,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            }}
        />
    );
}
