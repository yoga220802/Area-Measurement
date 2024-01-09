let titik = [
    [-3, 2],
    [-2, 3],
    [2, 3],
    [3, 2],
    [3, -2],
    [2, -3],
    [-2, -3],
    [-3, -2],
    [-3, 2]
]
const main = [0, 0]
let scale = 1
let thetaAngle = []
let area = []
let areaMeasurement = 0

if(scale != 1) {
titik.forEach((coordinate, index) => {
    // console.log(coordinate)
    let temp = [0, 0]
    
    for(let i = 0; i <= 1; i++) {
temp[i] = Math.round((coordinate[i]*scale) - (main[i]*scale))

    }
    // console.log(temp)
    titik[index] = temp
})
}

 pythagoras = (a, b) => {
     a = Math.abs(a)
     b = Math.abs(b)
    return Math.sqrt(Math.pow(a, 2)+Math.pow(b, 2))
}

for (let i = 0; i < titik.length - 1; i++) {
    let temp = ((titik[i][0] * titik[i + 1][0]) + (titik[i][1] * titik[i + 1][1])) /
        (pythagoras(titik[i][0], titik[i][1]) * pythagoras(titik[i+1][0], titik[i+1][1]));
    
    let angle = Math.acos(temp)
    thetaAngle.push(angle);
}

// console.log(thetaAngle)

for(let i = 0; i < thetaAngle.length; i++) {
    let temp = Math.abs(0.5 * pythagoras(titik[i][0], titik[i][1]) * pythagoras(titik[i+1][0], titik[i+1][1]) * Math.sin(thetaAngle[i]))
    
    area.push(temp)
}
// console.log(area)

area.forEach((item) => {
    console.log(`Luas area satuan = ${item} satuan luas`)
    areaMeasurement += item
})

console.log(`Luas monas = ${Math.round(areaMeasurement)} satuan luas`)
