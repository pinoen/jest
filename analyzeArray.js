function analyzeArray(arr) {
  let total = 0;
  for (number of arr) {
    total += number
  }
  return {
    average: total / arr.length,
    min: Math.min(...arr),
    max: Math.max(...arr),
    length: arr.length
  }
}

console.log(analyzeArray([12, 0, 6, 1]))

module.exports = analyzeArray