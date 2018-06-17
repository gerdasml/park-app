import points from "./points";

export const getAllPoints = () => {
    return points;
};

export const getPointById = (id) => {
    points.find(point => {
        return point.id === id
    });
};