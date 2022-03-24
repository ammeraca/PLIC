import React from "react";
import {useState} from "react";
import { useRef } from "react";
import MapView from "react-native-maps";
import { Marker } from "react-native-maps";
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
  Alert
} from 'react-native';
export default function App() {
  const [region, setRegion] = useState({
    latitude: 51.5079145,
    longitude: -0.0899163,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  });
  const tokyoRegion = {
    latitude: 35.6762,
    longitude: 139.6503,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  };
  const mapRef = useRef(null);
  const goToTokyo = () => {
    //Animate the user to new region. Complete this animation in 3 seconds
    mapRef.current.animateToRegion(tokyoRegion, 3 * 1000);
  };
  return (
    <View style={styles.container}>
      <MapView
        ref={mapRef} 
        style={styles.map}
        initialRegion={tokyoRegion}
        //onRegionChangeComplete runs when the user stops dragging MapView
        onRegionChangeComplete={(region) => setRegion(region)}
      >
        <Marker coordinate={tokyoRegion} />
        <Marker
          coordinate={{
            latitude: 35.67714827145542,
            longitude: 139.6551462687416,
          }}
        />
      </MapView>
      <Button onPress={() => goToTokyo()} title="Go to Tokyo" />
      {/*Display user's current region:*/}
      <Text style={styles.text}>Current latitude: {region.latitude}</Text>
      <Text style={styles.text}>Current longitude: {region.longitude}</Text>
    </View>
  );
}
//create our styling code:
const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    flex: 1, //the container will fill the whole screen.
    justifyContent: "flex-end",
    alignItems: "center",
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});