const coordinates = [
    [-7.215923226399429, 107.9012204188519],
    [-7.215950747486194, 107.9016285074359],
    [-7.216492733786671, 107.9015877442653],
    [-7.216459114243746, 107.9011831784225],
];
const referencePoint = [-7.216321727073525, 107.9014160677489];
const scaleX = 111108.04
const scaleY = 110720.99
let thetaAngle = [];
let area = [];
let areaMeasurement = 0;

coordinates.forEach((coordinate, index) => {
    let temp = [0, 0];

    for (let i = 0; i <= 1; i++) {
        // temp[i] = (coordinate[i] * SCALE) - (referencePoint[i] * SCALE);
        temp[i] = (coordinate[i]) - (referencePoint[i]);
    }

    coordinates[index] = temp;
});

const pythagoras = (a, b) => {
    return Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
};

for (let i = 0; i < coordinates.length; i++) {
    let temp = ((coordinates[i][0] * coordinates[(i + 1) % coordinates.length][0]) +
        (coordinates[i][1] * coordinates[(i + 1) % coordinates.length][1])) /
        (pythagoras(coordinates[i][0], coordinates[i][1]) *
            pythagoras(coordinates[(i + 1) % coordinates.length][0], coordinates[(i + 1) % coordinates.length][1]));

    let angle = Math.acos(temp);
    thetaAngle.push(angle);
}

for (let i = 0; i < thetaAngle.length; i++) {
    let temp = 0.5 * pythagoras(coordinates[i][0], coordinates[i][1]) *
        pythagoras(coordinates[(i + 1) % coordinates.length][0], coordinates[(i + 1) % coordinates.length][1]) *
        Math.sin(thetaAngle[i]);

    area.push(temp);
}

area.forEach((item) => {
    console.log(`Luas area satuan = ${item} meter`);
    areaMeasurement += item;
});

console.log(`Luas area = ${areaMeasurement * scaleX * scaleY} meter`);
