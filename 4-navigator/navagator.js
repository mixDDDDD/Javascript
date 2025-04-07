const addressLat = 10;
const addressLong = 100;
const positionLat = 22;
const positionLong = 48;
function calculateDistance(positionLat, positionLong, addressLat, addressLong) {
    const latDifference = positionLat - addressLat;
    const longDifference = positionLong - addressLong;
    return Math.hypot(latDifference, longDifference);
}

const distance = calculateDistance(positionLat, positionLong, addressLat, addressLong);
console.log(distance.toFixed(2));