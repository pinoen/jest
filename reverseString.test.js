const reverseString = require('./reverseString')

test('Argentina in reverse order should be anitnegrA', () => {
  expect(reverseString('Argentina')).toBe('anitnegrA')
})

test('neuquen in reverse order should be neuquen', () => {
  expect(reverseString('neuquen')).toBe('neuquen')
})