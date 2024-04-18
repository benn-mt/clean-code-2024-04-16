const { Unit } = require("./unit");

const CELCIUS = new Unit();
const FARENHEIGHT = new Unit(5.0/9.0, CELCIUS, 32)

module.exports = {CELCIUS, FARENHEIGHT}