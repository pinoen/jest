const calculator = require('./calculator')

test('adding 2 + 2 should equal 4', () => {
  expect(calculator.sum(2, 2)).toEqual(4)
})

test('subtracting 2 from 2 should equal 0', () => {
  expect(calculator.subtract(2, 2)).toEqual(0)
})

test('multiplying 2 by 2 should equal 4', () => {
  expect(calculator.multiply(2, 2)).toEqual(4)
})

test('dividing 2 between 2 should equal 1', () => {
  expect(calculator.divide(2, 2)).toEqual(1)
})

test('adding 2 + 2 should be greater than 3', () => {
  expect(calculator.sum(2, 2)).toBeGreaterThan(3)
})

test('subtracting 2 from 2 should be less than 1', () => {
  expect(calculator.subtract(2, 2)).toBeLessThan(1)
})

test('multiplying 2 by 2 should be greater or equal to 3.5', () => {
  expect(calculator.multiply(2, 2)).toBeGreaterThanOrEqual(3.5)
})

test('dividing 2 between 2 should be less or equal to 1.5', () => {
  expect(calculator.divide(2, 2)).toBeLessThanOrEqual(1.5)
})