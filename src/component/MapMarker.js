import React, {Component} from 'react';
import { Marker } from 'react-native-maps';

import Point from './Point';
import points from '../repository/points';


export default class MapMarker extends Component {
    render() {
        return points.map((point) => (
                <Marker
                    key={point.id}
                    coordinate={point.coordinates}
                    title={point.name}
                    image={point.image}
                    onPress={() => this.props.onMarkerClicked('Point', point)}
                />
              ));
    }
}