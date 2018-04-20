import React, {Component} from 'react';
import { StyleSheet, Text, View, Dimensions, Button, StatusBar, Image } from 'react-native';
import MapView, { Polyline, UrlTile } from 'react-native-maps';
import {NavigationActions} from 'react-navigation';
import { Ionicons } from '@expo/vector-icons';

import MapMarker from './MapMarker';
import path from './LatLng';
import tree from './assets/tree.png';
import mapStyle from './MapStyle'; 

export default class Map extends Component {
    constructor(props){
        super(props);
        this.state= {
            region: {
                latitude: 54.821,
                longitude: 24.9365,
                latitudeDelta: 0.015,
                longitudeDelta: 0.015
              }
        }
        this.neverChangingRegion = this.state.region;
    }
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
      
    onRegionChange(region) {
        console.log("region");
        console.log(region);
        console.log("never changing");
        console.log(this.neverChangingRegion);
        const left = region.longitude - region.longitudeDelta;
        const right = region.longitude + region.longitudeDelta;
        const bot = region.latitude - region.latitudeDelta;
        const top = region.latitude + region.latitudeDelta;
        
        const LEFT = this.neverChangingRegion.longitude - this.neverChangingRegion.longitudeDelta;
        const RIGHT = this.neverChangingRegion.longitude + this.neverChangingRegion.longitudeDelta;
        const BOT = this.neverChangingRegion.latitude - this.neverChangingRegion.latitudeDelta;
        const TOP = this.neverChangingRegion.latitude + this.neverChangingRegion.latitudeDelta;
        
        if(left < LEFT || right > RIGHT || bot < BOT || top > TOP) {this.setState({region: this.neverChangingRegion}); return;}
        
        this.setState({region});
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
                    region={this.state.region}
                    onRegionChange={this.onRegionChange.bind(this)}
                    minZoomLevel={14.5}
                    maxZoomLevel={17}
                    customMapStyle={mapStyle}
                    ref={(ref) => this.region = ref}
                    
                >
                    <MapMarker onMarkerClicked={this.navigateToScreen.bind(this)}/>
                    <Polyline
                        coordinates={path}
                        strokeColor="#dba63d" // fallback for when `strokeColors` is not supported by the map-provider
                        strokeWidth={3}
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
  