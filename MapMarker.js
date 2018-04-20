import React, {Component} from 'react';
import { Marker } from 'react-native-maps';
import { DrawerNavigator } from 'react-navigation'; 

import tree from './assets/tree.png';
import squirrel from './assets/squirrel.png';
import hill from './assets/hill.png';
import swords from './assets/swords.png';
import mill from './assets/mill.png';
import stones from './assets/stones.png';

import Point from './Point';
import points from './Points';


export default class MapMarker extends Component {
    render() {
        const markers = [
            {coordinate: {longitude: 24.928917, latitude: 54.818275}, image: tree, point: points[0]},
            {coordinate: {longitude: 24.932462, latitude: 54.820199}, image: squirrel, point: points[1]},
            {coordinate: {longitude: 24.936642, latitude: 54.819404}, image: hill, point: points[2]},
            {coordinate: {longitude: 24.933928, latitude: 54.820935}, image: swords, point: points[3]},
            {coordinate: {longitude: 24.937719, latitude: 54.821816}, image: mill, point: points[4]},
            {coordinate: {longitude: 24.942435, latitude: 54.825329}, image: stones, point: points[5]}
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