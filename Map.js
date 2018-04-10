import React, {Component} from 'react';
import { StyleSheet, Text, View, Dimensions, Button, StatusBar, Image } from 'react-native';
import MapView, { Polyline } from 'react-native-maps';
import {NavigationActions} from 'react-navigation';
import { Ionicons } from '@expo/vector-icons';

import MapMarker from './MapMarker';
import path from './LatLng';
import tree from './assets/tree.png';

export default class Map extends Component {
    static navigationOptions = {
        drawerLabel: 'Stuff',
        drawerIcon: ({tintColor}) => (
            <Image 
                source={tree}
                style={styles.icon}
            />
        ),
        title: "Title",
        headerLeft: "Burger"
    }
    navigateToScreen = (route, point) => {
        const navigateAction = NavigationActions.navigate({
            routeName: route,
            params: point
        });
        this.props.navigation.dispatch(navigateAction);
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.actionButton}>
                    <Ionicons
                        name="md-menu"
                        size={32}
                        onPress={() => {
                        console.log(this.props.navigation);
                        this.props.navigation.navigate('DrawerOpen');
                        }}/>
                </View>
                <View style={styles.textMap}>
                <Text>sitas appsas yra</Text>
                <MapView
                    style={styles.map}
                    initialRegion={{
                        latitude: 54.821,
                        longitude: 24.9365,
                        latitudeDelta: 0.015,
                        longitudeDelta: 0.015
                    }}
                    scrollEnabled={false}
                    minZoomLevel={14.5}
                    maxZoomLevel={17}
                >
                    <MapMarker onMarkerClicked={this.navigateToScreen.bind(this)}/>
                    <Polyline
                        coordinates={path}
                        strokeColor="#f00" // fallback for when `strokeColors` is not supported by the map-provider
                        strokeWidth={6}
                    />
                </MapView>
                </View>
                
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff'
    //   alignItems: 'center',
    //   justifyContent: 'center',
    },
    map: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height - 200,
        zIndex: -1
    },
    icon: {
        width: 24,
        height: 24
    },
    actionButton: {
        justifyContent: 'flex-start',
        width: Dimensions.get("window").width,
        height: 40,
        paddingLeft: 10
    },
    textMap: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    }
  });
  