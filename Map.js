import React, {Component} from 'react';
import { StyleSheet, Text, View, Dimensions, Button, StatusBar } from 'react-native';
import MapView, { Polyline } from 'react-native-maps';

import MapMarker from './MapMarker';
import path from './LatLng';

export default class Map extends Component {
    render() {
        return (
            <View style={styles.container}>
                <StatusBar hidden={true}/>
                <MapView
                    style={styles.map}
                    initialRegion={{
                        latitude: 54.821,
                        longitude: 24.9365,
                        latitudeDelta: 0.015,
                        longitudeDelta: 0.015
                    }}
                    minZoomLevel={14.5}
                    maxZoomLevel={17}
                >
                    <MapMarker/>
                    <Polyline
                        coordinates={path}
                        strokeColor="#f00" // fallback for when `strokeColors` is not supported by the map-provider
                        strokeWidth={6}
                    />
                </MapView>
            </View>
        )
    }
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
        height: Dimensions.get('window').height - 200,
        zIndex: -1
    }
  });
  