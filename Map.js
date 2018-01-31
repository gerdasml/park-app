import React from 'react';
import { StyleSheet, Text, View, Dimensions, Button, StatusBar } from 'react-native';
import MapView from 'react-native-maps';

export default class Map extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <StatusBar hidden={true}/>
                <MapView
                    style={styles.map}
                    initialRegion={{
                        latitude: 37.78825,
                        longitude: -122.4324,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421
                    }}
                />
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
  