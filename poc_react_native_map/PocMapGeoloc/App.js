import * as React from 'react';
import MapView, { Callout, Marker, Circle } from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions, Button } from 'react-native';
import * as Location from 'expo-location';

export default function App() {
  const [pin, setPin] = React.useState({latitude: 37.78825,
    longitude: -122.4324,})
  const mapRef = React.useRef(null);
  const goToLocation = () => {
    //Animate the user to new region. Complete this animation in 3 seconds
    const location = {
      latitude: pin.latitude,
      longitude: pin.longitude,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    }
    mapRef.current.animateToRegion(location, 3 * 1000);
  };
  React.useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        console.log('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      autorizationsLocation = true;
      console.log(location);

      setPin({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      });
    })();
  }, []);
  return (
    <View style={styles.container}>
      <MapView style={styles.map} 
      initialRegion={{
        latitude: 48.815641,
        longitude: 2.363056,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
      ref={mapRef}
      showsUserLocation={true}
      onUserLocationChange={(e) => {
        setPin({
          latitude: e.nativeEvent.coordinate.latitude,
          longitude: e.nativeEvent.coordinate.longitude,
        });
      }}
      >
        <Marker coordinate={pin}
          title="Test Title" 
          description="Test Description"
          draggable={true}
          onDragStart={(e) => { 
            console.log("Drag Start", e.nativeEvent.coordinate);
          }}
          onDragEnd={(e) => { 
            console.log("Drag End", e.nativeEvent.coordinate);
          }}
        >
          <Callout>
           <Text>This is a Callout</Text>
          </Callout>
        </Marker>
        <Circle center={pin} radius={100}/>
      </MapView>
      <Button onPress={() => goToLocation()} title="Go to your location" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});
