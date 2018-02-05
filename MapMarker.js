import React, {Component} from 'react';
import { Marker } from 'react-native-maps';
import tree from './assets/tree.png';

export default class MapMarker extends Component {
    render() {
        const markers = [
            {coordinate: {latitude: 37.794675 , longitude: -122.411396}, title: "Museum", image: tree},
            {coordinate: {latitude: 37.77249691, longitude: -122.426498294}, title: "Painted ladies", image: tree}
        ]
        return markers.map((marker, i) => (
                <Marker
                    key={i}
                    coordinate={marker.coordinate}
                    title={marker.title}
                    image={marker.image}
                />
              ));
    }
}