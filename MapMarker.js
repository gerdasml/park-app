import React, {Component} from 'react';
import { Marker } from 'react-native-maps';
import { DrawerNavigator } from 'react-navigation'; 

import tree from './assets/tree.png';
import Point from './Point';
import points from './Points';


export default class MapMarker extends Component {
    render() {
        const markers = [
            {coordinate: {longitude: 24.928917, latitude: 54.818275}, image: tree, point: points[0]},
            {coordinate: {longitude: 24.932462, latitude: 54.820199}, image: tree, point: points[1]}
        ]
        return markers.map((marker, i) => (
                <Marker
                    key={i}
                    coordinate={marker.coordinate}
                    title={marker.title}
                    image={marker.image}
                    onPress={() => this.props.onMarkerClicked('Point', marker.point)}
                />
              ));
    }
}