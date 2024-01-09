let titik = [
    [-6.17391, 106.82504],
    [-6.17325, 106.82570],
    [-6.17325, 106.82850],
    [-6.17387, 106.82927],
    [-6.17670, 106.82927],
    [-6.17754, 106.82850],
    [-6.17748, 106.82576],
    [-6.17674, 106.82496],
    [-6.17391, 106.82504]
]
const main = [-6.17524, 106.82714]
let scale = 10000
let thetaAngle = []
let area = []
let areaMeasurement = 0

titik.forEach((coordinate, index) => {
    // console.log(coordinate)
    let temp = [0, 0]
    
    for(let i = 0; i <= 1; i++) {
temp[i] = Math.round((coordinate[i]*scale) - (main[i]*scale))

    }
    // console.log(temp)
    titik[index] = temp
})

 pythagoras = (a, b) => {
     a = Math.abs(a)
     b = Math.abs(b)
    return Math.sqrt(Math.pow(a, 2)+Math.pow(b, 2))
}

for (let i = 0; i < titik.length - 1; i++) {
    let temp = ((titik[i][0] * titik[i + 1][0]) + (titik[i][1] * titik[i + 1][1])) /
        (pythagoras(titik[i][0], titik[i][1]) * pythagoras(titik[i+1][0], titik[i+1][1]));
    
    let angle = Math.acos(temp) * (180/Math.PI)
    thetaAngle.push(angle);
}

// console.log(thetaAngle)

for(let i = 0; i < thetaAngle.length - 1; i++) {
    let temp = Math.abs(0.5 * pythagoras(titik[i][0], titik[i][1]) * pythagoras(titik[i+1][0], titik[i+1][1]) * Math.sin(thetaAngle[i]))
    
    area.push(temp)
}
// console.log(area)

area.forEach((item) => {
    console.log(`Luas area satuan = ${item} satuan luas`)
    areaMeasurement += item
})

console.log(`Luas monas = ${Math.round(areaMeasurement)} satuan luas`)

