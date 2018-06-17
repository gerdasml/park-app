import geolib from 'geolib';

export const currentPosition = (updateCurrentPosition) => {
    navigator.geolocation.getCurrentPosition(
        updateCurrentPosition,
        (error) => console.log(error.message),
        {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
    );
};


export const calculatePointsDistance = (currentCoordinates, points) => {
    return points.map(point => {
        return {
            id: point.id,
            distance: geolib.getDistance(currentCoordinates, point.coordinates)
        }
    })
};

export const findNearestCoordinatesInRadius = (currentLocation, coordinates, distance) => {
    calculatePointsDistance(currentLocation, coordinates).find(pointDistance => {
        return pointDistance.distance < distance
    })
};