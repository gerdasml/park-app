import React, {Component} from 'react';
import { Marker } from 'react-native-maps';
import tree from './assets/tree.png';

export default class MapMarker extends Component {
    render() {
        const markers = [
            {coordinate: {longitude: 24.928917, latitude: 54.818275}, title: "Museum", image: tree},
            {coordinate: {longitude: 24.932462, latitude: 54.820199}, title: "Painted ladies", image: tree}
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