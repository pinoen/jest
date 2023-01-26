const caesarCipher = require('./caesarCipher')

test('FREE CODE CAMP should be cipher as SERR PBQR PNZC using a factor switch of 13', () => {
  expect(caesarCipher('FREE CODE CAMP', 13)).toBe('SERR PBQR PNZC')
})

test('FREE PIZZA! should be cipher as SERR CVMMN! using a switch factor of 13', () => {
  expect(caesarCipher('FREE PIZZA!', 13)).toBe('SERR CVMMN!')
})

test('FREE PIZZA! after been ciphered should keep punctuation (!) using any switch factor', () => {
  expect(caesarCipher('FREE PIZZA!', 11)).toMatch(/!/)
})

test('FREE LOVE? should be cipher as SERR YBIR? using a switch factor of 13', () => {
  expect(caesarCipher('FREE LOVE?', 13)).toBe('SERR YBIR?')
})


test('THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG. should be cipher as GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT. using a switch factor of 13', () => {
  expect(caesarCipher('GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.', 13)).toBe('THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.')
})

test('THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG. after been ciphered should keep punctuation (.) using any switch factor', () => {
  expect(caesarCipher('GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.', 5)).toMatch(/./)
})

