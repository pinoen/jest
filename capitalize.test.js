const capitalize = require('./capitalize')


test('capitalize word with all letter written in lowercase', () => {
  expect(capitalize('argentina')).toBe('Argentina')
})

test('capitalize word with all letter written in uppercase', () => {
  expect(capitalize('ARGENTINA')).toBe('Argentina')
})

test('capitalize word with a mix of upper and lowercase on random order', () => {
  expect(capitalize('aRGenTinA')).toBe('Argentina')
})

test('there is a A in Argentina', () => {
  expect(capitalize('Argentina')).toMatch(/A/)
})

test('there is no R in Argentina', () => {
  expect(capitalize('Argentina')).not.toMatch(/R/)
})