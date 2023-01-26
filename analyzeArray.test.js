const analyzeArray = require('./analyzeArray')

test('average shoulb be close to 4.75', () => {
  expect(analyzeArray([12, 0, 6, 1]).average).toBeCloseTo(4.75)
})

test('min shoulb be 0', () => {
  expect(analyzeArray([12, 0, 6, 1]).min).toEqual(0)
})

test('max shoulb be 12', () => {
  expect(analyzeArray([12, 0, 6, 1]).max).toEqual(12)
})

test('length shoulb be 4', () => {
  expect(analyzeArray([12, 0, 6, 1]).length).toEqual(4)
})