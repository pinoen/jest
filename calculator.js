const calculator = {
  sum: function (a, b) {
    return a + b
  },
  subtract: function (a, b) {
    return a - b
  },
  multiply: (a, b) => {
    return a * b
  },
  divide: (a, b) => {
    return a / b;
  }
}

// console.log(calculator.sum(10, 2))
// console.log(calculator.subtract(10, 2))
// console.log(calculator.multiply(10, 2))
// console.log(calculator.divide(10, 2))


module.exports = calculator