function caesarCipher(string, factor) {
  let result = [];
  let cipher = ''
  for (letter of string) {
    if (/\w/.test(letter)) {
      if ((letter.charCodeAt(letter) + factor) <= 90) {
        result.push(letter.charCodeAt(letter) + factor)
      } else {
        result.push(letter.charCodeAt(letter) + factor - 26)
      }
    } else {
      result.push(letter.charCodeAt(letter))
    }
  }

  for (letter of result) {
    cipher += String.fromCharCode(letter)
  }
  return cipher
}

// console.log(caesarCipher('GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.', 13))

module.exports = caesarCipher