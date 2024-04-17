const { Unit } = require("./unit");

const INCH = new Unit();
const FOOT = new Unit(12, INCH);

module.exports = {INCH, FOOT}
