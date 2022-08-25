const { createCanvas } = require('canvas')
const fs = require('fs')

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

const canvas = createCanvas(500, 100)
const ctx = canvas.getContext('2d')

let val = 0

while (val !== 600) {
    ctx.fillStyle = getRandomColor();
    ctx.fillRect(val, 0, 100, 100);
    val = val + 100

}

const buffer = canvas.toBuffer('image/png')
fs.writeFileSync('./output.png', buffer)